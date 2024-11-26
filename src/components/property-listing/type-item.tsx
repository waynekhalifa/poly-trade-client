import { Grid, Typography } from "@mui/material";
import LinkWrap from "../link-wrap";

interface Props {
  activePage: string;
  data: any;
  searchParams: any;
}

const TypeItem: React.FC<Props> = ({ activePage, data, searchParams }) => {
  const { name, propertiesNum } = data.attributes;

  const search: string = searchParams["search"] || "";
  const bedrooms: string = searchParams["bedrooms"] || "-1";
  const bathrooms: string = searchParams["bathrooms"] || "-1";

  let url =
    `/${activePage}/?search=${search}&property-type=${data.id}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`.replaceAll(
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

export default TypeItem;
