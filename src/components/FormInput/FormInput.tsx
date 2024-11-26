import { StandardTextFieldProps, TextField } from "@mui/material";

interface Props extends StandardTextFieldProps {}

const FormInput: React.FC<Props> = (props) => {
  const sx: typeof props.sx = {
    borderRadius: "0px",
    backgroundColor: "common.white",
    overflow: "hidden ",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor:
        props.color === "primary"
          ? "primary.main"
          : props.color === "secondary"
          ? "secondary.main"
          : "grey.300",
      borderWidth:
        props.color === "primary" || props.color === "secondary"
          ? "2px"
          : "1px",
    },
    "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor:
        props.color === "primary"
          ? "primary.main"
          : props.color === "secondary"
          ? "secondary.main"
          : "grey.300",
    },
    ...props.sx,
  };

  return <TextField color="secondary" {...props} sx={sx} />;
};

export default FormInput;
