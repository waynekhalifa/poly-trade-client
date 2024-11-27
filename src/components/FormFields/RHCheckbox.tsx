import { Control, Controller } from "react-hook-form";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { IFormField } from "@/types/formFields";

interface Props extends IFormField {
  errors: any;
  control: Control;
  sx: any;
}

const RHCheckbox: React.FC<Props> = ({
  label,
  name,
  disabled,
  control,
  errors,
  autoFocus,
}) => {
  return (
    <>
      <FormControlLabel
        control={
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                value={field.value}
                name={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
                disabled={disabled}
                autoFocus={autoFocus}
              />
            )}
          />
        }
        label={label}
      />
      {errors[name] && (
        <FormHelperText error sx={{ mt: "4px", ml: "14px" }}>
          {errors[name].message}
        </FormHelperText>
      )}
    </>
  );
};

export default RHCheckbox;
