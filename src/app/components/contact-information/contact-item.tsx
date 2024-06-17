import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const ContactItem: React.FC<Props> = ({ children }) => {
  return (
    <Box boxShadow={8} p={3} height={1}>
      {children}
    </Box>
  );
};

export default ContactItem;
