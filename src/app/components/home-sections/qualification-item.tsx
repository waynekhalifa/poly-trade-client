import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { getStrapiURL } from "@/app/utils/api-helpers";

interface Props {
  item: any;
}

const QualificationItem: React.FC<Props> = ({ item }) => {
  return (
    <Stack alignItems={"center"} mb={{ xs: 2, md: 0 }}>
      <Image
        src={getStrapiURL(item.thumbnail.data.attributes.url)}
        alt={item.title}
        width={120}
        height={120}
      />
      <Typography textAlign={"center"} mt={2}>
        {item.title}
      </Typography>
    </Stack>
  );
};

export default QualificationItem;
