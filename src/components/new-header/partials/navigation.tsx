import { List } from "@mui/material";
import NavigationItem from "./navigation-item";
import { Fragment } from "react";
import DrawerItem from "./drawer-item";

interface Props {
  placement: string;
  activePage: string;
  links: Array<any>;
}

const Navigation: React.FC<Props> = ({ placement, activePage, links }) => {
  return (
    <List
      disablePadding
      id="primary-menu"
      sx={{ display: placement === "header" ? "flex" : "block" }}
    >
      {links.map((item: any) => (
        <Fragment key={item.id}>
          {placement === "header" && (
            <NavigationItem activePage={activePage} item={item} subItems={[]} />
          )}
          {placement === "drawer" && (
            <DrawerItem activePage={activePage} item={item} subItems={[]} />
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default Navigation;
