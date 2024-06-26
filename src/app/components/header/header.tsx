"use client";
import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";

import Navigation from "./partials/navigation";
import MenuIcon from "./partials/menu-icon";
import NewLogo from "../new-logo";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
  activePage: string;
}

const Header: React.FC<Props> = ({ data, activePage }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { id, attributes } = data[0];
  const { content } = attributes;

  const logo: any = content.find(
    (item: any) => item.__component === "shared.logo"
  );

  const navbar: any = content.find(
    (item: any) => item.__component === "shared.navbar"
  );
  const email: any = content.find(
    (item: any) => item.__component === "shared.email"
  );
  const contact: any = content.find(
    (item: any) => item.__component === "shared.contact"
  );

  console.log(email, contact);

  const handleDrawerOpen = () => setDrawerOpen(() => true);

  const handleDrawerClose = () => setDrawerOpen(() => false);

  return (
    <>
      <Box
        display={{ xs: "none", md: "block" }}
        bgcolor={"primary.main"}
        py={1}
        color="common.white"
      >
        <Container>
          <Grid container alignItems={"center"} gap={"4px"}>
            <Typography variant="body2">Call Us Today!</Typography>
            <LinkWrap href={contact.url.href}>
              <Typography variant="body2">{contact.contact}</Typography>
            </LinkWrap>
            <Typography variant="body2">|</Typography>
            <LinkWrap href={email.url.href}>
              <Typography variant="body2">{email.email}</Typography>
            </LinkWrap>
          </Grid>
        </Container>
      </Box>
      <AppBar
        id={`header-${id}`}
        elevation={0}
        position="relative"
        color="transparent"
        sx={{ bgcolor: "common.white", py: { xs: 1, md: 0 } }}
      >
        <Container>
          <Grid container alignItems="center">
            {logo && (
              <Grid
                item
                xs={12}
                md={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <NewLogo data={logo} imgHeight={80} />
                <MenuIcon handleDrawerOpen={handleDrawerOpen} />
              </Grid>
            )}
            <Grid
              item
              xs={0}
              md={10}
              display={{ xs: "none", md: "flex" }}
              justifyContent={{ md: "flex-end" }}
            >
              {navbar && (
                <Navigation
                  placement="header"
                  activePage={activePage}
                  links={navbar.links}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <Box width={240}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            height={86}
            borderBottom={"thin solid"}
            borderColor={"divider"}
          >
            <NewLogo data={logo} imgHeight={82} />
          </Grid>
        </Box>
        <Navigation
          placement="drawer"
          activePage={activePage}
          links={navbar.links}
        />
      </Drawer>
    </>
  );
};

export default Header;
