"use client";

import { Control } from "react-hook-form";

import RHTextField from "./RHTextField";
import RHPasswordField from "./RHPasswordField";
import RHCheckbox from "./RHCheckbox";
import RHAutoComplete from "./RHAutoComplete";
import RHCheckboxes from "./RHCheckboxes";
import RHRatingField from "./RHRatingField";
import RHPhoneField from "./RHPhoneField";
import RHSelect from "./RHSelect";
import { IFormField } from "@/types/formFields";
import { InputTypes } from "@/enums/inputTypes";

interface Props extends IFormField {
  errors: any;
  control: Control;
  watch: any;
  setValue: any;
  register: any;
  sx: any;
}

const FormFields: React.FC<Props> = (props) => {
  const { type } = props;

  const renderField = (): React.ReactNode => {
    if (
      type === InputTypes.TEXT ||
      type === InputTypes.HIDDEN ||
      type === InputTypes.EMAIL ||
      type === InputTypes.TEXTAREA ||
      type === InputTypes.NUMBER
    )
      return <RHTextField {...props} />;
    if (type === InputTypes.PASSWORD) return <RHPasswordField {...props} />;
    if (type === InputTypes.PHONE) return <RHPhoneField {...props} />;
    if (type === InputTypes.CHECKBOX) return <RHCheckbox {...props} />;
    if (type === InputTypes.MULTI_SELECT) return <RHAutoComplete {...props} />;
    if (type === InputTypes.SELECT) return <RHSelect {...props} />;
    if (type === InputTypes.CHECKBOXES) return <RHCheckboxes {...props} />;
    if (type === InputTypes.RATING) return <RHRatingField {...props} />;

    return null;
  };

  return <>{renderField()}</>;
};

export default FormFields;
