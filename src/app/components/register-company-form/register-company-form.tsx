"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";

import FormFields from "../FormFields";
import useSnackbarStore from "@/app/store/snackbar";
import { IFormField } from "@/app/types/formFields";
import { InputTypes } from "@/app/enums/inputTypes";
import { createSnackbarResponse } from "@/app/utils/snackbar";
import { IPostParams } from "@/app/types/api";
import { post } from "@/app/services/post";
import LinkWrap from "../link-wrap";
import { COMPANY_REGISTRATION } from "@/app/validations/auth";

const email: IFormField = {
  id: 1,
  name: "email",
  type: "email",
  label: "Email Address",
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const name: IFormField = {
  id: 4,
  name: "name",
  type: "text",
  label: "Full Name",
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const phone: IFormField = {
  id: 5,
  name: "phone",
  type: "text",
  label: "Phone Number",
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const terms: IFormField = {
  id: 6,
  name: "terms",
  type: "checkbox",
  label: (
    <>
      I accept the{" "}
      <LinkWrap
        href={"/terms-and-conditions?tab=for-users"}
        sx={{
          display: "inline",
          textDecoration: "underline",
          color: "#0000EE",
          "&:visited": { color: "#551A8B" },
        }}
      >
        Terms & Conditions
      </LinkWrap>
      {", "}
      <LinkWrap
        href={"/privacy-policy"}
        sx={{
          display: "inline",
          textDecoration: "underline",
          color: "#0000EE",
          "&:visited": { color: "#551A8B" },
        }}
      >
        Privacy Policy
      </LinkWrap>
      {", and "}
      <LinkWrap
        href={"/cookies-policy"}
        sx={{
          display: "inline",
          textDecoration: "underline",
          color: "#0000EE",
          "&:visited": { color: "#551A8B" },
        }}
      >
        Cookies Policy
      </LinkWrap>
      .
    </>
  ),
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};

const RegisterCompanyForm: React.FC = () => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const fields: IFormField[] = [];
  const DEFAULT_VALUES: any = {};

  fields.push(name, email, phone, terms);

  for (const field of fields) {
    if (field.type === InputTypes.CHECKBOX) {
      DEFAULT_VALUES[field.name] = false;
    } else if (field.type === InputTypes.SELECT) {
      DEFAULT_VALUES[field.name] = field.options![0].value;
    } else {
      DEFAULT_VALUES[field.name] = "";
    }
  }

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    register,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(COMPANY_REGISTRATION),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const renderButtonText = (): string => "Submit";

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    const newCompanySubmissionParams: IPostParams = {
      path: "/api/company-submissions",
      input: { data: formData },
    };

    try {
      await post(newCompanySubmissionParams);

      reset();

      setSnackbar(
        createSnackbarResponse(
          <>Your registration request has been sent successfully!</>,
          "success"
        )
      );
    } catch (err: Error | any) {
      setSnackbar(
        createSnackbarResponse(
          <>{err.message ? err.message : JSON.stringify(err)}</>,
          "error"
        )
      );
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        border={"1px solid"}
        borderColor={"divider"}
        p={3}
      >
        {fields.map((item: any) => (
          <FormFields
            key={item.id}
            {...item}
            control={control}
            errors={errors}
            watch={watch}
            setValue={setValue}
            register={register}
            sx={{ minWidth: { xs: "100%" }, mb: { xs: 2 } }}
          />
        ))}
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ textTransform: "capitalize" }}
        >
          {renderButtonText()}
        </Button>
      </Box>
    </>
  );
};

export default RegisterCompanyForm;
