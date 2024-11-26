"use client";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";

import ImageCrop from "./image-crop";
import LinkWrap from "../link-wrap";
import FormFields from "../FormFields";
import useSnackbarStore from "@/store/snackbar";
import { IFormField } from "@/types/formFields";
import { ISessionUser } from "@/types/session";
import { InputTypes } from "@/enums/inputTypes";
import { ArrowBack } from "@mui/icons-material";
import { createSnackbarResponse } from "@/utils/snackbar";
import { IListingItem, IPostParams, Model } from "@/types/api";
import { generateOptions } from "@/utils/generate-options";
import { put } from "@/services/put";
import { slugify } from "@/utils/slugify";
import { post } from "@/services/post";

interface Props {
  session: ISessionUser | null;
  property: any;
  listings: IListingItem[];
}

type TState = { uploadedFiles: any[] };
const INITIAL_STATE: TState = { uploadedFiles: [] };

const PropertyForm: React.FC<Props> = ({ session, property, listings }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { uploadedFiles } = state;
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const fields: IFormField[] = [];
  const DEFAULT_VALUES: any = {};

  const propertyTypes: IListingItem | undefined = listings.find(
    (item: any) => item.name === "propertyTypes"
  );
  const propertyLocations: IListingItem | undefined = listings.find(
    (item: any) => item.name === "propertyLocations"
  );

  useEffect(() => {
    if (property && property.attributes.gallery.data) {
      const uploadedFiles: any[] = [];

      for (let file of property.attributes.gallery.data) {
        uploadedFiles.push({ id: file.id, ...file.attributes });
      }

      setState({ ...state, uploadedFiles });
    }

    // eslint-disable-next-line
  }, []);

  const name: IFormField = {
    id: 1,
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "",
    disabled: false,
    autoFocus: true,
    multiple: false,
    options: [],
  };
  const bath: IFormField = {
    id: 2,
    name: "bath",
    type: "select",
    label: "Number of Bathrooms",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [
      { id: 9, label: "1", value: "1" },
      { id: 10, label: "2", value: "2" },
      { id: 11, label: "3", value: "3" },
      { id: 12, label: "4", value: "4" },
      { id: 13, label: "5", value: "5" },
      { id: 14, label: "6", value: "6" },
      { id: 15, label: "7+", value: "7+" },
    ],
  };
  const bed: IFormField = {
    id: 3,
    name: "bed",
    type: "select",
    label: "Number of bedrooms",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [
      { id: 9, label: "1", value: "1" },
      { id: 10, label: "2", value: "2" },
      { id: 11, label: "3", value: "3" },
      { id: 12, label: "4", value: "4" },
      { id: 13, label: "5", value: "5" },
      { id: 14, label: "6", value: "6" },
      { id: 15, label: "7+", value: "7+" },
    ],
  };
  const price: IFormField = {
    id: 5,
    name: "price",
    type: "number",
    label: "Price",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  };
  const area: IFormField = {
    id: 6,
    name: "area",
    type: "number",
    label: "Area",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  };
  const address: IFormField = {
    id: 4,
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  };
  const type: IFormField = {
    id: 7,
    name: "type",
    type: "select",
    label: "Type",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [
      ...generateOptions(
        propertyTypes && propertyTypes.result && propertyTypes.result.data,
        "name",
        "id"
      ),
    ],
  };
  const location: IFormField = {
    id: 9,
    name: "location",
    type: "select",
    label: "Location",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [
      ...generateOptions(
        propertyLocations &&
          propertyLocations.result &&
          propertyLocations.result.data,
        "name",
        "slug"
      ),
    ],
  };
  const description: IFormField = {
    id: 10,
    name: "description",
    type: "text",
    label: "Description",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [],
  };
  const featured: IFormField = {
    id: 11,
    name: "featured",
    type: "select",
    label: "Featured",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [
      { id: 16, label: "False", value: "false" },
      { id: 1, label: "True", value: "true" },
    ],
  };
  const hasConditions: IFormField = {
    id: 12,
    name: "hasConditions",
    type: "select",
    label: "Has Condition",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [
      { id: 16, label: "False", value: "false" },
      { id: 1, label: "True", value: "true" },
    ],
  };
  const purpose: IFormField = {
    id: 13,
    name: "purpose",
    type: "select",
    label: "Purpose",
    placeholder: "",
    disabled: false,
    autoFocus: false,
    multiple: false,
    options: [
      { id: 16, label: "Buy", value: "buy" },
      { id: 1, label: "Rent", value: "rent" },
      { id: 2, label: "Commercial", value: "commercial" },
    ],
  };

  fields.push(
    name,
    description,
    area,
    price,
    address,
    location,
    bath,
    bed,
    type,
    featured,
    hasConditions,
    purpose
  );

  if (property) {
    for (const field of fields) {
      DEFAULT_VALUES[field.name] = property.attributes[`${field.name}`];
    }
  } else {
    for (const field of fields) {
      if (field.type === InputTypes.CHECKBOX) {
        DEFAULT_VALUES[field.name] = false;
      } else if (field.type === InputTypes.SELECT) {
        DEFAULT_VALUES[field.name] = field.options![0].value;
      } else {
        DEFAULT_VALUES[field.name] = "";
      }
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

  const renderButtonText = () => (property ? "Update" : "Save");

  const addProperty = async (formData: any) => {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>Make sure you have a valid session!</>,
          "error"
        )
      );

      return;
    }

    if (uploadedFiles.length === 0) {
      setSnackbar(
        createSnackbarResponse(
          <>Property gallery is a required field!</>,
          "error"
        )
      );

      return;
    }

    const galleryIds: string[] = [];

    for (let file of uploadedFiles) {
      galleryIds.push(file.id);
    }

    const seo = {
      title: formData.name,
      description: "Buy and rent properties in South Sudan",
      icon: 1,
    };

    const newPropertyParams: IPostParams = {
      path: "/api/properties",
      input: {
        data: {
          ...formData,
          slug: slugify(formData.name),
          gallery: galleryIds,
          agent: { connect: [session.id] },
          seo,
        },
      },
      token: session.token,
    };

    try {
      await post(newPropertyParams);

      const types: Model[] | undefined =
        propertyTypes &&
        propertyTypes.result &&
        propertyTypes.result.data.filter(
          (item: any) => item.id === parseInt(formData.type)
        );

      const locations: Model[] | undefined =
        propertyLocations &&
        propertyLocations.result &&
        propertyLocations.result.data.filter(
          (item: any) => item.attributes.slug === formData.location
        );

      if (types && types.length > 0 && locations && locations.length > 0) {
        const typesCount: number = types[0].attributes.propertiesNum;
        const locationsCount: number = locations[0].attributes.propertiesNum;

        const editTypeParams: IPostParams = {
          path: "/api/property-types/" + formData.type,
          input: { data: { propertiesNum: typesCount + 1 } },
          token: session.token,
        };
        const editLocationParams: IPostParams = {
          path: "/api/property-locations/" + locations[0].id,
          input: { data: { propertiesNum: locationsCount + 1 } },
          token: session.token,
        };

        await Promise.all([put(editTypeParams), put(editLocationParams)]);

        setSnackbar(
          createSnackbarResponse(
            <>Property has been saved successfully!</>,
            "success"
          )
        );

        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.open("/my-account?tab=my-listings", "_self");
          }
        }, 2000);
      }
    } catch (err: Error | any) {
      console.log(err);
    }
  };

  const editProperty = async (formData: any) => {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>Make sure you have a valid session!</>,
          "error"
        )
      );

      return;
    }

    if (uploadedFiles.length === 0) {
      setSnackbar(
        createSnackbarResponse(
          <>Property gallery is a required field!</>,
          "error"
        )
      );

      return;
    }

    const galleryIds: string[] = [];

    for (let file of uploadedFiles) {
      galleryIds.push(file.id);
    }

    const editPropertyParams: IPostParams = {
      path: "/api/properties/" + property.id,
      input: {
        data: {
          ...formData,
          gallery: galleryIds,
        },
      },
      token: session.token,
    };

    try {
      await put(editPropertyParams);

      setSnackbar(
        createSnackbarResponse(
          <>Property has been updated successfully!</>,
          "success"
        )
      );

      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.open("/my-account?tab=my-listings", "_self");
        }
      }, 2000);
    } catch (err: Error | any) {
      console.log(err);
    }
  };

  const onSubmit: SubmitHandler<any> = async (formData: any) =>
    property ? editProperty(formData) : addProperty(formData);

  return (
    <>
      <LinkWrap href="/my-account?tab=my-listings" sx={{ mb: 4 }}>
        <Button variant="contained" size="small" startIcon={<ArrowBack />}>
          My Listings
        </Button>
      </LinkWrap>
      <Grid
        container
        spacing={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <FormFields
              {...item}
              control={control}
              errors={errors}
              watch={watch}
              setValue={setValue}
              register={register}
              sx={{ minWidth: { xs: "100%" } }}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <ImageCrop
            session={session}
            property={property}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={(files) =>
              setState({ ...state, uploadedFiles: files })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ textTransform: "capitalize" }}
          >
            {renderButtonText()}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyForm;
