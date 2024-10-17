import { FC, useState } from "react";

import { Box, Container, Stack } from "@mui/material";

import { MenuToggler, NavigationDrawer, NavigationList } from "src/features";

import "./Header.scss";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onToggleMenu(): void {
    setIsOpen((prev) => !prev);
  }

  function onCloseMenu(): void {
    setIsOpen(false);
  }

  return (
    <Box component="header" className="header">
      <Container className="header__container">
        <Stack
          direction="row"
          alignItems="center"
          gap={{ xs: "18px", lg: "24px" }}
        >
          <MenuToggler
            active={isOpen}
            ariaLabel="menu opener"
            onClick={onToggleMenu}
          />

          <img
            src="/images/logo.svg"
            alt="payment app"
            width={25}
            height={32}
            className="header__logo"
          />
        </Stack>
        <Box className="header__tools" />
      </Container>
      <NavigationDrawer open={isOpen} onClose={onCloseMenu}>
        <NavigationList />
      </NavigationDrawer>
    </Box>
  );
};

export default Header;
