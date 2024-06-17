import Image from "next/image";
import {
  Add,
  FavoriteBorder,
  HomeOutlined,
  InfoOutlined,
  PhoneForwardedOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { getStrapiURL } from "@/app/utils/api-helpers";
import { ISessionUser } from "@/app/types/session";
import LinkWrap from "../link-wrap";
import NoneFeaturedCard from "../property-listing/none-featured-card";
import PropertyForm from "../property-form";
import BrokerCard from "../property-listing/broker-card";
import AccountForm from "../account-form";
import { IListingItem } from "@/app/types/api";

interface Props {
  data: any;
  searchParams: any;
  listings: IListingItem[];
  session: ISessionUser | null;
}

interface ListItemProps {
  text: string;
  href: string;
  icon: React.ReactNode;
  isSelected: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  text,
  href,
  icon,
  isSelected,
}) => {
  return (
    <ListItemButton
      sx={{
        mb: "2px",
        bgcolor: "grey.100",
        borderRight: "4px solid",
        borderColor: isSelected ? "primary.main" : "transparent",
      }}
    >
      <LinkWrap href={href} sx={{ alignItem: "center", width: "100%" }}>
        {icon}
        <ListItemText primary={text}></ListItemText>
      </LinkWrap>
    </ListItemButton>
  );
};

interface SearchItemProps {
  href: string;
  label: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ href, label }) => {
  return (
    <Box component={"li"} mb={1} sx={{ "&:last-of-type": { mb: 0 } }}>
      <LinkWrap href={href}>{label}</LinkWrap>
    </Box>
  );
};

const MyAccount: React.FC<Props> = ({
  data,
  searchParams,
  listings,
  session,
}) => {
  const { margin, padding } = data;
  const singleProperty: IListingItem | undefined = listings.find(
    (item: any) => item.name === "singleProperty"
  );
  const favorite: IListingItem | undefined = listings.find(
    (item: any) => item.name === "featuredOrFavorite"
  );
  const contacted: IListingItem | undefined = listings.find(
    (item: any) => item.name === "nonFeaturedOrContacted"
  );
  const savedSearches: IListingItem | undefined = listings.find(
    (item: any) => item.name === "propertyLocationsOrSavedSearches"
  );
  const brokerProperties: IListingItem | undefined = listings.find(
    (item: any) => item.name === "propertyTypesOrBrokerProperties"
  );

  const isBroker: boolean | null =
    session && session.role && session.role.name === "Broker";

  const isSelected = (label: string): boolean => label === searchParams["tab"];

  return (
    <Box
      pt={{
        xs: padding && padding.top ? padding.top.xs : 0,
        sm: padding && padding.top ? padding.top.sm : 0,
        md: padding && padding.top ? padding.top.md : 0,
        lg: padding && padding.top ? padding.top.lg : 0,
      }}
      pb={{
        xs: padding && padding.bottom ? padding.bottom.xs : 0,
        sm: padding && padding.bottom ? padding.bottom.sm : 0,
        md: padding && padding.bottom ? padding.bottom.md : 0,
        lg: padding && padding.bottom ? padding.bottom.lg : 0,
      }}
      pl={{
        xs: padding && padding.left ? padding.left.xs : 0,
        sm: padding && padding.left ? padding.left.sm : 0,
        md: padding && padding.left ? padding.left.md : 0,
        lg: padding && padding.left ? padding.left.lg : 0,
      }}
      pr={{
        xs: padding && padding.right ? padding.right.xs : 0,
        sm: padding && padding.right ? padding.right.sm : 0,
        md: padding && padding.right ? padding.right.md : 0,
        lg: padding && padding.right ? padding.right.lg : 0,
      }}
      mt={{
        xs: margin && margin.top ? margin.top.xs : 0,
        sm: margin && margin.top ? margin.top.sm : 0,
        md: margin && margin.top ? margin.top.md : 0,
        lg: margin && margin.top ? margin.top.lg : 0,
      }}
      mb={{
        xs: margin && margin.bottom ? margin.bottom.xs : 0,
        sm: margin && margin.bottom ? margin.bottom.sm : 0,
        md: margin && margin.bottom ? margin.bottom.md : 0,
        lg: margin && margin.bottom ? margin.bottom.lg : 0,
      }}
      ml={{
        xs: margin && margin.left ? margin.left.xs : 0,
        sm: margin && margin.left ? margin.left.sm : 0,
        md: margin && margin.left ? margin.left.md : 0,
        lg: margin && margin.left ? margin.left.lg : 0,
      }}
      mr={{
        xs: margin && margin.right ? margin.right.xs : 0,
        sm: margin && margin.right ? margin.right.sm : 0,
        md: margin && margin.right ? margin.right.md : 0,
        lg: margin && margin.right ? margin.right.lg : 0,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={3.5}>
          <List disablePadding>
            <ListItem
              text="Personal information"
              href="/my-account?tab=personal-information&info=details"
              icon={<InfoOutlined sx={{ mr: 2 }} />}
              isSelected={isSelected("personal-information")}
            />
            <ListItem
              text={`Favorite properties (${
                favorite && favorite.result.data && favorite.result.data.length
              })`}
              href="/my-account?tab=favorite-properties"
              icon={<FavoriteBorder sx={{ mr: 2 }} />}
              isSelected={isSelected("favorite-properties")}
            />
            <ListItem
              text={`Contacted properties (${
                contacted &&
                contacted.result.data &&
                contacted.result.data.length
              })`}
              href="/my-account?tab=contacted-properties"
              icon={<PhoneForwardedOutlined sx={{ mr: 2 }} />}
              isSelected={isSelected("contacted-properties")}
            />
            <ListItem
              text={`Saved searches (${
                savedSearches &&
                savedSearches.result.data &&
                savedSearches.result.data.length
              })`}
              href="/my-account?tab=saved-searches"
              icon={<StarBorderOutlined sx={{ mr: 2 }} />}
              isSelected={isSelected("saved-searches")}
            />
            {isBroker && (
              <>
                <ListItem
                  text={`My Listings`}
                  href="/my-account?tab=my-listings"
                  icon={<HomeOutlined sx={{ mr: 2 }} />}
                  isSelected={
                    isSelected("my-listings") ||
                    isSelected("new-property") ||
                    isSelected("edit-property")
                  }
                />
              </>
            )}
          </List>
        </Grid>
        <Grid item xs={12} md={8.5}>
          <Box border={"1px solid"} borderColor={"divider"} p={2}>
            {searchParams["tab"] === "personal-information" && (
              <AccountForm session={session} searchParams={searchParams} />
            )}
            {searchParams["tab"] === "favorite-properties" && (
              <>
                {favorite && favorite.result.data.length === 0 && (
                  <>
                    <Grid container justifyContent={"center"} mb={4}>
                      <Image
                        src={
                          getStrapiURL() +
                          "/uploads/empty_favorite_557703bd05.svg"
                        }
                        alt="empty favorite properties"
                        width={125}
                        height={125}
                      />
                    </Grid>
                    <Typography
                      variant="h5"
                      component={"p"}
                      textAlign={"center"}
                      fontWeight={700}
                      paragraph
                    >
                      No Saved Properties
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      color={"text.secondary"}
                      variant="body2"
                    >
                      Click on a heart to save a property and all your favorites
                      will appear here.
                    </Typography>
                  </>
                )}
                {favorite && favorite.result.data.length > 0 && (
                  <Grid container>
                    {favorite.result.data.map((item: any) => (
                      <NoneFeaturedCard
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                        session={session}
                        activePage={"my-account"}
                        listings={listings}
                      />
                    ))}
                  </Grid>
                )}
              </>
            )}
            {searchParams["tab"] === "contacted-properties" && (
              <>
                {contacted && contacted.result.data.length === 0 && (
                  <>
                    <Grid container justifyContent={"center"} mb={4}>
                      <Image
                        src={
                          getStrapiURL() +
                          "/uploads/empty_contacted_044d0c201f.svg"
                        }
                        alt="empty contacted properties"
                        width={125}
                        height={125}
                      />
                    </Grid>
                    <Typography
                      variant="h5"
                      component={"p"}
                      textAlign={"center"}
                      fontWeight={700}
                      paragraph
                    >
                      Contacted Properties
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      color={"text.secondary"}
                      variant="body2"
                    >
                      Here you will find the properties you inquired about.
                    </Typography>
                  </>
                )}
                {contacted && contacted.result.data.length > 0 && (
                  <Grid container>
                    {contacted.result.data.map((item: any) => (
                      <NoneFeaturedCard
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                        session={session}
                        activePage={"my-account"}
                        listings={listings}
                      />
                    ))}
                  </Grid>
                )}
              </>
            )}
            {searchParams["tab"] === "saved-searches" && (
              <>
                {savedSearches && savedSearches.result.data.length === 0 && (
                  <>
                    <Grid container justifyContent={"center"} mb={4}>
                      <Image
                        src={
                          getStrapiURL() +
                          "/uploads/empty_search_3ee877242f.svg"
                        }
                        alt="empty search properties"
                        width={125}
                        height={125}
                      />
                    </Grid>
                    <Typography
                      variant="h5"
                      component={"p"}
                      textAlign={"center"}
                      fontWeight={700}
                      paragraph
                    >
                      Save your search
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      color={"text.secondary"}
                      variant="body2"
                    >
                      Log in or create an account to save your searches and get
                      updates on new listings.
                    </Typography>
                  </>
                )}
                {savedSearches && savedSearches.result.data.length > 0 && (
                  <List disablePadding>
                    {savedSearches.result.data.map((item: any) => (
                      <SearchItem
                        key={item.id}
                        label={item.attributes.name}
                        href={item.attributes.params}
                      />
                    ))}
                  </List>
                )}
              </>
            )}
            {searchParams["tab"] === "my-listings" && (
              <>
                <LinkWrap href="/my-account?tab=new-property" sx={{ mb: 4 }}>
                  <Button variant="contained" size="small" startIcon={<Add />}>
                    New property
                  </Button>
                </LinkWrap>
                {brokerProperties &&
                  brokerProperties.result.data.length === 0 && (
                    <>
                      <Grid container justifyContent={"center"} mb={4}>
                        <Image
                          src={
                            getStrapiURL() +
                            "/uploads/empty_search_3ee877242f.svg"
                          }
                          alt="empty favorite properties"
                          width={125}
                          height={125}
                        />
                      </Grid>
                      <Typography
                        variant="h5"
                        component={"p"}
                        textAlign={"center"}
                        fontWeight={700}
                        paragraph
                      >
                        My Listings
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        color={"text.secondary"}
                        variant="body2"
                      >
                        {`You don't have listings yet!, Your listings will appear here when you add them.`}
                      </Typography>
                    </>
                  )}
                {brokerProperties &&
                  brokerProperties.result.data.length > 0 && (
                    <Grid container rowGap={2}>
                      {brokerProperties.result.data.map((item: any) => (
                        <BrokerCard
                          key={item.id}
                          id={item.id}
                          data={item.attributes}
                          listings={listings}
                        />
                      ))}
                    </Grid>
                  )}
              </>
            )}
            {searchParams["tab"] === "new-property" && (
              <PropertyForm
                session={session}
                property={null}
                listings={listings}
              />
            )}
            {searchParams["tab"] === "edit-property" && (
              <PropertyForm
                session={session}
                property={singleProperty?.result.data}
                listings={listings}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyAccount;
