"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import useResponsive from "@/hooks/useResponsive";
import FormInput from "../FormInput";
import { MD_UP_PARAMS } from "@/constants/media-queries";

interface Props {
  content: any;
  bgcolor?: string;
}

const ContactForm: React.FC<Props> = ({ content, bgcolor }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box py={{ xs: 4, md: 6 }} bgcolor={bgcolor ? bgcolor : "#FFFFFF"}>
      <Container>
        <Typography
          variant={mdUp ? "h5" : "h6"}
          fontWeight={700}
          mb={4}
          component={"h2"}
        >
          {content.contactMeHeading}
        </Typography>
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
            {mdUp && (
              <>
                <Typography gutterBottom>{content.contactMeAddress}</Typography>
                <Typography>{content.contactMeNumber}</Typography>
              </>
            )}
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
            {!mdUp && (
              <Box mb={2}>
                <Typography gutterBottom>{content.contactMeAddress}</Typography>
                <Typography>{content.contactMeNumber}</Typography>
              </Box>
            )}
            <Button variant="contained" type="submit" size="large">
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
