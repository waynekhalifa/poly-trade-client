import { getStrapiURL } from "@/app/utils/api-helpers";
import calculateNewWidth from "@/app/utils/calculateNewWidth";
import { Box } from "@mui/material";
import Image from "next/image";

interface Props {
  data: any;
  type: string;
  imageHeight: number;
  borderColor: string;
  padding: any;
}

const SliderItem: React.FC<Props> = ({
  data,
  type,
  imageHeight,
  borderColor,
  padding,
}) => {
  if (type === "carousel")
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid"}
        borderColor={borderColor}
        pt={padding ? padding.top : 0}
        pb={padding ? padding.bottom : 0}
        pl={padding ? padding.left : 0}
        pr={padding ? padding.right : 0}
        maxHeight={imageHeight}
        width={"auto"}
      >
        <Image
          src={getStrapiURL(data.url)}
          alt={data.alternativeText}
          width={Math.floor(calculateNewWidth(data.width, data.height, 112))}
          height={112}
        />
      </Box>
    );
  return (
    <Box height={imageHeight} position={"relative"}>
      <Image src={getStrapiURL(data.url)} alt={data.alternativeText} fill />
    </Box>
  );
};

export default SliderItem;
