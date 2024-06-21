import { Box, Grid, Typography } from "@mui/material";
import Media from "../media";

interface Props {
  text: any;
  image: any;
  name?: string;
  title?: string;
}

const TestimonialItem: React.FC<Props> = ({ text, image, name, title }) => {
  return (
    <Box
      bgcolor={"common.white"}
      p={3}
      pt={5}
      sx={{
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: "1px 1px 5px 1px",
        borderColor: "divider",
      }}
    >
      {/* <Grid
        container
        justifyContent={"center"}
        mb={2}
        sx={{
          "& .MuiRating-root": { color: "primary.main" },
          "& > legend": { mt: 2 },
        }}
      >
        <Rating name="simple-controlled" value={5} size={"small"} readOnly />
      </Grid> */}
      {/* <RichText data={text} /> */}
      <Grid container justifyContent={"center"} mb={{ xs: 2, md: 3 }}>
        <Box width={160} height={160} borderRadius={"50%"} overflow={"hidden"}>
          <Media data={image} />
        </Box>
      </Grid>
      <Typography variant="body2" textAlign={"center"} lineHeight={1.8}>
        {text.content[0].children[0].text}
      </Typography>
      {name && title && (
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={1}
          mt={2}
          mx={"auto"}
          width={"fit-content"}
        >
          <Typography fontWeight={700} textAlign={"center"}>
            {`${name},`}
          </Typography>
          <Typography
            variant="body2"
            color={"text.secondary"}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </Grid>
      )}
    </Box>
  );
};

export default TestimonialItem;
