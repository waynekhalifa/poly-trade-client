import Image from "next/image";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { getStrapiURL } from "@/utils/api-helpers";
import {
  BathroomOutlined,
  BedOutlined,
  CameraAltSharp,
  MapOutlined,
  SquareFoot,
} from "@mui/icons-material";
import Link from "next/link";

interface Props {
  data: any;
}

const MoreCard: React.FC<Props> = ({ data }) => {
  const {
    name,
    slug,
    address,
    area,
    bed,
    bath,
    type,
    price,
    publishedAt,
    gallery,
  } = data;

  return (
    <Box border={"1px solid"} borderColor={"divider"}>
      <Box position={"relative"} component={Link} href={`/rent/${slug}`}>
        <Image
          src={getStrapiURL(gallery.data[0].attributes.url)}
          alt={
            gallery.data[0].attributes.alternativeText
              ? gallery.data[0].attributes.alternativeText
              : name
          }
          width={gallery.data[0].attributes.width}
          height={gallery.data[0].attributes.height}
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
      </Box>
      <Box
        p={2}
        bgcolor={"common.white"}
        borderTop={"1px solid"}
        borderColor={"divider"}
      >
        <Typography
          textTransform={"uppercase"}
          color="text.secondary"
          variant="body2"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography paragraph fontWeight={700} variant="h6">
          {price}$ per month
        </Typography>
        <Typography minHeight={48} gutterBottom>
          {name}
        </Typography>
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
    </Box>
  );
};

export default MoreCard;
