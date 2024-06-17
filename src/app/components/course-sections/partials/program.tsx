import { Box, Container, Typography } from "@mui/material";

import { MD_UP_PARAMS } from "@/app/constants/media-queries";
import useResponsive from "@/app/hooks/useResponsive";
import ProgramItem from "./program-item";

interface Props {
  data: any;
}

const Program: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box pt={{ xs: 4, md: 6 }}>
      <Container>
        <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
          {data.heading}
        </Typography>
        {data.modules.map((item: any) => (
          <ProgramItem key={item.id} data={item} />
        ))}
      </Container>
    </Box>
  );
};

export default Program;
