import { MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface Props {
  handleDrawerOpen: (value: string) => void;
}

const MenuIcon: React.FC<Props> = ({ handleDrawerOpen }) => {
  return (
    <IconButton
      size="small"
      onClick={() => handleDrawerOpen("categories")}
      aria-label={"menu"}
      sx={{ display: { md: "none" } }}
    >
      <MenuOutlined sx={{ color: "primary.main" }} />
    </IconButton>
  );
};

export default MenuIcon;
