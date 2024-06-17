import { Typography } from "@mui/material";

interface Props {
  data: any;
}

const WidgetTitle: React.FC<Props> = ({ data }) => {
  const { text } = data;

  return (
    <Typography
      variant="h5"
      component={"h3"}
      fontWeight={700}
      color={"common.white"}
      position={"relative"}
      mb={2}
      pb={2}
      sx={{
        "&::before": {
          content: '""',
          width: "40px",
          height: "2px",
          left: "inherit",
          bottom: "0",
          position: "absolute",
          zIndex: "1",
          backgroundColor: "secondary.main",
        },
        "&::after": {
          content: '""',
          width: "50%",
          height: "2px",
          position: "absolute",
          left: "0",
          bottom: "0",
          backgroundColor: "rgba(255,255,255,.3)",
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default WidgetTitle;
