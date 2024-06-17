import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
  sx?: any;
}

const ListItem: React.FC<Props> = ({ children, sx }) => {
  return (
    <Typography
      component="li"
      variant="body2"
      mb={1}
      sx={{ listStyle: "none", ...sx }}
    >
      {children}
    </Typography>
  );
};

export default ListItem;
