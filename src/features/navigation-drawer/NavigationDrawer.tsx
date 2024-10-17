import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Box, Drawer } from "@mui/material";

import { MenuToggler } from "../menu-toggler";

interface HeaderProfileProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const HeaderProfile: FC<HeaderProfileProps> = ({
  children,
  open = false,
  onClose
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setVisible(open);
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <Drawer
      anchor="left"
      open={visible}
      onClose={onClose}
      className="drawer navigation"
    >
      <Box className="drawer__inner">
        <Box className="drawer__header">
          <img
            src="/images/logo.svg"
            alt="payment app"
            width={25}
            height={32}
          />
          <MenuToggler
            active={true}
            onClick={onClose}
            className="drawer__close"
            ariaLabel="menu close"
          />
        </Box>
        <Box className="drawer__body">{children}</Box>
      </Box>
    </Drawer>
  );
};

export default HeaderProfile;
