import { FC } from "react";
import cn from "classnames";

import { Button } from "@mui/material";
import IconMenuOpener from "../icon-menu-opener/IconMenuOpener";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import "./MenuToggler.scss";

interface MenuTogglerProps {
  active: boolean;
  className?: string;
  ariaLabel: string;
  onClick: () => void;
}

const MenuToggler: FC<MenuTogglerProps> = ({ active, className, onClick }) => {
  return (
    <Button
      aria-label="toggle menu"
      className={cn("menu-toggler", className)}
      onClick={onClick}
    >
      {active ? <CancelOutlinedIcon /> : <IconMenuOpener />}
    </Button>
  );
};

export default MenuToggler;
