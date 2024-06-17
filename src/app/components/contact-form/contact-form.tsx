import { Box, Button, Grid, Typography } from "@mui/material";

import FormInput from "../FormInput";

interface Props {
  data: any;
}

const ContactForm: React.FC<Props> = ({ data }) => {
  const { address, contact } = data;

  return (
    <Grid container component={"form"} columnSpacing={3}>
      <Grid item xs={12} md={6}>
        <Box mb={2}>
          <Typography gutterBottom>Name</Typography>
          <FormInput fullWidth size="small" placeholder="Name" />
        </Box>
        <Box mb={2}>
          <Typography gutterBottom>Email</Typography>
          <FormInput fullWidth size="small" placeholder="Email" />
        </Box>
        <Box mb={2}>
          <Typography gutterBottom>Phone Number</Typography>
          <FormInput fullWidth size="small" placeholder="Phone Number" />
        </Box>
        <Box display={{ xs: "none", md: "block" }}>
          <Typography gutterBottom>{address}</Typography>
          <Typography>{contact}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box mb={2}>
          <Typography gutterBottom>Your Website</Typography>
          <FormInput fullWidth size="small" placeholder="Your Website" />
        </Box>
        <Box mb={2}>
          <Typography gutterBottom>Your Message</Typography>
          <FormInput
            fullWidth
            size="small"
            placeholder="Your Message"
            multiline
            rows={5}
          />
        </Box>
        <Box display={{ xs: "block", md: "none" }} mb={2}>
          <Typography gutterBottom>{address}</Typography>
          <Typography>{contact}</Typography>
        </Box>
        <Button variant="contained" type="submit" size="large">
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
