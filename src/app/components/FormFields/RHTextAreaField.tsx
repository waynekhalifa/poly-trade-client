import { Control, Controller } from "react-hook-form";
import { FormControl, InputLabel } from "@mui/material";
import FormInput from "../FormInput/FormInput";
import { IFormField } from "@/app/types/formFields";

interface Props extends IFormField {
  errors: any;
  control: Control;
  sx: any;
}

const RHTextAreaField: React.FC<Props> = ({
  label,
  name,
  type,
  placeholder,
  disabled,
  autoFocus,
  control,
  errors,
}) => {
  return (
    <FormControl>
      {label && <InputLabel htmlFor={`${name}`}>{label}</InputLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FormInput
            fullWidth
            size="small"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            type={type}
            disabled={disabled}
            autoFocus={autoFocus}
            placeholder={placeholder}
            error={!!errors[name]}
            helperText={errors[name] && `${errors[name].message}`}
          />
        )}
      />
    </FormControl>
  );
};

export default RHTextAreaField;
