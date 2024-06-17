"use client";
import * as Yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputTypes } from "@/app/enums/inputTypes";
import { Box, Button, ButtonGroup, Container, Grid } from "@mui/material";

import FormFields from "../FormFields";
import { IFormField } from "@/app/types/formFields";
import { IListingItem } from "@/app/types/api";
import { generateOptions } from "@/app/utils/generate-options";

const search: IFormField = {
  id: 1,
  name: "search",
  type: "text",
  label: undefined,
  placeholder: "City, building or Community",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const bedrooms: IFormField = {
  id: 3,
  name: "bedrooms",
  type: "select",
  label: undefined,
  placeholder: "Bedrooms",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [
    { id: 17, label: "Bedrooms", value: "-1" },
    { id: 2, label: "1", value: "1" },
    { id: 3, label: "2", value: "2" },
    { id: 4, label: "3", value: "3" },
    { id: 5, label: "4", value: "4" },
    { id: 6, label: "5", value: "5" },
    { id: 7, label: "6", value: "6" },
    { id: 8, label: "7+", value: "7+" },
  ],
};
const bathrooms: IFormField = {
  id: 4,
  name: "bathrooms",
  type: "select",
  label: undefined,
  placeholder: "Bathrooms",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [
    { id: 18, label: "Bathrooms", value: "-1" },
    { id: 9, label: "1", value: "1" },
    { id: 10, label: "2", value: "2" },
    { id: 11, label: "3", value: "3" },
    { id: 12, label: "4", value: "4" },
    { id: 13, label: "5", value: "5" },
    { id: 14, label: "6", value: "6" },
    { id: 15, label: "7+", value: "7+" },
  ],
};

interface Props {
  listings: IListingItem[];
}

const PropertySearch: React.FC<Props> = ({ listings }) => {
  const [purpose, setPurpose] = useState<string>("buy");

  const propertyTypes: IListingItem | undefined = listings.find(
    (item: IListingItem) => item.name === "propertyTypes"
  );

  const type: IFormField = {
    id: 2,
    name: "property-type",
    type: "select",
    label: undefined,
    placeholder: "property type",
    disabled: false,
    autoFocus: true,
    multiple: false,
    options: [
      { id: 1, label: "Property type", value: "-1" },
      ...generateOptions(
        propertyTypes && propertyTypes.result && propertyTypes.result.data,
        "name",
        "id"
      ),
    ],
  };

  const fields: IFormField[] = [search, type, bedrooms, bathrooms];

  const DEFAULT_VALUES: any = {};

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
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(Yup.object()),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    let url =
      `/${purpose}/?search=${formData["search"]}&property-type=${formData["property-type"]}&bedrooms=${formData["bedrooms"]}&bathrooms=${formData["bathrooms"]}`.replaceAll(
        " ",
        "+"
      );

    if (typeof window !== "undefined") {
      window.open(url, "_self");
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display={"block"}
        bgcolor={"rgba(0, 0, 0, .4)"}
        p={2}
      >
        <Grid container justifyContent={"center"} alignItems={"center"} mb={2}>
          <ButtonGroup
            variant="contained"
            aria-label="property-purpose"
            color="inherit"
            sx={{ "& .MuiButton-root": { minWidth: { xs: 96, md: 180 } } }}
          >
            <Button
              size="small"
              onClick={() => setPurpose("buy")}
              sx={{
                bgcolor: purpose === "buy" ? "grey.300" : "grey.100",
                "&:hover": {
                  bgcolor: "grey.300",
                },
              }}
            >
              Buy
            </Button>
            <Button
              size="small"
              onClick={() => setPurpose("rent")}
              sx={{
                bgcolor: purpose === "rent" ? "grey.300" : "grey.100",
                "&:hover": {
                  bgcolor: "grey.300",
                },
              }}
            >
              Rent
            </Button>
            <Button
              size="small"
              onClick={() => setPurpose("commercial")}
              sx={{
                bgcolor: purpose === "commercial" ? "grey.300" : "grey.100",
                "&:hover": {
                  bgcolor: "grey.300",
                },
              }}
            >
              Commercial
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          sx={{ display: { xs: "block", md: "flex" } }}
        >
          {fields.map((item: any) => (
            <FormFields
              {...item}
              key={item.id}
              control={control}
              errors={errors}
              watch={watch}
              setValue={setValue}
              register={register}
              sx={{ mb: { xs: 1, md: 0 } }}
            />
          ))}
          <Button
            variant="contained"
            type="submit"
            sx={{ minWidth: { xs: "100%", md: 64 } }}
          >
            Search
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default PropertySearch;
