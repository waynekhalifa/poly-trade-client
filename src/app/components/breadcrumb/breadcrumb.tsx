"use client";

import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, List, Typography } from "@mui/material";

import LinkWrap from "../link-wrap";
import { getStrapiURL } from "@/app/utils/api-helpers";

interface Props {
  page: any;
  archive?: any;
}

const Breadcrumb: React.FC<Props> = ({ page, archive }) => {
  const { name } = page;

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
        "&:after": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
          zIndex: "-1",
        },
      }}
    >
      <Box mb={{ xs: 6 }} borderTop={"1px solid"} borderColor={"divider"}>
        <Container>
          <List
            disablePadding
            sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
          >
            <LinkWrap href={"/"}>
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
                Home
              </Typography>
            </LinkWrap>
            <ArrowForwardIos
              fontSize="small"
              sx={{ color: "primary.main", transform: "scale(.5)" }}
            />
            {archive && (
              <>
                <LinkWrap href={"/" + archive.slug}>
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
                    {archive.name}
                  </Typography>
                </LinkWrap>
                <ArrowForwardIos
                  fontSize="small"
                  sx={{ color: "primary.main", transform: "scale(.5)" }}
                />
              </>
            )}
            <Typography color={"primary.main"}>{name}</Typography>
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
          {name}
        </Typography>
      </Container>
    </Box>
  );
};

export default Breadcrumb;
