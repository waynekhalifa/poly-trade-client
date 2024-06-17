import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import RichTextBlocks from "../rich-text-blocks";
import { IFormField } from "@/app/types/formFields";
import { InputTypes } from "@/app/enums/inputTypes";
import FormFields from "../FormFields";
import { getStrapiURL } from "@/app/utils/api-helpers";

interface Props {
  data: any;
}

const fields: IFormField[] = [
  {
    id: 1,
    name: "email",
    type: "email",
    label: undefined,
    placeholder: "Your E-mail Address",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  },
];

const SubscribeForm: React.FC<Props> = ({ data }) => {
  const { text } = data;
  const DEFAULT_VALUES: any = {};

  for (const field of fields) {
    if (field.type === InputTypes.CHECKBOX) {
      DEFAULT_VALUES[field.name] = false;
    } else if (field.type === InputTypes.SELECT) {
      DEFAULT_VALUES[field.name] = field.options![0];
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
    resolver: yupResolver(Yup.object()),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    const res = await fetch(getStrapiURL() + "/api/lead-form-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN}`,
      },
      body: JSON.stringify({ data: { email: formData.email } }),
    });

    const data = await res.json();

    if (data?.error) {
      throw data?.error;
    } else {
      console.log("should apply success confirmation");
      reset();
    }
  };

  return (
    <Box>
      {text.map((item: any, index: number) => (
        <RichTextBlocks key={index} element={item} />
      ))}
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        mt={{ xs: 1 }}
        display={"flex"}
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
            sx={{ flex: "1" }}
          />
        ))}
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          sx={{ minWidth: 104 }}
        >
          Notify me
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeForm;
