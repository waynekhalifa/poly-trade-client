import { IFormField } from "@/app/types/formFields";
import { IOption } from "@/app/types/option";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface Props extends IFormField {
  errors: any;
  control: Control;
  sx: any;
}

const RHSelect: React.FC<Props> = ({ label, name, control, options, sx }) => {
  return (
    <>
      {label && (
        <InputLabel sx={{ mb: 1 }} htmlFor={`${name}`}>
          {label}
        </InputLabel>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            {options && (
              <Select
                size="small"
                {...field}
                type="select"
                sx={{
                  borderRadius: "0px",
                  backgroundColor: "common.white",
                  overflow: "hidden ",
                  minWidth: { xs: "100%", md: 152 },
                  ...sx,
                }}
              >
                {options.map((option: IOption) => (
                  <MenuItem key={option.value} value={option.value!}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          </>
        )}
      />
    </>
  );
};

export default RHSelect;
