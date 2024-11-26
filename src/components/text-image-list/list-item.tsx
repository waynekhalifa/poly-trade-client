import { Stack } from "@mui/material";
import RichText from "../rich-text";
import Media from "../media";

interface Props {
  text: any;
  image: any;
}

const ListItem: React.FC<Props> = ({ text, image }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Media data={image} />
      <RichText data={text} />
    </Stack>
  );
};

export default ListItem;
