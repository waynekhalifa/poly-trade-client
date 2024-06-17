import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";

import FormFields from "../FormFields";
import useSnackbarStore from "@/app/store/snackbar";
import { ISessionUser } from "@/app/types/session";
import { IFormField } from "@/app/types/formFields";
import { createSnackbarResponse } from "@/app/utils/snackbar";
import { update } from "@/app/services/users/update";
import { IUserUpdateInput } from "@/app/types/user";
import { setSession } from "@/app/utils/set-session";

interface Props {
  session: ISessionUser | null;
}

const fields: IFormField[] = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  },
  {
    id: 3,
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "",
    disabled: true,
    autoFocus: false,
    multiple: false,
    options: [],
  },
];

const DetailsForm: React.FC<Props> = ({ session }) => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const DEFAULT_VALUES: any = {
    firstName: (session && session.firstName) || "",
    lastName: (session && session.lastName) || "",
    email: (session && session.email) || "",
  };

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(Yup.object()),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<any> = async (formData: IUserUpdateInput) => {
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
      const user = await update(session.token, session.id, formData);

      await setSession({ token: session.token, ...user });

      setSnackbar(
        createSnackbarResponse(
          <>Personal information has been updated successfully!</>,
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
        Update
      </Button>
      {/* <Button color="secondary" size="large" fullWidth>
        Delete my account
      </Button> */}
    </Box>
  );
};

export default DetailsForm;
