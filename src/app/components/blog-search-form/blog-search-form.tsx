import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { IFormField } from "@/app/types/formFields";
import { InputTypes } from "@/app/enums/inputTypes";
import FormFields from "../FormFields";

const fields: IFormField[] = [
  {
    id: 1,
    name: "search",
    type: "text",
    label: undefined,
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  },
];

const BlogSearchForm: React.FC = () => {
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
    console.log(formData);
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)} display={"flex"}>
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
      <Button variant="contained" type="submit">
        Search
      </Button>
    </Box>
  );
};

export default BlogSearchForm;
