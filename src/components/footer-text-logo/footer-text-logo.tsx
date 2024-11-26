import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const FooterTextLogo: React.FC<Props> = ({ children }) => {
  return (
    <Box
      height={"100%"}
      py={2}
      px={3}
      position={"relative"}
      bgcolor={"secondary.main"}
      display={{ xs: "none", md: "block" }}
    >
      {children}
      <Box
        position={"absolute"}
        left={0}
        top={-31}
        width={1}
        height={32}
        bgcolor={"secondary.main"}
        sx={{ clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)" }}
      />
      <Box
        position={"absolute"}
        right={-24}
        top={-32}
        width={24}
        height={32}
        bgcolor={"secondary.dark"}
        sx={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }}
      />
    </Box>
  );
};

export default FooterTextLogo;
