import Image from "next/image";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import {
  BathroomOutlined,
  BedOutlined,
  CameraAltSharp,
  Circle,
  MapOutlined,
  SquareFoot,
} from "@mui/icons-material";

import { getStrapiURL } from "@/utils/api-helpers";
import LinkWrap from "../link-wrap";
import { IListingItem, Model } from "@/types/api";

interface Props {
  id: number;
  data: any;
  listings: IListingItem[];
}

const BrokerCard: React.FC<Props> = ({ id, data, listings }) => {
  const {
    name,
    address,
    area,
    bed,
    bath,
    type,
    price,
    gallery,
    hasConditions,
  } = data;

  const propertyTypes: IListingItem | undefined = listings.find(
    (item: any) => item.name === "propertyTypes"
  );

  const types: Model[] | undefined =
    propertyTypes &&
    propertyTypes.result &&
    propertyTypes.result.data.filter((item: any) => item.id === parseInt(type));

  return (
    <Box border={"1px solid"} borderColor={"divider"}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <LinkWrap
            href={`/my-account?tab=edit-property&id=${id}`}
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
    </Box>
  );
};

export default BrokerCard;
