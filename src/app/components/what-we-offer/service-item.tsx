import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import { getStrapiURL } from "@/app/utils/api-helpers";
import calculateNewHeight from "@/app/utils/calculateNewHeight";
import {
  CloudUpload,
  CodeOff,
  DesignServices,
  Equalizer,
  Layers,
  Security,
} from "@mui/icons-material";

interface Props {
  data: any;
}

// import EqualizerIcon from '@mui/icons-material/Equalizer';

const ServiceItem: React.FC<Props> = ({ data }) => {
  const { name, description, thumbnail } = data.attributes;
  const { url, alternativeText, width, height } = thumbnail.data.attributes;

  return (
    <Box boxShadow={"0px 5px 10px 0px rgba(0, 0, 0, 0.15)"} p={2}>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={2}
      >
        <Typography fontWeight={700} variant="h6">
          {name}
        </Typography>
        {name === "Cyber Security" && (
          <Security fontSize="large" sx={{ color: "primary.main" }} />
        )}
        {name === "Website Development" && (
          <CodeOff fontSize="large" sx={{ color: "primary.main" }} />
        )}
        {name === "Cloud Services" && (
          <CloudUpload fontSize="large" sx={{ color: "primary.main" }} />
        )}
        {name === "Mobile App Development" && (
          <Layers fontSize="large" sx={{ color: "primary.main" }} />
        )}
        {name === "Graphic Design" && (
          <DesignServices fontSize="large" sx={{ color: "primary.main" }} />
        )}
        {name === "Online Marketing" && (
          <Equalizer fontSize="large" sx={{ color: "primary.main" }} />
        )}
      </Grid>
      <Box position={"relative"} overflow={"hidden"} width={1}>
        <Image
          src={getStrapiURL(url)}
          alt={alternativeText}
          width={336}
          height={calculateNewHeight(width, height, 336)}
        />
        <Box
          position={"absolute"}
          sx={{
            inset: 0,
            backgroundImage: "linear-gradient(180deg, #0D26D77A, #021520AD)",
          }}
        >
          <Box position={"absolute"} bottom={0} left={0} width={1} p={3}>
            <Typography mb={3} color="grey.100">
              {description[0].children[0].text}
            </Typography>
            <Button size="small" variant="contained">
              read more
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceItem;
