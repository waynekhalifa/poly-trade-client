import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const DropzoneField: FC = () => {
  const onDrop: any = useCallback(async (acceptedFiles: any) => {
    console.log;

    // eslint-disable-next-line
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Box
        sx={{
          backgroundColor: "common.white",
          padding: "8.5px 14px",
          borderRadius: "4px",
          border: "1px solid",
          borderColor: "grey.400",
          cursor: "pointer",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AttachFileIcon fontSize="small" sx={{ mr: 1 }} />
          رفع ملف
        </Box>
      </Box>
    </>
  );
};

export default DropzoneField;
