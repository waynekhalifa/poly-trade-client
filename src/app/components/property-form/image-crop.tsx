/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useCallback } from "react";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";
import { canvasPreview } from "./canvas-preview";
import { useDebounceEffect } from "./debounce-effect";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { ISessionUser } from "@/app/types/session";
import useSnackbarStore from "@/app/store/snackbar";
import { createSnackbarResponse } from "@/app/utils/snackbar";
import UploadedImage from "./uploaded-image";
import { IPostParams } from "@/app/types/api";
import { postForm } from "@/app/services/post-form";

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

interface Props {
  session: ISessionUser | null;
  property: any;
  uploadedFiles: any[];
  setUploadedFiles: (files: any) => void;
}

const ImageCrop: React.FC<Props> = ({
  session,
  property,
  uploadedFiles,
  setUploadedFiles,
}) => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const [imgSrc, setImgSrc] = useState("");
  const [imgName, setImgName] = useState("");
  const [imgType, setImgType] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [open, setOpen] = useState<boolean>(false);

  const onDrop: any = useCallback(async (files: File[]) => {
    if (files && files.length > 0) {
      setImgName(files[0].name);
      setImgType(files[0].type);
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(files[0]);

      setOpen(true);
    }
    // eslint-disable-next-line
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 1.5));
  }

  const handleRemoveFile = (id: string | number) => {
    const newUploadedFiles: any[] = uploadedFiles.filter(
      (item: any) => item.id !== id
    );

    setUploadedFiles(newUploadedFiles);
  };

  async function onSelectImage() {
    if (!session) {
      setSnackbar(
        createSnackbarResponse(
          <>Make sure you have a valid session!</>,
          "error"
        )
      );

      return;
    }

    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    const blob = await offscreen.convertToBlob({
      type: imgType,
    });

    const file: File = new File([blob], imgName, { type: imgType });

    const formData: FormData = new FormData();
    formData.append("files", file);

    const newFileParams: IPostParams = {
      path: "/api/upload",
      input: formData,
      token: session.token,
    };

    const response = await postForm(newFileParams);

    setUploadedFiles([...response, ...uploadedFiles]);

    setOpen(false);
  }

  const handleClose = () => setOpen(false);

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          1,
          0
        );
      }
    },
    100,
    [completedCrop]
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
          borderColor: isDragActive ? "primary.main" : "grey.400",
          pt: 4,
          pb: 4,
          minHeight: 164,
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography>Drop files Here</Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom>Drop files here</Typography>
            <Typography gutterBottom>Or</Typography>
            <Button color="primary" variant="outlined">
              Select files
            </Button>
          </Box>
        )}
      </Box>
      {uploadedFiles.length > 0 && (
        <Grid container gap={2} mt={2}>
          {uploadedFiles.map((item: any) => (
            <UploadedImage
              key={item.id}
              file={item}
              property={property}
              handleRemoveFile={handleRemoveFile}
              session={session}
            />
          ))}
        </Grid>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ borderBottom: "1px solid", borderColor: "divider" }}
        >
          {"Crop Image - Scroll down to see the cropped version"}
        </DialogTitle>
        <DialogContent>
          {!!imgSrc && (
            <Grid container justifyContent={"center"} mt={3}>
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={1.5}
                // minWidth={400}
                minHeight={600}
                // circularCrop
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imgSrc}
                  style={{ transform: `scale(${1}) rotate(${0}deg)` }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            </Grid>
          )}
          {!!completedCrop && (
            <Grid container justifyContent={"center"}>
              <Box
                component={"canvas"}
                ref={previewCanvasRef}
                sx={{
                  mt: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  objectFit: "contain",
                  width: completedCrop.width,
                  height: completedCrop.height,
                }}
              />
            </Grid>
          )}
        </DialogContent>
        <DialogActions
          sx={{
            p: 3,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={onSelectImage}>
            Select Image
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageCrop;
