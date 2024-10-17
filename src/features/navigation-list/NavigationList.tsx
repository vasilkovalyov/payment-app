import { FC } from "react";
import { NavLink } from "react-router-dom";

import { MenuList, MenuItem } from "@mui/material";

import menu from "./data.json";

import "./NavigationList.scss";

export type NavigationLink = {
  id: string;
  path: string;
  name: string;
};

const NavigationList: FC = () => {
  return (
    <MenuList className="navigation-list">
      {menu.map(({ id, name, path }) => (
        <MenuItem key={id} className="navigation-list__item">
          <NavLink to={path}>{name}</NavLink>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default NavigationList;
