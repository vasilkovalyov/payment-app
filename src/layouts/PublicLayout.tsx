import { FC } from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

import { Header } from "src/widgets/header";

const PublicLayout: FC = () => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default PublicLayout;
