import { Box } from "@mui/material";

interface Props {
  data: any;
}

const EmbeddedMap: React.FC<Props> = ({ data }) => {
  const { url, height } = data;

  return (
    <Box
      component={"iframe"}
      src={url}
      width={"100%"}
      height={height}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      border={0}
      display={"block"}
    />
  );
};

export default EmbeddedMap;
