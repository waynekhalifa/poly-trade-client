import Image from "next/image";
import {
  ApartmentOutlined,
  ArrowForwardIos,
  BathroomOutlined,
  BedOutlined,
  Email,
  EmailOutlined,
  Facebook,
  FavoriteBorder,
  Instagram,
  PaymentOutlined,
  PhoneOutlined,
  SquareFoot,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";

import { getStrapiURL } from "@/utils/api-helpers";
import stripInlineStyles from "@/utils/stripInlineStyles";
import MoreCard from "../property-listing/more-card";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
  moreProperties: any;
}

const PropertySections: React.FC<Props> = ({ data, moreProperties }) => {
  const {
    name,
    slug,
    address,
    area,
    bed,
    bath,
    type,
    price,
    description,
    gallery,
  } = data.attributes;

  return (
    <>
      <Box py={2} borderTop={"1px solid"} borderColor={"divider"}>
        <Container>
          <List
            disablePadding
            sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
          >
            <LinkWrap href={"/"}>
              <Typography
                variant="body2"
                textTransform={"capitalize"}
                color={"text.secondary"}
                sx={{
                  transition: "all .s3 ease-in",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Home
              </Typography>
            </LinkWrap>
            <ArrowForwardIos
              fontSize="small"
              sx={{ color: "text.primary", transform: "scale(.5)" }}
            />
            <LinkWrap href={"/rent"}>
              <Typography
                variant="body2"
                textTransform={"capitalize"}
                color={"text.secondary"}
                sx={{
                  transition: "all .s3 ease-in",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Rent
              </Typography>
            </LinkWrap>
            <ArrowForwardIos
              fontSize="small"
              sx={{ color: "text.primary", transform: "scale(.5)" }}
            />
            <Typography variant="body2" color={"text.secondary"}>
              {name}
            </Typography>
          </List>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={0.6} alignItems={"center"}>
          <Grid item xs={12} md={8}>
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
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={0.6}>
              <Grid item xs={12}>
                <Image
                  src={getStrapiURL(gallery.data[1].attributes.url)}
                  alt={
                    gallery.data[1].attributes.alternativeText
                      ? gallery.data[1].attributes.alternativeText
                      : name
                  }
                  width={gallery.data[1].attributes.width}
                  height={gallery.data[1].attributes.height}
                />
              </Grid>
              <Grid item xs={12}>
                <Image
                  src={getStrapiURL(gallery.data[1].attributes.url)}
                  alt={
                    gallery.data[2].attributes.alternativeText
                      ? gallery.data[2].attributes.alternativeText
                      : name
                  }
                  width={gallery.data[2].attributes.width}
                  height={gallery.data[2].attributes.height}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box my={{ xs: 3 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" fontWeight={700} mb={{ xs: 3, md: 4 }}>
                {name}
              </Typography>
              <Grid container alignItems={"center"} spacing={2}>
                <Grid item xs={6} md={3}>
                  <Grid container columnGap={1} alignItems={"center"}>
                    <ApartmentOutlined />
                    <Typography textTransform={"capitalize"}>
                      Property type:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography textTransform={"capitalize"} fontWeight={700}>
                    {type}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Grid container columnGap={1} alignItems={"center"}>
                    <SquareFoot />
                    <Typography textTransform={"capitalize"}>
                      Property size:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography textTransform={"capitalize"} fontWeight={700}>
                    {`${area} sqm`}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Grid container columnGap={1} alignItems={"center"}>
                    <BedOutlined />
                    <Typography textTransform={"capitalize"}>
                      Bedrooms:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography textTransform={"capitalize"} fontWeight={700}>
                    {bed}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Grid container columnGap={1} alignItems={"center"}>
                    <BathroomOutlined />
                    <Typography textTransform={"capitalize"}>
                      Bathrooms:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography textTransform={"capitalize"} fontWeight={700}>
                    {bath}
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: { xs: 4 } }} />
              <Grid container alignItems={"center"} spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight={700} paragraph>
                    Location
                  </Typography>
                  <Grid container gap={3} alignItems={"center"}>
                    <Box
                      width={120}
                      height={120}
                      borderRadius={"50%"}
                      overflow={"hidden"}
                      position={"relative"}
                    >
                      <Image
                        src={"http://localhost:1337/uploads/map_c6ef8de578.svg"}
                        alt="map icon"
                        width={120}
                        height={120}
                      />
                      <Button
                        variant="contained"
                        size="small"
                        color="inherit"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                          border: "1px solid",
                          borderColor: "secondary.main",
                        }}
                      >
                        Map
                      </Button>
                    </Box>
                    <Typography>{address}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" fontWeight={700} paragraph>
                    Agent
                  </Typography>
                  <Grid container gap={3} alignItems={"center"}>
                    <Box
                      width={120}
                      height={120}
                      borderRadius={"50%"}
                      overflow={"hidden"}
                      position={"relative"}
                      bgcolor={"grey.100"}
                    ></Box>
                    <Box>
                      <Typography gutterBottom>
                        Al Andalus Developments
                      </Typography>
                      <Typography>El Andalus</Typography>
                      <LinkWrap href="/agent-listing">
                        <Typography variant="body2">23 properties</Typography>
                      </LinkWrap>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Divider sx={{ my: { xs: 4 } }} />
              <Typography variant="h6" fontWeight={700} paragraph>
                Description
              </Typography>
              {description && (
                <Box
                  dangerouslySetInnerHTML={{
                    __html: stripInlineStyles(description),
                  }}
                />
              )}
              {/* <Typography>
                An opportunity not to be missed! Distinctive apartment with an
                area of ​​158 square meters In Una Compound in the Central
                Plateau, It contains 3 bedrooms, 2 bathrooms, a kitchen and a
                reception area. It is offered semi-finished. Get the chance to
                design the life of your dreams in this luxury apartment.” “Una
                Compound is distinguished by its prime location in the Central
                Plateau and its modern and unique design. It provides an ideal
                environment for a quiet and comfortable life. The compound also
                contains a variety of high-end facilities such as swimming
                pools, health clubs, and lush green spaces. Dont miss the
                opportunity to live in the ideal Central Plateau! Enjoy a
                luxurious and comfortable lifestyle in Una Compound.
              </Typography> */}
              <Divider sx={{ my: { xs: 4 } }} />
              <Typography variant="h6" fontWeight={700} paragraph>
                Like this property? Come back to it later, easily.
              </Typography>
              <Grid container gap={1} alignItems={"center"} mb={{ xs: 4 }}>
                <Button
                  color="inherit"
                  variant="outlined"
                  size="small"
                  startIcon={<FavoriteBorder />}
                >
                  Save to shortlist
                </Button>
                <Typography>or share</Typography>
                <Button
                  color="inherit"
                  variant="outlined"
                  size="small"
                  startIcon={<Facebook />}
                >
                  Facebook
                </Button>
                <Button
                  color="inherit"
                  variant="outlined"
                  size="small"
                  startIcon={<Twitter />}
                >
                  Twitter
                </Button>
                <Button
                  color="inherit"
                  variant="outlined"
                  size="small"
                  startIcon={<Instagram />}
                >
                  Instagram
                </Button>
                <Button
                  color="inherit"
                  variant="outlined"
                  size="small"
                  startIcon={<Email />}
                >
                  Email
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography paragraph variant="h5" fontWeight={500}>
                  {price} $
                </Typography>
                <Box bgcolor={"#F7F6FB"} p={2} mb={{ xs: 2 }}>
                  <Grid container justifyContent="center">
                    <PaymentOutlined />
                  </Grid>
                  <Typography
                    textAlign={"center"}
                    color={"text.secondary"}
                    gutterBottom
                  >
                    Payment method
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    textAlign={"center"}
                  >
                    Cash
                  </Typography>
                </Box>
                <Grid container columnGap={1}>
                  <Button
                    variant="contained"
                    size={"small"}
                    startIcon={<PhoneOutlined />}
                    sx={{ flex: 1 }}
                    component={Link}
                    target="_blank"
                    href="tel:+211926691172"
                  >
                    Call
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<EmailOutlined />}
                    sx={{ flex: 1 }}
                    component={Link}
                    target="_blank"
                    href="mailTo:info@fetishubait.com"
                  >
                    Email
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<WhatsApp />}
                  >
                    WhatsApp
                  </Button>
                </Grid>
                <Divider sx={{ my: { xs: 2 } }} />
                <Grid container justifyContent="center">
                  <Button
                    color="secondary"
                    variant="outlined"
                    size="small"
                    startIcon={<FavoriteBorder />}
                  >
                    Save to shortlist
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        py={{ xs: 4, md: 8 }}
        borderBottom={"1px solid"}
        borderColor={"divider"}
        sx={{ backgroundImage: "linear-gradient(90deg, #fdf5f5, #eff9ff);" }}
      >
        <Container>
          <Typography variant="h6" fontWeight={700} mb={{ xs: 3 }}>
            More available in the same area
          </Typography>
          <Grid container spacing={2}>
            {moreProperties.data.map((item: any) => (
              <Grid key={item.id} item xs={12} md={3}>
                <MoreCard data={item.attributes} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PropertySections;
