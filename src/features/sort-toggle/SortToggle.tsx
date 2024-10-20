import { FC, useState, MouseEvent, useEffect } from "react";

import { Box, Button, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import { SortEnum } from "src/entities/models/sort";

import { sortList } from "src/shared/sort-list";

import "./SortToggle.scss";

export type SortToggleProps = {
  sortTypeValue: SortEnum | null;
  onChange: (type: SortEnum) => void;
};

const SortToggle: FC<SortToggleProps> = ({ onChange, sortTypeValue }) => {
  const [sortType, setSortType] = useState<SortEnum | null>(null);
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
    setSortType(value);
    handleClose();
  }

  useEffect(() => {
    setSortType(sortTypeValue);
  }, [sortTypeValue]);

  return (
    <Box className="sort-toggle">
      <Button
        className="sort-toggle__button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-label="open sort menu"
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
            selected={sortType === value}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SortToggle;
