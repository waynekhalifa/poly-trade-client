"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";

import FormFields from "../FormFields";
import { IFormField } from "@/types/formFields";
import useSnackbarStore from "@/store/snackbar";
import { InputTypes } from "@/enums/inputTypes";
import { CONTACT_FORM } from "@/validations/auth";
import { Locale } from "@/types/locale";
import { translateStaticString } from "@/utils/translateStatic";

interface Props {
  locale: Locale;
}

const ContactForm: React.FC<Props> = ({ locale }) => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const fields: IFormField[] = [];
  const DEFAULT_VALUES: any = {};
  const email: IFormField = {
    id: 1,
    name: "email",
    type: "email",
    placeholder: `${translateStaticString("email", locale)} *`,
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  };
  const name: IFormField = {
    id: 4,
    name: "name",
    type: "text",
    placeholder: `${translateStaticString("name", locale)} *`,
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  };
  const phone: IFormField = {
    id: 5,
    name: "phone",
    type: "text",
    placeholder: `${translateStaticString("telephone", locale)}`,
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  };
  const company: IFormField = {
    id: 6,
    name: "company",
    type: "text",
    placeholder: `${translateStaticString("company", locale)}`,
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  };
  const message: IFormField = {
    id: 7,
    name: "message",
    type: "textarea",
    placeholder: `${translateStaticString("message", locale)} *`,
    disabled: false,
    autoFocus: false,
    multiple: true,
    rows: 5,
    options: [],
  };

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

  const renderButtonText = (): string => translateStaticString("send", locale);

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
