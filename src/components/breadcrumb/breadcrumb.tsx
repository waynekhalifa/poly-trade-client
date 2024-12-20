"use client";
import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, List, Typography } from "@mui/material";

import LinkWrap from "../link-wrap";
import { getStrapiURL } from "@/utils/api-helpers";
import { Locale } from "@/types/locale";
import { Languages } from "@/enums/languages";
import { translateStaticString } from "@/utils/translateStatic";
import { Routes } from "@/enums/routes";

interface Props {
  page: any;
  locale: Locale;
  archive?: any;
}

const Breadcrumb: React.FC<Props> = ({ page, archive, locale }) => {
  const { name, arName } = page;

  return (
    <Box
      py={{ xs: 4, md: 8 }}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: `url("${getStrapiURL()}/uploads/bg_ea9751d92e.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-1",
        },
        // "&:after": {
        //   content: '""',
        //   position: "absolute",
        //   top: "0",
        //   left: "0",
        //   width: "100%",
        //   height: "100%",
        //   background:
        //     "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
        //   zIndex: "-1",
        // },
      }}
    >
      <Box mb={{ xs: 6 }}>
        <Container>
          <List
            disablePadding
            sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
          >
            <LinkWrap href={Routes.ROOT + locale}>
              <Typography
                textTransform={"capitalize"}
                color={"common.white"}
                sx={{
                  transition: "all .s3 ease-in",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {translateStaticString("home", locale)}
              </Typography>
            </LinkWrap>
            <ArrowForwardIos
              fontSize="small"
              sx={{
                color: "primary.main",
                transform:
                  locale === Languages.ENGLISH
                    ? "scale(.5)"
                    : "scale(.5) rotate(180deg)",
              }}
            />
            {archive && (
              <>
                <LinkWrap
                  href={Routes.ROOT + locale + Routes.ROOT + archive.slug}
                >
                  <Typography
                    textTransform={"capitalize"}
                    color={"common.white"}
                    sx={{
                      transition: "all .s3 ease-in",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {locale === Languages.ENGLISH
                      ? archive.name
                      : archive.arName}
                  </Typography>
                </LinkWrap>
                <ArrowForwardIos
                  fontSize="small"
                  sx={{
                    color: "primary.main",
                    transform:
                      locale === Languages.ENGLISH
                        ? "scale(.5)"
                        : "scale(.5) rotate(180deg)",
                  }}
                />
              </>
            )}
            <Typography color={"primary.main"}>
              {locale === Languages.ENGLISH ? name : arName}
            </Typography>
          </List>
        </Container>
      </Box>
      <Container>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={700}
          color={"common.white"}
        >
          {locale === Languages.ENGLISH ? name : arName}
        </Typography>
      </Container>
    </Box>
  );
};

export default Breadcrumb;
