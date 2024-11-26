"use client";
import { Box, Grid, Typography } from "@mui/material";
import { Remove } from "@mui/icons-material";

interface Props {
  data: any;
}

const Quote: React.FC<Props> = ({ data }) => {
  return (
    <Box
      component="blockquote"
      m={0}
      my={4}
      sx={{
        pl: 3,
        // borderRight: "unset",
        zIndex: "1",
        position: "relative",
        overflow: "hidden",
        // borderRadius: "10px",
        borderLeft: "4px solid",
        borderColor: "primary.main",
        // background: "transparent",
        // boxShadow: "0 0 24px 0 rgb(43 43 43 / 6%)",
      }}
    >
      <Typography
        variant="h6"
        component="p"
        // paragraph
        fontWeight={500}
        sx={
          {
            // "&::before": {
            //   content: '""',
            //   width: "80px",
            //   height: "80px",
            //   bgcolor: "secondary.main",
            //   position: "absolute",
            //   left: "-14px",
            //   top: "-14px",
            //   borderRadius: "50px",
            //   zIndex: "-1",
            // },
            // "&::after": {
            //   content: '"66"',
            //   width: "40px",
            //   height: "40px",
            //   position: "absolute",
            //   left: "14px",
            //   top: "15px",
            //   color: "common.black",
            //   textAlign: "center",
            // },
          }
        }
      >
        {data.body}
      </Typography>
      {data.author && (
        <Grid container alignItems={"center"}>
          <Remove sx={{ color: "primary.main" }} />
          <Remove sx={{ ml: "-10px", color: "primary.main" }} />
          <Typography
            variant="h6"
            component="p"
            sx={{
              position: "relative",
              fontStyle: "italic",
              pl: 2,
              color: "primary.main",
            }}
          >
            {data.author}
          </Typography>
        </Grid>
      )}
    </Box>
  );
};

export default Quote;
