"use client";
import Image from "next/image";
import { Box, Container } from "@mui/material";

import Grid from "./partials/grid";
import { linearGradient } from "@/app/utils/bg-gradient";
import { getStrapiURL } from "@/app/utils/api-helpers";
import { IListingItem } from "@/app/types/api";
import { ISessionUser } from "@/app/types/session";

interface Props {
  data: any;
  listings: IListingItem[];
  activePage: string;
  searchParams: any;
  session: ISessionUser | null;
}

const Section: React.FC<Props> = ({
  data,
  listings,
  activePage,
  searchParams,
  session,
}) => {
  const { name, slug, container, content } = data;
  const {
    maxWidth,
    minHeight,
    disableGutters,
    component,
    grid,
    background,
    color,
  } = container;

  return (
    <Box
      id={`${slug}-${name}`}
      position={"relative"}
      component={component}
      color={color ? color : "text.primary"}
    >
      {background && background.image && background.image.data && (
        <Box position={"absolute"} sx={{ inset: 0 }}>
          <Image
            src={getStrapiURL(background.image.data.attributes.url)}
            alt={`${slug}-${name}-bg-image`}
            fill
          />
        </Box>
      )}
      {background && background.video && background.video.data && (
        <Box
          position={"absolute"}
          display={{ xs: "none", md: "block" }}
          sx={{
            inset: 0,
            overflow: "hidden",
            video: {
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }}
        >
          <video autoPlay={true} loop muted style={{ width: "100%" }}>
            <source
              src={getStrapiURL(background.video.data.attributes.url)}
              type={background.video.data.attributes.mime}
            />
          </video>
        </Box>
      )}
      <Box
        position="relative"
        zIndex={1}
        bgcolor={
          background && background.color ? background.color : "transparent"
        }
        minHeight={minHeight}
        sx={{
          backgroundImage:
            background && background.gradient
              ? linearGradient(
                  background.gradient.startColor,
                  background.gradient.endColor,
                  background.gradient.degree
                )
              : "none",
        }}
      >
        <Container
          maxWidth={maxWidth}
          disableGutters={disableGutters}
          sx={{ minHeight }}
        >
          <Grid
            content={content}
            grid={grid}
            listings={listings}
            activePage={activePage}
            searchParams={searchParams}
            session={session}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Section;
