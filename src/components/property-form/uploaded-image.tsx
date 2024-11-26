import Image from "next/image";
import { Box, IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";

import useSnackbarStore from "@/store/snackbar";
import calculateNewWidth from "@/utils/calculateNewWidth";
import { IRemoveParams } from "@/types/api";
import { getStrapiURL } from "@/utils/api-helpers";
import { updateProperty } from "@/utils/update-property";
import { remove } from "@/services/remove";
import { createSnackbarResponse } from "@/utils/snackbar";
import { ISessionUser } from "@/types/session";

interface Props {
  file: any;
  property: any;
  handleRemoveFile: (id: number | string) => void;
  session: ISessionUser | null;
}

const UploadedImage: React.FC<Props> = ({
  file,
  property,
  handleRemoveFile,
  session,
}) => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const { url, alternativeText, width, height } = file;

  const removeImage = async () => {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>Make sure you have a valid session!</>,
          "error"
        )
      );

      return;
    }

    try {
      const removeFileParams: IRemoveParams = {
        path: "/api/upload/files/" + file.id,
        token: session.token,
      };

      await remove(removeFileParams);

      if (property && property.attributes.gallery.data) {
        const uploadedFiles: string[] = [];

        for (let file of property.attributes.gallery.data) {
          uploadedFiles.push(file.id);
        }

        const filteredFiles: any[] = uploadedFiles.filter(
          (item: string) => item !== file.id
        );

        try {
          // If it's property update
          await updateProperty(property.id, {
            gallery: filteredFiles.length > 0 ? filteredFiles : null,
          });

          handleRemoveFile(file.id);
        } catch (err: Error | any) {
          console.log(
            "Error updating property after deleting image from the property."
          );
        }
      } else handleRemoveFile(file.id);
    } catch (err: Error | any) {
      console.log(err);
    }
  };

  return (
    <Box
      border={"1px solid"}
      borderColor={"divider"}
      p={"4px"}
      position={"relative"}
      width={80}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ "&:hover": { "& .close-button": { opacity: 1, zIndex: 1 } } }}
    >
      <Stack
        className="close-button"
        justifyContent={"center"}
        alignItems={"center"}
        position="absolute"
        bgcolor={"rgba(255,255,255,.9)"}
        width={1}
        zIndex={-1}
        sx={{ inset: 0, opacity: 0, transition: "all .2s ease-in-out" }}
      >
        <IconButton
          size="small"
          onClick={removeImage}
          sx={{ bgcolor: "grey.300", "&:hover": { bgcolor: "grey.300" } }}
        >
          <Close fontSize="small" />
        </IconButton>
      </Stack>
      <Image
        src={getStrapiURL(url)}
        alt={alternativeText ? alternativeText : ""}
        width={calculateNewWidth(width, height, 80)}
        height={80}
      />
    </Box>
  );
};

export default UploadedImage;
