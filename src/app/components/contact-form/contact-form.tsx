"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";

import FormFields from "../FormFields";
import useSnackbarStore from "@/app/store/snackbar";
import { IFormField } from "@/app/types/formFields";
import { InputTypes } from "@/app/enums/inputTypes";
import { CONTACT_FORM } from "@/app/validations/auth";

const email: IFormField = {
  id: 1,
  name: "email",
  type: "email",
  placeholder: "Email *",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const name: IFormField = {
  id: 4,
  name: "name",
  type: "text",
  placeholder: "Name *",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const phone: IFormField = {
  id: 5,
  name: "phone",
  type: "text",
  placeholder: "Telephone",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const company: IFormField = {
  id: 6,
  name: "company",
  type: "text",
  placeholder: "Company",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const message: IFormField = {
  id: 7,
  name: "message",
  type: "textarea",
  placeholder: "Message *",
  disabled: false,
  autoFocus: false,
  multiple: true,
  rows: 5,
  options: [],
};

const ContactForm: React.FC = () => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const fields: IFormField[] = [];
  const DEFAULT_VALUES: any = {};

  fields.push(name, phone, email, company, message);

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
    resolver: yupResolver(CONTACT_FORM),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const renderButtonText = (): string => "Send";

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    // const newCompanySubmissionParams: IPostParams = {
    //   path: "/api/company-submissions",
    //   input: { data: formData },
    // };

    // try {
    //   await post(newCompanySubmissionParams);

    //   reset();

    //   setSnackbar(
    //     createSnackbarResponse(
    //       <>Your registration request has been sent successfully!</>,
    //       "success"
    //     )
    //   );
    // } catch (err: Error | any) {
    //   setSnackbar(
    //     createSnackbarResponse(
    //       <>{err.message ? err.message : JSON.stringify(err)}</>,
    //       "error"
    //     )
    //   );
    // }

    console.log(formData);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
          sx={{ textTransform: "capitalize" }}
        >
          {renderButtonText()}
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
