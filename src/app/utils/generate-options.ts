import { Model } from "../types/api";
import { IOption } from "../types/option";

export const generateOptions = (
  data: Model[] | undefined,
  labelKey: string,
  valueKey: string
): IOption[] => {
  if (!data) throw new Error("Data must be available");
  const options: IOption[] = [];

  for (let item of data) {
    const option: IOption = {
      id: item.id,
      label: item.attributes[labelKey],
      value: valueKey !== "id" ? item.attributes[valueKey] : `${item.id}`,
    };

    options.push(option);
  }

  return options;
};
