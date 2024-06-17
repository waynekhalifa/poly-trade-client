import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";

import FormFields from "../FormFields";
import useSnackbarStore from "@/app/store/snackbar";
import { ISessionUser } from "@/app/types/session";
import { IFormField } from "@/app/types/formFields";
import { createSnackbarResponse } from "@/app/utils/snackbar";
import { IChangePasswordInput, ILoginResult } from "@/app/types/auth";
import { changePassword } from "@/app/services/auth/change-password";
import { setSession } from "@/app/utils/set-session";
import { PASSWORD_UPDATE } from "@/app/validations/auth";

interface Props {
  session: ISessionUser | null;
}

const fields: IFormField[] = [
  {
    id: 1,
    name: "currentPassword",
    type: "password",
    label: "Current Password",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  },
  {
    id: 2,
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  },
  {
    id: 3,
    name: "passwordConfirmation",
    type: "password",
    label: "Confirm Password",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  },
];

const PasswordForm: React.FC<Props> = ({ session }) => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const DEFAULT_VALUES: any = {
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
  };

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(PASSWORD_UPDATE),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<any> = async (
    formData: IChangePasswordInput
  ) => {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>Make sure you have a valid session!</>,
          "error"
        )
      );

      return;
    }

    try {
      const data: ILoginResult = await changePassword(session.token, formData);

      await setSession({ ...session, token: data.jwt });

      setSnackbar(
        createSnackbarResponse(
          <>Password has been changed successfully!</>,
          "success"
        )
      );
    } catch (err: Error | any) {
      setSnackbar(
        createSnackbarResponse(<>{err.message ? err.message : err}</>, "error")
      );
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item: any) => (
        <FormFields
          {...item}
          key={item.id}
          control={control}
          errors={errors}
          watch={watch}
          setValue={setValue}
          register={register}
          sx={{ mb: 2 }}
        />
      ))}
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ mb: 2 }}
      >
        Change Password
      </Button>
    </Box>
  );
};

export default PasswordForm;
