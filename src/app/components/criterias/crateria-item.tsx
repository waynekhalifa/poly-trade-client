import { Box, Grid, IconButton, Typography } from "@mui/material";

import { Lock } from "@mui/icons-material";

interface Props {
  data: any;
}

const CriteriaItem: React.FC<Props> = ({ data }) => {
  const { name, description } = data;

  return (
    <Grid
      container
      columnGap={3}
      component={"li"}
      mb={3}
      sx={{ "&:last-of-type": { mb: { md: 0 } } }}
    >
      <IconButton sx={{ width: 48, height: 48, bgcolor: "primary.main" }}>
        <Lock />
      </IconButton>
      <Box flex={1}>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {name}
        </Typography>
        <Typography color={"text.secondary"}>{description}</Typography>
      </Box>
    </Grid>
  );
};

export default CriteriaItem;
