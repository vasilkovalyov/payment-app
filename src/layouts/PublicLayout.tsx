import { FC } from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

const PublicLayout: FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
  );
};

export default PublicLayout;
