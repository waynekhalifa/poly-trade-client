"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import WidgetTitle from "./partials/widget-title";
import PostItem from "./partials/post-item";
import CopyRight from "./partials/copy-right";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import FormInput from "../FormInput";

// #bd091c pinterest color
// #e3405f instagram color
// #54aced twitter color
// #54aced twitter color
// #3c5998 facebook color

interface Props {
  logoUrl: string | null;
  logoText: string | null;
  aboutMeText: any;
  aboutMeDescription: any;
  servicesText: any;
  servicesList: any;
  latestPostsText: any;
  recent_posts: any;
  subcribeText: any;
  subscribeDescription: any;
  copyright: any;
  socialLinks: any;
}

const Footer: React.FC<Props> = ({
  logoUrl,
  logoText,
  aboutMeText,
  aboutMeDescription,
  servicesText,
  servicesList,
  latestPostsText,
  recent_posts,
  subcribeText,
  subscribeDescription,
  copyright,
  socialLinks,
}) => {
  return (
    <footer>
      <Box bgcolor={"primary.dark"} minHeight={300} py={{ xs: 8, md: 12 }}>
        <Container>
          <Grid container columnSpacing={3}>
            <Grid item xs={12} md={6} lg={3} mb={{ xs: 3, md: 0 }}>
              <WidgetTitle title={aboutMeText} />
              <Typography color={"common.white"} mb={3}>
                {aboutMeDescription}
              </Typography>
              <Grid container columnGap={1}>
                <IconButton
                  aria-label="facebook"
                  sx={{ bgcolor: "#3c5998", borderRadius: "6px" }}
                >
                  <Facebook sx={{ color: "common.white" }} fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="twitter"
                  sx={{ bgcolor: "#54aced", borderRadius: "6px" }}
                >
                  <Twitter sx={{ color: "common.white" }} fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="instagram"
                  sx={{ bgcolor: "#e3405f", borderRadius: "6px" }}
                >
                  <Instagram sx={{ color: "common.white" }} fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="pinterest"
                  sx={{ bgcolor: "#bd091c", borderRadius: "6px" }}
                >
                  <Pinterest sx={{ color: "common.white" }} fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={3} mb={{ xs: 3, md: 0 }}>
              <WidgetTitle title={servicesText} />
              <List disablePadding>
                {servicesList.map((item: any) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemText
                      primary={item.Text}
                      sx={{ color: "common.white" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6} lg={3} mb={{ xs: 3, md: 0 }}>
              <WidgetTitle title={latestPostsText} />
              {recent_posts.data.map((post: any) => (
                <PostItem key={post.id} post={post} />
              ))}
              {/* <PostItem />
              <Divider
                sx={{ my: 2, backgroundColor: "rgba(255,255,255,.3)" }}
              />
              <PostItem /> */}
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <WidgetTitle title={subcribeText} />
              <Typography color={"common.white"}>
                {subscribeDescription}
              </Typography>
              <Box component={"form"} mt={3} position={"relative"}>
                <FormInput fullWidth placeholder="Email Address" size="small" />
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "100%",
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <CopyRight logoUrl={logoUrl} logoText={logoText} copyright={copyright} />
    </footer>
  );
};

export default Footer;
