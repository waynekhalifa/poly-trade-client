"use client";

import RHTextField from "./RHTextField";
import RHPasswordField from "./RHPasswordField";
import RHCheckbox from "./RHCheckbox";
import RHAutoComplete from "./RHAutoComplete";
import RHCheckboxes from "./RHCheckboxes";
import { Control } from "react-hook-form";
import RHRatingField from "./RHRatingField";
import RHPhoneField from "./RHPhoneField";
import { IFormField } from "@/app/types/formFields";
import { InputTypes } from "@/app/enums/inputTypes";
import RHSelect from "./RHSelect";

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
