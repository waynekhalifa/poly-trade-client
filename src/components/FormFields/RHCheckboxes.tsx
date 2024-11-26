import { IFormField } from "@/app/types/formFields";
import { Checkbox, Grid, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface Props extends IFormField {
  control: Control;
  sx: any;
}

const RHCheckboxes: React.FC<Props> = ({ name, options, control }) => {
  if (options && options.length > 0) {
    return (
      <Grid container spacing={4} sx={{ mt: 4, mb: 16 }}>
        {options.map((option: any) => (
          <Grid key={option.value} item xs={12} md={4}>
            <Grid
              container
              alignItems="center"
              sx={{
                mt: -1,
                mb: 1,
                "&:last-of-type": { mb: 0 },
              }}
            >
              <Controller
                control={control}
                name={`${name}_${option.value}`}
                render={({ field }) => (
                  <Checkbox
                    sx={{ marginLeft: "-11px" }}
                    checked={field.value}
                    value={field.value}
                    name={field.name}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                  />
                )}
              />
              <Typography sx={{ mt: "2px" }}>{option.label}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  }

  return null;
};

export default RHCheckboxes;
