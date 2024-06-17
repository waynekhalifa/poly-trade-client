import { List } from "@mui/material";
import CriteriaItem from "./crateria-item";

interface Props {
  data: any;
}

const Criterias: React.FC<Props> = ({ data }) => {
  const { links } = data;

  return (
    <List disablePadding>
      {links.map((item: any) => (
        <CriteriaItem key={item.id} data={item} />
      ))}
    </List>
  );
};

export default Criterias;
