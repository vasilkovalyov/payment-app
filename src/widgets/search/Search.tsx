import { FC } from "react";

import { Box, Button } from "@mui/material";

import { IconSearch } from "src/features";

import "./Search.scss";

const Search: FC = () => {
  return (
    <Box className="search">
      <Button className="search__toggler" aria-label="search">
        <IconSearch />
      </Button>
    </Box>
  );
};

export default Search;
