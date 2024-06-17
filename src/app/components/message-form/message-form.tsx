import { Button, Grid, TextField, Typography } from "@mui/material";

interface Props {
  data: any;
}

const MessageForm: React.FC<Props> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom>Name</Typography>
        <TextField
          size="small"
          placeholder="Name"
          fullWidth
          InputProps={{ sx: { bgcolor: "common.white" } }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom>E-mail</Typography>
        <TextField
          size="small"
          placeholder="E-mail"
          fullWidth
          InputProps={{ sx: { bgcolor: "common.white" } }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom>Phone Number</Typography>
        <TextField
          size="small"
          placeholder="Phone Number"
          fullWidth
          InputProps={{ sx: { bgcolor: "common.white" } }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom>Subject (Optional)</Typography>
        <TextField
          size="small"
          placeholder="Subject (Optional)"
          fullWidth
          InputProps={{ sx: { bgcolor: "common.white" } }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom>Message</Typography>
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
        <Button variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </Grid>
    </Grid>
  );
};

export default MessageForm;
