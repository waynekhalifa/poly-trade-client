import { ExpandMore } from "@mui/icons-material";
import { Box, Grid, List, Typography } from "@mui/material";
import { useState } from "react";
import LinkWrap from "../../link-wrap";

interface Props {
  item: any;
  subItems: any[];
  activePage: string;
}

const DrawerItem: React.FC<Props> = ({ item, subItems, activePage }) => {
  const [display, setDisplay] = useState<"none" | "block">("none");

  const toggleDropdown = () =>
    setDisplay((prev) => (prev === "block" ? "none" : "block"));

  const isActive = () => {
    if (item.url === "/" && activePage === "home") return true;

    return item.url === "/" + activePage;
  };

  return (
    <Box
      component={"li"}
      id={`menu-item-${item.id}`}
      position={"relative"}
      sx={{ span: { width: "100%" }, a: { width: "100%" } }}
      onClick={toggleDropdown}
    >
      <LinkWrap href={item.url}>
        <Grid
          height={64}
          container
          alignItems={"center"}
          borderBottom={"thin solid"}
          borderColor={"divider"}
          sx={{ cursor: "pointer" }}
          px={3}
        >
          <Typography
            component={"span"}
            color={isActive() ? "primary.main" : "text.primary"}
            fontWeight={isActive() ? 500 : 400}
            textTransform={"capitalize"}
          >
            {item.text}
          </Typography>
          {item.hasChildren && (
            <ExpandMore fontSize="small" sx={{ ml: "4px" }} />
          )}
        </Grid>
      </LinkWrap>
      {subItems.length > 0 && (
        <List
          disablePadding
          sx={{ display, bgcolor: "common.white", zIndex: 1, minWidth: 240 }}
        >
          {subItems.map((child: any) => (
            <Box
              key={child.id}
              component={"li"}
              id={`dropdown-item-${child.id}`}
              sx={{ height: 56 }}
            >
              <Box
                component={"a"}
                href={child.link}
                sx={{
                  padding: "11px 18px",
                  borderBottomWidth: "1px",
                  borderBottomColor: "rgba(241,241,241,1)",
                  borderBottomStyle: "solid",
                  position: "relative",
                  bgcolor: "transparent",
                  transition: "all ease-in .2s",
                  "&:hover": { bgcolor: "secondary.main" },
                }}
              >
                {child.label}
              </Box>
            </Box>
          ))}
        </List>
      )}
    </Box>
  );
};

export default DrawerItem;
