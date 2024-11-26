import { Box } from "@mui/material";

interface Props {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
  ariaLabel?: string;
  sx?: any;
  className?: string;
}

const LinkWrap: React.FC<Props> = (props: Props) => {
  return (
    <Box
      className={props.className}
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
