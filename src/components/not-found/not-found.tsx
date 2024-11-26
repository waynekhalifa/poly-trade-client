"use client";
import { Box, Button, Container, Grid, List, Typography } from "@mui/material";

import { ArrowForwardIos } from "@mui/icons-material";
import EmptyContent from "../page-sections/empty-content";
import LinkWrap from "../link-wrap";

const NotFound: React.FC = () => {
  return (
    <>
      <Box height={200}>
        <Box
          position={"absolute"}
          bgcolor={"rgba(255, 237, 74, .6)"}
          sx={{ inset: 0 }}
        >
          <Container>
            <Grid
              container
              height={200}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h2" textTransform={"capitalize"}>
                404
              </Typography>
              <List
                disablePadding
                sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
              >
                <LinkWrap href={"/"}>
                  <Button
                    color="inherit"
                    sx={{
                      p: 0,
                      fontSize: "32px",
                      textTransform: "capitalize",
                      "&:hover": { bgcolor: "transparent" },
                    }}
                  >
                    Home
                  </Button>
                </LinkWrap>
                <ArrowForwardIos
                  fontSize="small"
                  sx={{ color: "common.white" }}
                />
                <Button
                  color="inherit"
                  sx={{
                    p: 0,
                    fontSize: "32px",
                    textTransform: "capitalize",
                    "&:hover": { bgcolor: "transparent" },
                  }}
                >
                  404
                </Button>
              </List>
            </Grid>
          </Container>
        </Box>
      </Box>
      <EmptyContent />
    </>
  );
};

export default NotFound;
