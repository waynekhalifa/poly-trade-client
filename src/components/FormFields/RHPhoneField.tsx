import { IFormField } from "@/types/formFields";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props extends IFormField {
  errors: any;
  control: Control;
  sx: any;
}

const RHPhoneField: React.FC<Props> = ({
  label,
  name,
  placeholder,
  disabled,
  autoFocus,
  control,
  errors,
}) => {
  return (
    <FormControl error={!!errors[name]}>
      {label && <InputLabel htmlFor={`${name}`}>{label}</InputLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <PhoneInput
            name={field.name}
            onBlur={field.onBlur}
            disabled={disabled}
            autoFocus={autoFocus}
            placeholder={placeholder}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <FormHelperText>
        {errors[name] && `${errors[name].message}`}
      </FormHelperText>
    </FormControl>
  );
};

export default RHPhoneField;
