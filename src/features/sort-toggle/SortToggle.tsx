import { FC, useState, MouseEvent } from "react";

import { Box, Button, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import { SortEnum } from "src/entities/models/sort";

import { sortList } from "src/shared/sort-list";

import "./SortToggle.scss";

export type SortToggleProps = {
  onChange: (type: SortEnum) => void;
};

const SortToggle: FC<SortToggleProps> = ({ onChange }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): void {
    setAnchorEl(null);
  }

  function onSelectSort(value: SortEnum): void {
    onChange(value);
    handleClose();
  }

  return (
    <Box className="sort-toggle">
      <Button
        className="sort-toggle__button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterListIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
        className="sort-toggle__menu"
      >
        {sortList.map(({ name, value }, index) => (
          <MenuItem
            key={index}
            onClick={() => onSelectSort(value)}
            className="sort-toggle__menu-item"
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SortToggle;
