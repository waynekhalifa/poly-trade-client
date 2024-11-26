import Image from "next/image";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  BathroomOutlined,
  BedOutlined,
  CameraAltSharp,
  Circle,
  EmailOutlined,
  Favorite,
  FavoriteBorder,
  MapOutlined,
  PhoneOutlined,
  SquareFoot,
  WhatsApp,
} from "@mui/icons-material";
import Link from "next/link";

import LinkWrap from "../link-wrap";
import useSnackbarStore from "@/app/store/snackbar";
import { getStrapiURL } from "@/app/utils/api-helpers";
import { formatTimeAgo } from "@/app/utils/format-time-ago";
import { generateWhatsAppShareLink } from "@/app/utils/generateWhatsAppShareLink";
import { ISessionUser } from "@/app/types/session";
import { createSnackbarResponse } from "@/app/utils/snackbar";
import { IListingItem, IPostParams, Model } from "@/app/types/api";
import { put } from "@/app/services/put";

interface Props {
  id: number;
  data: any;
  session: ISessionUser | null;
  activePage: string;
  listings: IListingItem[];
}

const PropertyCard: React.FC<Props> = ({
  id,
  data,
  session,
  activePage,
  listings,
}) => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const router = useRouter();
  const {
    name,
    slug,
    address,
    area,
    bed,
    bath,
    type,
    price,
    purpose,
    hasConditions,
    publishedAt,
    gallery,
    fav_users,
  } = data;

  const fav_user: any = fav_users.data.find(
    (item: any) => item.attributes.username === session?.username
  );

  const propertyTypes: IListingItem | undefined = listings.find(
    (item: IListingItem) => item.name === "propertyTypesOrBrokerProperties"
  );

  const types: Model[] | undefined =
    propertyTypes &&
    propertyTypes.result &&
    propertyTypes.result.data.filter((item: any) => item.id === parseInt(type));

  const handleFavorite = async () => {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>Make sure you have a valid session!</>,
          "error"
        )
      );

      return;
    }

    try {
      const editPropertyParams: IPostParams = {
        path: "/api/properties/" + id,
        input: {
          data: fav_user
            ? { fav_users: { disconnect: [session.id] } }
            : { fav_users: { connect: [session.id] } },
        },
        token: session.token,
      };

      await put(editPropertyParams);

      router.refresh();
    } catch (err: Error | any) {
      console.log(err);
    }
  };

  const handleCall = async () => {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>Make sure you have a valid session!</>,
          "error"
        )
      );

      return;
    }

    try {
      const editPropertyParams: IPostParams = {
        path: "/api/properties/" + id,
        input: {
          data: { contacted_users: { connect: [session.id] } },
        },
        token: session.token,
      };

      await put(editPropertyParams);

      const newWindow = window.open(
        "tel:+211926691172",
        "_blank",
        "noopener,noreferrer"
      );
      if (newWindow) newWindow.opener = null;
    } catch (err: Error | any) {
      console.log(err);
    }
  };

  const handleWhatsApp = async () => {
    const phoneNumber = "+201124394142";
    const pageUrl = `${getStrapiURL()}/${
      activePage ? activePage : purpose
    }/${slug}`;
    const replyText = "Check out this property";
    const whatsappShareLink = generateWhatsAppShareLink(
      phoneNumber,
      pageUrl,
      replyText
    );

    const newWindow = window.open(
      whatsappShareLink,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box border={"1px solid"} borderColor={"divider"} position={"relative"}>
      {hasConditions && (
        <Circle
          fontSize="small"
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "red",
            zIndex: 1,
          }}
        />
      )}
      <Grid
        container
        justifyContent={"flex-end"}
        position={"absolute"}
        top={16}
        right={16}
        gap={1}
        width={"fit-content"}
        zIndex={1}
      >
        <Button
          variant="contained"
          color="inherit"
          size="small"
          onClick={handleFavorite}
          sx={{
            bgcolor: "common.white",
            minWidth: 24,
            p: "4px 6px",
            "&:hover": { bgcolor: "common.white" },
          }}
        >
          {fav_user ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />}
        </Button>
      </Grid>
      <LinkWrap href={`/${activePage}/${slug}`} sx={{ position: "relative" }}>
        <Image
          src={getStrapiURL(gallery.data[0].attributes.url)}
          alt={
            gallery.data[0].attributes.alternativeText
              ? gallery.data[0].attributes.alternativeText
              : name
          }
          width={900}
          height={600}
        />
        <Button
          size="small"
          startIcon={<CameraAltSharp />}
          color="inherit"
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            bgcolor: "#333333",
            color: "common.white",
            cursor: "text",
            "&:hover": {
              bgcolor: "#333333",
            },
          }}
        >
          {gallery.data.length}
        </Button>
      </LinkWrap>
      <Box p={2} borderTop={"1px solid"} borderColor={"divider"}>
        {types && types.length > 0 && (
          <Typography textTransform={"capitalize"} variant="body2" gutterBottom>
            {types[0].attributes.name}
          </Typography>
        )}
        <Typography paragraph fontWeight={700} variant="h6">
          {price}$ per month
        </Typography>
        <Typography gutterBottom>{name}</Typography>
        <Button
          startIcon={<MapOutlined />}
          component="p"
          color="inherit"
          size="small"
          sx={{
            p: 0,
            textTransform: "none",
            color: "text.secondary",
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          {address}
        </Button>
        <Grid container columnGap={2} mt={1} alignItems={"center"}>
          <Button
            startIcon={<BedOutlined />}
            component="p"
            color="inherit"
            size="small"
            sx={{
              p: 0,
              minWidth: 24,
              textTransform: "none",
              color: "text.secondary",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            {bed}
          </Button>
          <Divider orientation="vertical" sx={{ height: 12 }} />
          <Button
            startIcon={<BathroomOutlined />}
            component="p"
            color="inherit"
            size="small"
            sx={{
              p: 0,
              minWidth: 24,
              textTransform: "none",
              color: "text.secondary",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            {bath}
          </Button>
          <Divider orientation="vertical" sx={{ height: 12 }} />
          <Button
            startIcon={<SquareFoot />}
            component="p"
            color="inherit"
            size="small"
            sx={{
              p: 0,
              minWidth: 24,
              textTransform: "none",
              color: "text.secondary",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            {`${area} sqm`}
          </Button>
        </Grid>
      </Box>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        p={1}
        bgcolor={"#F7F6FB"}
        borderTop={"1px solid"}
        borderColor={"divider"}
      >
        <Typography variant="body2" mb={{ xs: 1, md: 0 }}>
          Listed {formatTimeAgo(new Date(publishedAt))}
        </Typography>
        <Box>
          <Grid container columnGap={1}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<PhoneOutlined />}
              onClick={handleCall}
            >
              Call
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<EmailOutlined />}
              component={Link}
              target="_blank"
              href="mailTo:info@fetishubait.com"
            >
              Email
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<WhatsApp />}
              onClick={handleWhatsApp}
            >
              WhatsApp
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default PropertyCard;
