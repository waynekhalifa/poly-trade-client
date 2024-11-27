import { memo, useCallback, useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Preview from "./preview";
import { getStrapiURL } from "@/utils/api-helpers";

export const imageTypes: string[] = [
  "image/apng",
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/svg+xml",
  "image/webp",
];

export const videoTypes: string[] = ["video/mp4"];

const images: Set<string> = new Set<string>(imageTypes);

interface Props {
  file: File;
}

type IState = { error: any };
const INITIAL_STATE: IState = { error: null };

const UploadFile: React.FC<Props> = ({ file }) => {
  const [state, setState] = useState<IState>(INITIAL_STATE);
  const { error } = state;

  const upload = async (clientHeight?: number, clientWidth?: number) => {
    const formData: any = new FormData();

    formData.append("files", file);

    // Send a POST request to upload the image
    const response = await fetch(getStrapiURL() + "/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (data?.error) setState({ ...state, error: data.error });
  };

  const uploadNonImage = useCallback(async () => {
    await upload();

    // eslint-disable-next-line
  }, []);

  const uploadImage = async (clientHeight: number, clientWidth: number) => {
    await upload(clientHeight, clientWidth);
  };

  useEffect(() => {
    if (!images.has(file.type)) uploadNonImage();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Paper
        key={file.name}
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "grey.300",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "4px 12px",
          mb: 1,
        }}
      >
        <Typography sx={{ flex: 1 }}>{file.name}</Typography>
        {error !== null && (
          <Typography color="error">{`Error uploading ${file.name}`}</Typography>
        )}
        {error === null && (
          <Box
            sx={{
              width: 320,
              height: 32,
              background: "lightGrey",
              position: "relative",
            }}
          >
            <Box
              id={`${file.name}-progress-bar`}
              sx={{
                width: 0,
                height: 32,
                backgroundColor: "primary.main",
              }}
            />
            <Box
              id={`${file.name}-progress-text`}
              sx={{
                width: "100%",
                height: 32,
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </Box>
        )}
      </Paper>
      {images.has(file.type) && (
        <Preview
          fileUrl={URL.createObjectURL(file)}
          upLoadFile={(clientHeight, clientWidth) =>
            uploadImage(clientHeight, clientWidth)
          }
        />
      )}
    </>
  );
};

export default memo(UploadFile);
