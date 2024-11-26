import { Grid, Typography } from "@mui/material";
import LinkWrap from "../link-wrap";

interface Props {
  activePage: string;
  data: any;
  searchParams: any;
}

const LocationItem: React.FC<Props> = ({ activePage, data, searchParams }) => {
  const { name, slug, propertiesNum } = data;

  const type: string = searchParams["property-type"] || "-1";
  const bedrooms: string = searchParams["bedrooms"] || "-1";
  const bathrooms: string = searchParams["bathrooms"] || "-1";

  let url =
    `/${activePage}/?search=${slug}&property-type=${type}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`.replaceAll(
      " ",
      "+"
    );

  return (
    <Grid container alignItems={"center"} columnGap={"4px"}>
      <LinkWrap href={url} sx={{ "&:hover": { textDecoration: "underline" } }}>
        <Typography>{`${name}`}</Typography>
      </LinkWrap>
      <Typography>{`(${propertiesNum})`}</Typography>
    </Grid>
  );
};

export default LocationItem;
