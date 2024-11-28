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
import useSticky from "@/hooks/useSticky";
import { Locale } from "@/types/locale";

interface Props {
  data: any;
  locale: Locale;
  activePage: string;
}

const Header: React.FC<Props> = ({ data, locale, activePage }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { id, attributes } = data[0];
  const { content } = attributes;
  useSticky(`header-${id}`, 160, true);
  useSticky("scroll-top", 600);

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
  const text: any = content.find(
    (item: any) => item.__component === "shared.text"
  );

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
            <Typography>{text.text}</Typography>
            <LinkWrap href={contact.url.href}>
              <Typography>{contact.contact}</Typography>
            </LinkWrap>
            <Typography>|</Typography>
            <LinkWrap href={email.url.href}>
              <Typography>{email.email}</Typography>
            </LinkWrap>
          </Grid>
        </Container>
      </Box>
      <AppBar
        id={`header-${id}`}
        elevation={0}
        position="relative"
        color="transparent"
        sx={{
          bgcolor: "common.white",
          py: { xs: 1, md: 0 },
          "&.is-sticky": {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            boxShadow: "rgba(0,0,0,.117647) 0 1px 3px",
            bgcolor: "rgba(255,255,255,.9)",
          },
        }}
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
                <NewLogo locale={locale} data={logo} imgHeight={80} />
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
                  locale={locale}
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
            <NewLogo locale={locale} data={logo} imgHeight={82} />
          </Grid>
        </Box>
        <Navigation
          placement="drawer"
          activePage={activePage}
          links={navbar.links}
          locale={locale}
        />
      </Drawer>
    </>
  );
};

export default Header;
