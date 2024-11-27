"use client";

import Image from "next/image";
import { Box, Button, Container, List, Stack, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { getStrapiURL } from "@/utils/api-helpers";
import LinkWrap from "../link-wrap";

interface Props {
  course: any;
}

const CourseSections: React.FC<Props> = ({ course }) => {
  const { name, slug } = course.attributes;

  return (
    <Box height={200} position={"relative"}>
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
        bgcolor={"rgba(255, 237, 74, .6)"}
        sx={{ inset: 0 }}
      >
        <Container>
          <Stack justifyContent={"center"} minHeight={200}>
            <Typography
              variant="h3"
              component={"h1"}
              textTransform={"capitalize"}
            >
              {name}
            </Typography>
            <List
              disablePadding
              sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
            >
              <LinkWrap href={"/"}>
                <Button
                  color="inherit"
                  sx={{
                    p: 0,
                    fontSize: "24px",
                    textTransform: "capitalize",
                    "&:hover": { bgcolor: "transparent" },
                  }}
                >
                  Home
                </Button>
              </LinkWrap>
              <ArrowForwardIos
                fontSize="small"
                sx={{ color: "primary.main", transform: "scale(.8)" }}
              />
              <LinkWrap href={"/coaching"}>
                <Button
                  color="inherit"
                  sx={{
                    p: 0,
                    fontSize: "24px",
                    textTransform: "capitalize",
                    minWidth: 40,
                    "&:hover": { bgcolor: "transparent" },
                  }}
                >
                  Coaching
                </Button>
              </LinkWrap>
              <ArrowForwardIos
                fontSize="small"
                sx={{ color: "primary.main", transform: "scale(.8)" }}
              />
              <Button
                color="inherit"
                sx={{
                  p: 0,
                  fontSize: "24px",
                  textTransform: "capitalize",
                  cursor: "text",
                  "&:hover": { bgcolor: "transparent" },
                }}
              >
                {name}
              </Button>
            </List>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default CourseSections;
