import { Control, Controller } from "react-hook-form";
import { Box, Rating } from "@mui/material";
import { IFormField } from "@/types/formFields";

interface Props extends IFormField {
  errors: any;
  control: Control;
  sx: any;
}

const RHRatingField: React.FC<Props> = ({
  name,
  disabled,
  autoFocus,
  control,
}) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Rating
            size="large"
            name={field.name}
            value={parseInt(field.value)}
            onChange={field.onChange}
            onBlur={field.onBlur}
            disabled={disabled}
            autoFocus={autoFocus}
            // placeholder={placeholder}
          />
        )}
      />
    </Box>
  );
};

export default RHRatingField;
