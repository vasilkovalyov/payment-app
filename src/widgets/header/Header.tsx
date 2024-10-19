import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { Box, Container, Button, Stack, Avatar } from "@mui/material";

import { useAppSelector } from "src/app/store/store";
import { getUser } from "src/app/store/slices/user/userSlice";

import {
  IconGift,
  MenuToggler,
  NavigationDrawer,
  NavigationList
} from "src/features";

import { Search } from "../search";
import { Notifications } from "../notifications";
import { BalanceButton } from "../balance-button";

import "./Header.scss";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const user = useAppSelector(getUser);

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
            aria-label="menu navigation opener"
          />
          <Button
            className="header__logo-toggler"
            onClick={onToggleMenu}
            aria-label="menu navigation opener"
          >
            <img
              src="/images/logo.svg"
              alt="payment app"
              width={25}
              height={32}
              className="header__logo"
            />
          </Button>
        </Stack>
        <Stack
          className="header__right-side"
          direction="row"
          alignItems="center"
          gap={{ xs: "10px", lg: "22px" }}
        >
          {user && (
            <>
              <Stack
                className="header__tools"
                direction="row"
                alignItems="center"
                gap={{ xs: "10px", lg: "22px" }}
              >
                <Search />
                <Link to="#" aria-label="link to the  gift page">
                  <IconGift />
                </Link>
                <Notifications />
              </Stack>
              <BalanceButton />
              <Avatar
                src={user.avatar}
                alt={user.name}
                className="header__user-avatar"
              />
            </>
          )}
        </Stack>
      </Container>
      <NavigationDrawer open={isOpen} onClose={onCloseMenu}>
        <NavigationList />
      </NavigationDrawer>
    </Box>
  );
};

export default Header;
