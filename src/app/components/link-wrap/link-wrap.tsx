import { Box } from "@mui/material";

interface Props {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
  ariaLabel?: string;
  sx?: any;
}

const LinkWrap: React.FC<Props> = (props: Props) => {
  return (
    <Box
      component="a"
      href={props.href}
      target={props.blank ? "_blank" : undefined}
      rel={props.blank ? "noopener noreferrer" : undefined}
      sx={{
        display: "flex",
        textDecoration: "none",
        color: "inherit",
        ...props.sx,
      }}
      aria-label={props.ariaLabel || "link"}
    >
      {props.children}
    </Box>
  );
};

export default LinkWrap;
