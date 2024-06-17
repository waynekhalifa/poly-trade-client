import { Box, Grid, Rating, Typography } from "@mui/material";
import Media from "../media";

interface Props {
  text: any;
  image: any;
}

const TestimonialItem: React.FC<Props> = ({ text, image }) => {
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
      <Grid
        container
        justifyContent={"center"}
        mb={2}
        sx={{
          "& .MuiRating-root": { color: "primary.main" },
          "& > legend": { mt: 2 },
        }}
      >
        <Rating name="simple-controlled" value={5} size={"small"} readOnly />
      </Grid>
      {/* <RichText data={text} /> */}
      <Typography variant="body2" textAlign={"center"} lineHeight={1.8}>
        {text.content[0].children[0].text}
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        columnGap={2}
        mt={2}
        mx={"auto"}
        width={"fit-content"}
      >
        <Box width={58} height={58} borderRadius={"50%"} overflow={"hidden"}>
          <Media data={image} />
        </Box>
        <Box flex={1}>
          <Typography fontWeight={700} textAlign={"center"}>
            Anita D. Costin
          </Typography>
          <Typography
            variant="body2"
            color={"text.secondary"}
            textAlign={"center"}
          >
            Manager
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default TestimonialItem;
