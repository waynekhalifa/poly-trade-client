import { IOption } from "./option";

export interface IFormField {
  id: string | number;
  name: string;
  type:
    | "text"
    | "email"
    | "phone"
    | "password"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "checkbox"
    | "radio"
    | "select"
    | "hidden"
    | "multi select"
    | "image"
    | "checkboxes"
    | "editor"
    | "rating"
    | "textarea";
  label?: string | React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  options?: IOption[];
  defaultValue?: any;
  multiple?: boolean;
  rows?: number;
}
