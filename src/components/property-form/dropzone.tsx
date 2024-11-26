import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Typography } from "@mui/material";
import UploadFile from "./upload-file";

interface StateProp {
  files: File[];
}

const INITIAL_STATE: StateProp = { files: [] };

const Dropzone: FC = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { files } = state;

  const onDrop: any = useCallback(async (files: File[]) => {
    setState({ ...state, files });
    // eslint-disable-next-line
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box sx={{ pt: 2 }}>
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
          mt: "-4px",
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
      {files.length > 0 &&
        files.map((file: File) => (
          <UploadFile key={URL.createObjectURL(file)} file={file} />
        ))}
    </Box>
  );
};

export default Dropzone;
