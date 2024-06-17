import { Autocomplete, FormControl, InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";

import FormInput from "../FormInput";
import { IFormField } from "@/app/types/formFields";
import { IOption } from "@/app/types/option";

interface Props extends IFormField {
  errors: any;
  control: any;
  watch: any;
  sx: any;
}

const RHAutoComplete: React.FC<Props> = ({
  label,
  name,
  control,
  watch,
  options,
  multiple,
  errors,
  sx,
}) => {
  const value = watch(name);

  return (
    <FormControl sx={{ display: "block" }}>
      {label && <InputLabel htmlFor={`${name}`}>{label}</InputLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, onChange, ...field } }) => (
          <Autocomplete
            multiple={multiple ? true : false}
            limitTags={3}
            options={options!}
            value={value}
            isOptionEqualToValue={(option: IOption, value: IOption) =>
              option.value === value.value
            }
            filterOptions={(options, state) => {
              if (state.inputValue.length === 0) return options;
              return options.filter((option: IOption) =>
                option
                  .value!.toLowerCase()
                  .includes(state.inputValue.toLowerCase())
              );
            }}
            onChange={(_, data) => onChange(data)}
            getOptionLabel={(option: IOption) => option.label || ""}
            renderInput={(params) => (
              <FormInput
                {...params}
                {...field}
                error={!!errors[name]}
                helperText={errors[name] && `${errors[name].message}`}
                inputRef={ref}
                fullWidth
                size="small"
                sx={{ minWidth: 160, ...sx }}
              />
            )}
          />
        )}
      />
    </FormControl>
  );
};

export default RHAutoComplete;
