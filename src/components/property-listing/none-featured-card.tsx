import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
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

import LinkWrap from "../link-wrap";
import useSnackbarStore from "@/store/snackbar";
import { formatTimeAgo } from "@/utils/format-time-ago";
import { getStrapiURL } from "@/utils/api-helpers";
import { generateWhatsAppShareLink } from "@/utils/generateWhatsAppShareLink";
import { ISessionUser } from "@/types/session";
import { IListingItem, IPostParams, Model } from "@/types/api";
import { createSnackbarResponse } from "@/utils/snackbar";
import { put } from "@/services/put";

interface Props {
  id: number;
  data: any;
  session: ISessionUser | null;
  activePage: string;
  listings: IListingItem[];
}

const NoneFeaturedCard: React.FC<Props> = ({
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
    publishedAt,
    gallery,
    fav_users,
    hasConditions,
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
    const pageUrl = `${getStrapiURL()}/${activePage}/${slug}`;
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
    <Box
      border={"1px solid"}
      borderColor={"divider"}
      mb={3}
      sx={{ "&:last-of-type": { mb: 0 } }}
    >
      <Grid container>
        <Grid item xs={12} md={5}>
          <LinkWrap
            href={`/${activePage ? activePage : purpose}/${slug}`}
            sx={{
              position: "relative",
              borderRight: "1px solid",
              borderColor: "divider",
            }}
          >
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
            {hasConditions && (
              <Circle
                fontSize="small"
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  color: "red",
                  zIndex: 1,
                  transform: "scale(.8)",
                }}
              />
            )}
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
        </Grid>
        <Grid item xs={12} md={7}>
          <Box p={2}>
            {types && types.length > 0 && (
              <Typography
                textTransform={"capitalize"}
                variant="body2"
                gutterBottom
              >
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
        </Grid>
      </Grid>
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
          <Grid container gap={1}>
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
            {/* <Divider orientation="vertical" sx={{ height: 32 }} /> */}
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={handleFavorite}
              sx={{ minWidth: 24, p: "4px 6px" }}
            >
              {fav_user ? (
                <Favorite sx={{ color: "red" }} />
              ) : (
                <FavoriteBorder />
              )}
            </Button>
            {/* <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<OpenInNew />}
            >
              Share
            </Button> */}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default NoneFeaturedCard;
