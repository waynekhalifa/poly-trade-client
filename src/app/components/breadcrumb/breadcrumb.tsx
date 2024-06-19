"use client";

import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, List, Typography } from "@mui/material";

import LinkWrap from "../link-wrap";

interface Props {
  page: any;
}

const Breadcrumb: React.FC<Props> = ({ page }) => {
  const { name } = page;

  return (
    <>
      <Box py={2} borderTop={"1px solid"} borderColor={"divider"}>
        <Container>
          <List
            disablePadding
            sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
          >
            <LinkWrap href={"/"}>
              <Typography
                variant="body2"
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
              sx={{ color: "text.primary", transform: "scale(.5)" }}
            />
            <Typography variant="body2" color={"text.secondary"}>
              {name}
            </Typography>
          </List>
        </Container>
      </Box>
      <Container>
        <Typography variant="h4" component="h1" fontWeight={700} my={{ xs: 2 }}>
          {name}
        </Typography>
      </Container>
    </>
  );
};

export default Breadcrumb;
