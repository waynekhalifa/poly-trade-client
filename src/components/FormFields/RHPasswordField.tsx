import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import { IFormField } from "@/types/formFields";

interface Props extends IFormField {
  errors: any;
  control: Control;
  sx: any;
}

interface IState {
  showPassword: boolean;
}

const INITIAL_STATE: IState = { showPassword: false };

const RHTextField: React.FC<Props> = ({
  label,
  name,
  placeholder,
  disabled,
  autoFocus,
  control,
  errors,
  sx,
}) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { showPassword } = state;

  const handleClickShowPassword = () => {
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
          <FormInput
            fullWidth
            size="small"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            disabled={disabled}
            autoFocus={autoFocus}
            placeholder={placeholder}
            error={!!errors[name]}
            helperText={errors[name] && `${errors[name].message}`}
            type={showPassword ? "text" : "password"}
            sx={sx}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
};

export default RHTextField;
