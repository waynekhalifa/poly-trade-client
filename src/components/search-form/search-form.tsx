import { Button, Grid } from "@mui/material";
import FormInput from "../FormInput";
import { Search } from "@mui/icons-material";

interface Props {
  data: any;
}

const SearchForm: React.FC<Props> = ({ data }) => {
  const { buttonText, placeholder } = data;

  return (
    <Grid container>
      <FormInput color="primary" placeholder={placeholder} sx={{ flex: 1 }} />
      <Button variant="contained" size="large" endIcon={<Search />}>
        {buttonText}
      </Button>
    </Grid>
  );
};

export default SearchForm;
