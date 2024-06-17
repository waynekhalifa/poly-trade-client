"use client";
import { useState } from "react";
import { AppBar, Box, Container, Drawer, Grid } from "@mui/material";

import Navigation from "./partials/navigation";
import MenuIcon from "./partials/menu-icon";
import NewLogo from "../new-logo";

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

  const handleDrawerOpen = () => setDrawerOpen(() => true);

  const handleDrawerClose = () => setDrawerOpen(() => false);

  return (
    <>
      <AppBar
        id={`header-${id}`}
        elevation={0}
        position="relative"
        color="transparent"
        sx={{ bgcolor: "common.white", py: 1 }}
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
              >
                <NewLogo data={logo} imgHeight={88} />
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
            height={72}
            borderBottom={"thin solid"}
            borderColor={"divider"}
          >
            <NewLogo data={logo} imgHeight={120} />
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
