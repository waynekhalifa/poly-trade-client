import { MD_UP_PARAMS } from "@/app/constants/media-queries";
import useResponsive from "@/app/hooks/useResponsive";
import { Typography } from "@mui/material";

interface Props {
  placement: string;
  logoText: string;
}

const Logo: React.FC<Props> = ({ placement, logoText }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  let variant: any = mdUp ? "h4" : "h5";

  if (placement === "footer") variant = mdUp ? "h5" : "h6";

  return (
    <Typography
      fontWeight={placement === "header" ? 700 : 500}
      variant={variant}
      component={"p"}
      letterSpacing={placement === "header" ? "-3px" : "-2px"}
    >
      {logoText}
    </Typography>
  );
};

export default Logo;
