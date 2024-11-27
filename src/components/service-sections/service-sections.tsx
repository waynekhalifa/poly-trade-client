import Image from "next/image";
import { Box, Container, List, Stack, Typography } from "@mui/material";
import { getStrapiURL } from "@/utils/api-helpers";
import { ArrowForwardIos } from "@mui/icons-material";
import LinkWrap from "../link-wrap";

interface Props {
  service: any;
}

const ServiceSections: React.FC<Props> = ({ service }) => {
  const { name, slug } = service.attributes;

  return (
    <>
      <Box height={{ xs: 192, md: 264 }} position={"relative"}>
        <Box position={"absolute"} sx={{ inset: 0 }}>
          <Image
            src={getStrapiURL(
              "/uploads/abstract_it_digital_technology_background2_1b6dcb0bb6.jpg"
            )}
            alt={`${slug}-${name}-bg-image`}
            fill
          />
        </Box>
        <Box
          position={"absolute"}
          sx={{
            inset: 0,
            backgroundImage: "linear-gradient(180deg, #0D26D77A, #021520AD)",
          }}
        >
          <Container>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              mt={{ xs: 4, md: 8 }}
              height={{ xs: 160, md: 200 }}
            >
              <Typography
                variant="h3"
                component={"h2"}
                textAlign={"center"}
                color={"common.white"}
                fontWeight={700}
              >
                {name}
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Box bgcolor={"grey.200"} py={1}>
        <Container>
          <List
            disablePadding
            sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
          >
            <LinkWrap href={"/"}>
              <Typography
                textTransform={"capitalize"}
                color={"text.secondary"}
                sx={{
                  transition: "all .s3 ease-in",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Home
              </Typography>
            </LinkWrap>
            <ArrowForwardIos
              fontSize="small"
              sx={{ color: "text.primary", transform: "scale(.6)" }}
            />
            <LinkWrap href={"/services"}>
              <Typography
                textTransform={"capitalize"}
                color={"text.secondary"}
                sx={{
                  transition: "all .s3 ease-in",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Services
              </Typography>
            </LinkWrap>
            <ArrowForwardIos
              fontSize="small"
              sx={{ color: "text.primary", transform: "scale(.6)" }}
            />
            <Typography
              textTransform={"capitalize"}
              color={"text.secondary"}
              noWrap
            >
              {name}
            </Typography>
          </List>
        </Container>
      </Box>
    </>
  );
};

export default ServiceSections;
