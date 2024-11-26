import { Box, Typography } from "@mui/material";

interface Props {
  value: string;
  label: string;
}

const NumberItem: React.FC<Props> = ({ value, label }) => {
  return (
    <Box>
      <Typography variant="h2" color={"common.white"} fontWeight={700}>
        {value}
      </Typography>
      <Typography color={"grey.100"} variant="h6" fontWeight={300}>
        {label}
      </Typography>
    </Box>
  );
};

export default NumberItem;
