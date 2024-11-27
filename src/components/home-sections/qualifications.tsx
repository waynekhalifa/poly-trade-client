"use client";

import useResponsive from "@/hooks/useResponsive";
import { Box, Container, Grid, Typography } from "@mui/material";
import QualificationItem from "./qualification-item";
import { MD_UP_PARAMS } from "@/constants/media-queries";

interface Props {
  content: any;
}

const Qualifications: React.FC<Props> = ({ content }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box py={{ xs: 4, md: 6 }} bgcolor={"#f8fafc"}>
      <Container>
        <Typography
          variant={mdUp ? "h5" : "h6"}
          fontWeight={700}
          mb={4}
          component={"h2"}
        >
          {content.qualificationsHeading}
        </Typography>
        <Grid container columnSpacing={3}>
          {content.qualificationsItems.map((item: any) => (
            <Grid key={item.id} item xs={12} md={3}>
              <QualificationItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Qualifications;
