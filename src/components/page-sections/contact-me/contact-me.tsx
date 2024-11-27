"use client";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";
import { IMediaQuery } from "@/types/mediaQuery";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ContactItem from "./contact-item";
import { getStrapiURL } from "@/utils/api-helpers";

const params: IMediaQuery = { query: "up", key: "md" };

interface Props {
  page: any;
}

const ContactMe: React.FC<Props> = ({ page }) => {
  const mdUp = useResponsive(params);
  const { sections } = page.attributes;

  const map: any = sections.find(
    (item: any) => item.__component === "shared.map-embed"
  );

  const contactInfo: any = sections.find(
    (item: any) => item.__component === "sections.contact-info"
  );

  return (
    <>
      <Box py={{ xs: 4, md: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6.5}>
              <Box
                component={"form"}
                bgcolor={"primary.main"}
                p={3}
                borderRadius={"8px"}
              >
                <Typography
                  variant={mdUp ? "h5" : "h6"}
                  fontWeight={700}
                  color={"common.white"}
                  mb={4}
                >
                  Contact Me
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      size="small"
                      placeholder="Name"
                      fullWidth
                      InputProps={{ sx: { bgcolor: "common.white" } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      size="small"
                      placeholder="E-mail"
                      fullWidth
                      InputProps={{ sx: { bgcolor: "common.white" } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      size="small"
                      placeholder="Phone Number"
                      fullWidth
                      InputProps={{ sx: { bgcolor: "common.white" } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      size="small"
                      placeholder="Website (Optional)"
                      fullWidth
                      InputProps={{ sx: { bgcolor: "common.white" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      placeholder="Message"
                      fullWidth
                      multiline
                      rows={4}
                      InputProps={{ sx: { bgcolor: "common.white" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="secondary">
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Stack height={1} justifyContent={"space-between"} rowGap={3}>
                {contactInfo.contactInfo.map((item: any) => (
                  <ContactItem key={item.id}>
                    <Grid container alignItems={"flex-start"}>
                      <Grid item xs={2}>
                        <IconButton
                          size="large"
                          sx={{
                            color: "primary.main",
                            "&:hover": { bgcolor: "transparent" },
                          }}
                        >
                          <Image
                            src={getStrapiURL(item.icon.data.attributes.url)}
                            alt={item.title}
                            width={24}
                            height={24}
                          />
                        </IconButton>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography color={"primary.main"}>
                          {item.value}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ContactItem>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component={"iframe"}
        src={map.url}
        width={"100%"}
        height={450}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        border={0}
        display={"block"}
      />
    </>
  );
};

export default ContactMe;
