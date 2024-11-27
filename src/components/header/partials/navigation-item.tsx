import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Box, Grid, List, Typography } from "@mui/material";
import LinkWrap from "../../link-wrap";
import { Locale } from "@/types/locale";
import { Routes } from "@/enums/routes";

interface Props {
  item: any;
  locale: Locale;
  subItems: any[];
  activePage: string;
}

const NavigationItem: React.FC<Props> = ({
  item,
  locale,
  subItems,
  activePage,
}) => {
  const [display, setDisplay] = useState<"none" | "block">("none");

  const handleMouseEnter = () => setDisplay("block");
  const handleMouseLeave = () => setDisplay("none");

  const isActive = () => {
    if (item.url === Routes.ROOT && activePage === "home") return true;

    return item.url === Routes.ROOT + activePage;
  };

  return (
    <Box
      component={"li"}
      id={`menu-item-${item.id}`}
      position={"relative"}
      ml={4}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LinkWrap href={Routes.ROOT + locale + item.url}>
        <Grid
          height={80}
          container
          alignItems={"center"}
          sx={{
            cursor: "pointer",
            borderTop: "3px solid",
            borderColor: isActive() ? "primary.main" : "transparent",
          }}
        >
          <Typography
            component={"span"}
            color={isActive() ? "primary.main" : "text.primary"}
            fontWeight={isActive() ? 500 : 300}
            textTransform={"capitalize"}
            sx={{ "&:hover": { color: "primary.main" } }}
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
          sx={{
            display,
            position: "absolute",
            left: 0,
            top: 64,
            bgcolor: "common.white",
            zIndex: 1,
            minWidth: 240,
          }}
        >
          {subItems.map((child: any) => (
            <Box
              key={child.id}
              component={"li"}
              id={`dropdown-item-${child.id}`}
            >
              <Box
                component={"a"}
                href={child.url}
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
                {child.text}
              </Box>
            </Box>
          ))}
        </List>
      )}
    </Box>
  );
};

export default NavigationItem;
