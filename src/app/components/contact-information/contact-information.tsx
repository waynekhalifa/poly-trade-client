import { Grid, IconButton, Stack, Typography } from "@mui/material";
import ContactItem from "./contact-item";
import { Email, Map, PhoneIphone } from "@mui/icons-material";

interface Props {
  data: any;
}

const ContactInformation: React.FC<Props> = ({ data }) => {
  const { links } = data;

  return (
    <Stack minHeight={1} justifyContent={"space-between"} rowGap={1.5}>
      {links.map((item: any) => (
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
                {item.type === "contact" && <PhoneIphone fontSize="large" />}
                {item.type === "email" && <Email fontSize="large" />}
                {item.type === "address" && <Map fontSize="large" />}
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography color={"primary.main"}>{item.text}</Typography>
            </Grid>
          </Grid>
        </ContactItem>
      ))}
    </Stack>
  );
};

export default ContactInformation;
