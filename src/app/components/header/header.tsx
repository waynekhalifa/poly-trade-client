"use client";
import { useState } from "react";
import {
  FavoriteBorder,
  HomeOutlined,
  InfoOutlined,
  PhoneForwardedOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import Navigation from "./partials/navigation";
import MenuIcon from "./partials/menu-icon";
import Button from "../button";
import NewLogo from "../new-logo";
import { getInitials } from "@/app/utils/getInitials";
import { ISessionUser } from "@/app/types/session";
import { logout } from "@/app/services/auth/logout";

const profile: any[] = [
  {
    icon: <InfoOutlined />,
    name: "Personal information",
    href: "/my-account/?tab=personal-information&info=details",
  },
  {
    icon: <FavoriteBorder />,
    name: "Favorite properties",
    href: "/my-account/?tab=favorite-properties",
  },
  {
    icon: <PhoneForwardedOutlined />,
    name: "Contacted properties",
    href: "/my-account/?tab=contacted-properties",
  },
  {
    icon: <StarBorderOutlined />,
    name: "Saved searches",
    href: "/my-account/?tab=saved-searches",
  },
];
const brokerProfile: any[] = [
  ...profile,
  {
    icon: <HomeOutlined />,
    name: "My Listings",
    href: "/my-account/?tab=my-listings",
  },
];

interface Props {
  data: any;
  session: ISessionUser | null;
  activePage: string;
}

const Header: React.FC<Props> = ({ data, session, activePage }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { id, attributes } = data[0];
  const { content } = attributes;

  const logo: any = content.find(
    (item: any) => item.__component === "shared.logo"
  );

  const navbar: any = content.find(
    (item: any) => item.__component === "shared.navbar"
  );

  const buttons: any = content.find(
    (item: any) => item.__component === "shared.button-list"
  );

  const isBroker: boolean | null =
    session && session.role && session.role.name === "Broker";
  const isAuthenticated: boolean | null =
    session && session.role && session.role.name === "Authenticated";

  const handleDrawerOpen = () => setDrawerOpen(() => true);

  const handleDrawerClose = () => setDrawerOpen(() => false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = (item: any) => {
    if (typeof window !== "undefined") {
      if (item) window.open(item.href, "_self");
    }

    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logout();

    setAnchorElUser(null);

    if (typeof window !== "undefined") {
      window.open("/", "_self");
    }
  };

  return (
    <>
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
              >
                <NewLogo data={logo} imgHeight={120} />
                <MenuIcon handleDrawerOpen={handleDrawerOpen} />
              </Grid>
            )}
            <Grid
              item
              xs={0}
              md={6}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {navbar && (
                <Navigation
                  placement="header"
                  activePage={activePage}
                  links={navbar.links}
                />
              )}
            </Grid>
            <Grid
              item
              xs={0}
              md={4}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {buttons && (
                <Grid
                  container
                  alignItems={"center"}
                  columnGap={2}
                  justifyContent="flex-end"
                >
                  {!session &&
                    buttons.list.map((item: any) => (
                      <Button key={item.id} data={item} />
                    ))}
                  {session && (
                    <>
                      <Avatar
                        onClick={handleOpenUserMenu}
                        sx={{ bgcolor: "primary.main", cursor: "pointer" }}
                      >
                        <Typography variant="body2" mt={"4px"}>
                          {session ? getInitials(session.username) : ""}
                        </Typography>
                      </Avatar>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={() => handleCloseUserMenu(null)}
                      >
                        <MenuItem onClick={handleLogout}>
                          <Avatar
                            sx={{
                              bgcolor: "primary.main",
                              cursor: "pointer",
                              width: 48,
                              height: 48,
                            }}
                          >
                            <Typography variant="body2" mt={"4px"}>
                              {session ? getInitials(session.username) : ""}
                            </Typography>
                          </Avatar>
                          <Box ml={2}>
                            <Typography
                              variant="body2"
                              fontWeight={700}
                              gutterBottom
                            >
                              Wani Joseph
                            </Typography>
                            <Typography variant="body2" color="primary.main">
                              Logout
                            </Typography>
                          </Box>
                        </MenuItem>
                        {isAuthenticated &&
                          profile.map((item: any, index: number) => (
                            <MenuItem
                              key={index}
                              onClick={() => handleCloseUserMenu(item)}
                            >
                              <IconButton sx={{ width: 32, height: 32 }}>
                                {item.icon}
                              </IconButton>
                              <Box ml={2}>
                                <Typography variant="body2">
                                  {item.name}
                                </Typography>
                              </Box>
                            </MenuItem>
                          ))}
                        {isBroker &&
                          brokerProfile.map((item: any, index: number) => (
                            <MenuItem
                              key={index}
                              onClick={() => handleCloseUserMenu(item)}
                            >
                              <IconButton sx={{ width: 32, height: 32 }}>
                                {item.icon}
                              </IconButton>
                              <Box ml={2}>
                                <Typography variant="body2">
                                  {item.name}
                                </Typography>
                              </Box>
                            </MenuItem>
                          ))}
                      </Menu>
                    </>
                  )}
                </Grid>
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
