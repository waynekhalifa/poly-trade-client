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

import SocialIcons from "../social-icons";
import NewLogo from "../new-logo";
import MenuIcon from "./partials/menu-icon";
import Navigation from "./partials/navigation";
import LinkWrap from "../link-wrap";

interface Props {
  content: any[];
  activePage: string;
}

const NewHeader: React.FC<Props> = ({ content, activePage }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => setDrawerOpen(() => true);

  const handleDrawerClose = () => setDrawerOpen(() => false);

  const email: any = content.find(
    (item: any) => item.__component === "shared.email"
  );

  const contact: any = content.find(
    (item: any) => item.__component === "shared.contact"
  );

  const socialIcons: any = content.find(
    (item: any) => item.__component === "shared.social-icons"
  );

  const logo: any = content.find(
    (item: any) => item.__component === "shared.logo"
  );

  const navbar: any = content.find(
    (item: any) => item.__component === "shared.navbar"
  );

  return (
    <>
      <Box component={"header"} id={"header"} position={"relative"}>
        {contact && email && (
          <Box
            bgcolor={"primary.main"}
            py={1}
            display={{ xs: "none", md: "block" }}
          >
            <Container>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box id="contacts">
                  <Grid container columnGap={1}>
                    <LinkWrap
                      href={contact.url.href}
                      blank={contact.url.newTab}
                      ariaLabel={contact.url.ariaLabel}
                    >
                      <Typography variant="body2" color={"common.white"}>
                        {`Call us today ${contact.contact}!`}
                      </Typography>
                    </LinkWrap>
                    <Typography variant="body2" color={"common.white"}>
                      |
                    </Typography>
                    <LinkWrap
                      href={email.url.href}
                      blank={email.url.newTab}
                      ariaLabel={contact.url.ariaLabel}
                    >
                      <Typography variant="body2" color={"common.white"}>
                        {email.email}
                      </Typography>
                    </LinkWrap>
                  </Grid>
                </Box>
                <SocialIcons data={socialIcons} />
              </Grid>
            </Container>
          </Box>
        )}
        <AppBar
          component={"div"}
          elevation={2}
          color="transparent"
          sx={{ bgcolor: "common.white", py: { xs: 0.5 } }}
        >
          <Container>
            <Grid container alignItems="center">
              <Grid
                item
                xs={12}
                md={4}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <NewLogo data={logo} imgHeight={72} />
                <MenuIcon handleDrawerOpen={handleDrawerOpen} />
              </Grid>
              <Grid
                item
                xs={0}
                md={8}
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                <Navigation
                  placement="header"
                  activePage={activePage}
                  links={navbar.links}
                />
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>
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
            <NewLogo data={logo} imgHeight={64} />
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

export default NewHeader;
