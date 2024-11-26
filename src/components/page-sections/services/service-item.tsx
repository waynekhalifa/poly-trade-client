import { Box, Container, Stack, Typography } from "@mui/material";
import { getStrapiURL } from "@/app/utils/api-helpers";
import LinkWrap from "../../link-wrap";

interface Props {
  item: any;
}

const ServiceItem: React.FC<Props> = ({ item }) => {
  return (
    <Box
      position={"relative"}
      height="100vh"
      sx={{
        backgroundImage: `url('${getStrapiURL(
          item.thumbnail.data.attributes.url
        )}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <LinkWrap href={`/services/${item.slug}`}>
        <Stack
          position={"absolute"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            inset: 0,
            backgroundImage: "linear-gradient(180deg, #0D26D77A, #021520AD)",
          }}
        >
          <Typography
            color={"primary.main"}
            variant="h2"
            fontWeight={700}
            textAlign={"center"}
          >
            {item.name}
          </Typography>

          <Container maxWidth="sm">
            <Typography
              mt={4}
              color="grey.100"
              variant="h6"
              textAlign={"center"}
              fontWeight={300}
              lineHeight={1.4}
              component={"p"}
            >
              {item.description[0].children[0].text}
            </Typography>
          </Container>
        </Stack>
      </LinkWrap>
    </Box>
  );
};

export default ServiceItem;
