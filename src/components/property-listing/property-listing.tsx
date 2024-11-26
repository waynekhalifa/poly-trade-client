import { useState } from "react";
import { StarBorderOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import PropertyCard from "./property-card";
import useSnackbarStore from "@/app/store/snackbar";
import NoneFeaturedCard from "./none-featured-card";
import TypeItem from "./type-item";
import LocationItem from "./location-item";
import { IOption } from "@/app/types/option";
import { IListingItem, IPostParams, Model } from "@/app/types/api";
import { ISessionUser } from "@/app/types/session";
import { createSnackbarResponse } from "@/app/utils/snackbar";
import { post } from "@/app/services/post";

const options: IOption[] = [
  { id: 1, label: "Featured", value: "featured" },
  { id: 2, label: "Newest", value: "newest" },
  { id: 3, label: "Price (low)", value: "price-low" },
  { id: 4, label: "Price (high)", value: "price-high" },
  { id: 5, label: "Beds (least)", value: "beds-least" },
  { id: 6, label: "Beds (most)", value: "beds-most" },
];

interface Props {
  listings: IListingItem[];
  activePage: string;
  searchParams: any;
  session: ISessionUser | null;
}

const PropertyListing: React.FC<Props> = ({
  listings,
  activePage,
  searchParams,
  session,
}) => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const featured: IListingItem | undefined = listings.find(
    (item: any) => item.name === "featuredOrFavorite"
  );
  const nonFeatured: IListingItem | undefined = listings.find(
    (item: any) => item.name === "nonFeaturedOrContacted"
  );
  const propertyTypes: IListingItem | undefined = listings.find(
    (item: IListingItem) => item.name === "propertyTypesOrBrokerProperties"
  );
  const propertyLocations: IListingItem | undefined = listings.find(
    (item: IListingItem) => item.name === "propertyLocationsOrSavedSearches"
  );
  const total: number =
    (featured && featured.result.meta.pagination.total) || 0;
  const nonFeaturedTotal: number =
    (nonFeatured && nonFeatured.result.meta.pagination.total) || 0;
  const [value, setValue] = useState<string>("featured");
  const [name, setName] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setValue(e.target.value);

    if (Object.keys(searchParams).length > 0) {
      let url = `/${activePage}/?`;

      const searchParamsKeys: string[] = Object.keys(searchParams);

      for (let i = 0; i < searchParamsKeys.length; i++) {
        i > 0
          ? (url =
              url +
              `&${searchParamsKeys[i]}=${
                searchParams[`${searchParamsKeys[i]}`]
              }`)
          : (url =
              url +
              `${searchParamsKeys[i]}=${
                searchParams[`${searchParamsKeys[i]}`]
              }`);
      }

      if (!url.includes("sort")) url = url + `&sort=${e.target.value}`;

      if (typeof window !== "undefined") {
        window.open(url, "_self");
      }
    } else {
      if (typeof window !== "undefined") {
        window.open(`/${activePage}/?sort=${e.target.value}`, "_self");
      }
    }
  };

  const successFeedback = () => {
    setSnackbar(
      createSnackbarResponse(
        <>Search has been saved successfully!</>,
        "success"
      )
    );

    setOpen(false);
  };

  const handleSaveSearch = async () => {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>Make sure you have a valid session!</>,
          "error"
        )
      );

      return;
    }

    if (Object.keys(searchParams).length > 0) {
      const search = searchParams["search"];
      const propertyType = searchParams["property-type"];
      const bedrooms = searchParams["bedrooms"];
      const bathrooms = searchParams["bathrooms"];
      const params: string = `/${activePage}?search=${search}&property-type=${propertyType}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`;

      const createSearchParams: IPostParams = {
        path: "/api/searches",
        input: {
          data: {
            name,
            params,
            users: {
              connect: [session.id],
            },
          },
        },
        token: session.token,
      };

      try {
        await post(createSearchParams);

        successFeedback();
      } catch (err: Error | any) {
        setSnackbar(
          createSnackbarResponse(
            <>{err.message ? err.message : err}</>,
            "error"
          )
        );
      }
    } else {
      const createSearchParams: IPostParams = {
        path: "/api/searches",
        input: {
          data: {
            name,
            params: `/${activePage}`,
            users: {
              connect: [session.id],
            },
          },
        },
        token: session.token,
      };

      try {
        await post(createSearchParams);

        successFeedback();
      } catch (err: Error | any) {
        setSnackbar(
          createSnackbarResponse(
            <>{err.message ? err.message : err}</>,
            "error"
          )
        );
      }
    }
  };

  const handleClickOpen = () => {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>You need to login into your account first!</>,
          "error"
        )
      );

      return;
    }

    setName("");
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleName = (e: any) => setName(e.target.value);

  return (
    <>
      <Typography color={"text.secondary"} mb={{ xs: 3 }}>
        {total + nonFeaturedTotal === 1
          ? `${total + nonFeaturedTotal} property`
          : `${total + nonFeaturedTotal} properties`}
      </Typography>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<StarBorderOutlined />}
          onClick={handleClickOpen}
          sx={{ mb: { xs: 1, md: 0 } }}
        >
          Save Search
        </Button>
        <Box width={{ xs: 1, md: "fit-content" }}>
          <Grid
            container
            justifyContent={"flex-end"}
            alignItems={"center"}
            columnGap={"8px"}
          >
            <Typography>Sort by:</Typography>
            <Select
              size="small"
              type="select"
              value={value}
              onChange={handleChange}
              sx={{
                borderRadius: "0px",
                backgroundColor: "common.white",
                overflow: "hidden ",
                minWidth: 144,
              }}
            >
              {options.map((option: IOption) => (
                <MenuItem key={option.value} value={option.value!}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Box>
      </Grid>
      <Box bgcolor={"#F7F6FB"} pb={2} px={2}>
        <Grid container spacing={2} mt={{ xs: 2, md: 3 }}>
          {!searchParams["property-type"] &&
            propertyTypes &&
            propertyTypes.result &&
            propertyTypes.result.data.map((item: Model) => (
              <Grid item xs={12} md={3} key={item.id}>
                <TypeItem
                  data={item}
                  activePage={activePage}
                  searchParams={searchParams}
                />
              </Grid>
            ))}
          {searchParams["property-type"] &&
            propertyLocations &&
            propertyLocations.result &&
            propertyLocations.result.data.map((item: Model) => (
              <Grid item xs={12} md={3} key={item.id}>
                <LocationItem
                  data={item.attributes}
                  activePage={activePage}
                  searchParams={searchParams}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box pb={3}>
        {featured && featured.result.data.length > 0 && (
          <Grid container columnSpacing={3} mt={{ xs: 3 }}>
            {featured.result.data.map((item: any) => (
              <Grid key={item.id} item xs={12} md={6}>
                <PropertyCard
                  id={item.id}
                  data={item.attributes}
                  session={session}
                  activePage={activePage}
                  listings={listings}
                />
              </Grid>
            ))}
          </Grid>
        )}
        {nonFeatured && nonFeatured.result.data.length > 0 && (
          <Grid container columnSpacing={3} mt={{ xs: 3 }}>
            <Grid item xs={12} md={8.5}>
              {nonFeatured.result.data.map((item: any) => (
                <NoneFeaturedCard
                  key={item.id}
                  id={item.id}
                  data={item.attributes}
                  session={session}
                  activePage={activePage}
                  listings={listings}
                />
              ))}
            </Grid>
          </Grid>
        )}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to save this search?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ mb: 1 }}>
            Choose a name for this search
          </DialogContentText>
          <TextField
            size="small"
            placeholder="type the name here..."
            value={name}
            onChange={handleName}
            fullWidth
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3, pt: 0 }}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={handleSaveSearch}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PropertyListing;
