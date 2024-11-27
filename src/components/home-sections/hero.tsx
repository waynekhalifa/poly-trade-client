"use client";
import Image from "next/image";
import { Box, Button, Container, Stack } from "@mui/material";

import HeroTitle from "./hero-title";
import RichTextBlocks from "../rich-text-blocks";
import { getStrapiURL } from "@/utils/api-helpers";
import LinkWrap from "../link-wrap";

interface Props {
  hero: any;
}

const Hero: React.FC<Props> = ({ hero }) => {
  return (
    <Box position={"relative"} height={516}>
      <Box position={"absolute"} sx={{ inset: 0 }}>
        <Image
          src={getStrapiURL(hero.picture.data.attributes.url)}
          alt="hero"
          fill
          priority
          sizes="(max-width: 600px) 50vw, 100vw"
        />
      </Box>
      <Box
        position={"absolute"}
        sx={{
          zIndex: 1,
          inset: 0,
          backgroundImage: "linear-gradient(90deg,#fcfdfe,hsla(0,0%,100%,.2))",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack height={516} justifyContent={"center"}>
          <HeroTitle title={hero.title} />
          <HeroTitle title={hero.subTitle} />
          <Box mb={3}>
            {hero.content.map((item: any, index: number) => (
              <RichTextBlocks key={index} element={item} />
            ))}
          </Box>
          <LinkWrap href={hero.buttons[0].url}>
            <Button variant="contained" size="large">
              {hero.buttons[0].text}
            </Button>
          </LinkWrap>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
