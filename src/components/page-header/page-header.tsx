"use client";

import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowForwardIos } from "@mui/icons-material";
import { IFormField } from "@/types/formFields";
import { Box, Button, Container, Grid, List, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import FormFields from "../FormFields";
import LinkWrap from "../link-wrap";
import { IListingItem } from "@/types/api";
import { generateOptions } from "@/utils/generate-options";

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
const purpose: IFormField = {
  id: 5,
  name: "property-purpose",
  type: "select",
  label: undefined,
  placeholder: "property purpose",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [
    { id: 1, label: "Buy", value: "buy" },
    { id: 2, label: "Rent", value: "rent" },
    { id: 3, label: "Commercial", value: "commercial" },
  ],
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
  page: any;
  searchParams: any;
  listings: IListingItem[];
}

const PageHeader: React.FC<Props> = ({ page, searchParams, listings }) => {
  const { name, slug } = page;
  const isMyAccount: boolean = slug === "my-account";

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

  const fields: IFormField[] = [search, purpose, type, bedrooms, bathrooms];

  const DEFAULT_VALUES: any = {};
  DEFAULT_VALUES["property-purpose"] = slug;
  DEFAULT_VALUES["search"] = searchParams["search"]
    ? searchParams["search"].replaceAll("-", " ")
    : "";
  DEFAULT_VALUES["property-type"] = searchParams["property-type"]
    ? searchParams["property-type"]
    : "-1";
  DEFAULT_VALUES["bedrooms"] = searchParams["bedrooms"]
    ? searchParams["bedrooms"]
    : "-1";
  DEFAULT_VALUES["bathrooms"] = searchParams["bathrooms"]
    ? searchParams["bathrooms"]
    : "-1";

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
      `/${formData["property-purpose"]}/?search=${formData["search"]}&property-type=${formData["property-type"]}&bedrooms=${formData["bedrooms"]}&bathrooms=${formData["bathrooms"]}`.replaceAll(
        " ",
        "+"
      );

    if (typeof window !== "undefined") {
      window.open(url, "_self");
    }
  };

  return (
    <>
      {!isMyAccount && (
        <Box
          borderTop={"1px solid rgba(0, 0, 0, 0.12)"}
          borderBottom={"1px solid rgba(0, 0, 0, 0.12)"}
        >
          <Container>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              display={"block"}
              py={2}
            >
              <Grid
                container
                columnGap={1}
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
                  sx={{
                    minWidth: { xs: "100%", md: 64 },
                    ml: { xs: 0, md: 1 },
                  }}
                >
                  Find
                </Button>
              </Grid>
            </Box>
          </Container>
        </Box>
      )}
      <Box
        py={2}
        borderTop={"1px solid"}
        borderColor={isMyAccount ? "divider" : "transparent"}
      >
        <Container>
          <List
            disablePadding
            sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
          >
            <LinkWrap href={"/"}>
              <Typography
                variant="body2"
                textTransform={"capitalize"}
                color={"text.secondary"}
                sx={{
                  transition: "all .s3 ease-in",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Home
              </Typography>
            </LinkWrap>
            <ArrowForwardIos
              fontSize="small"
              sx={{ color: "text.primary", transform: "scale(.5)" }}
            />
            <Typography variant="body2" color={"text.secondary"}>
              {name}
            </Typography>
          </List>
        </Container>
      </Box>
      <Container>
        <Typography variant="h5" component="h1" fontWeight={700} my={{ xs: 2 }}>
          {name}
        </Typography>
      </Container>
    </>
  );
};

export default PageHeader;
