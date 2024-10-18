import { FC, useState } from "react";

import { Box, Stack, Button, TextField, InputAdornment } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export type PromoCodeProps = {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  onClick: (value: string) => void;
};

const PromoCode: FC<PromoCodeProps> = ({ placeholder, onClick }) => {
  const [value, setValue] = useState<string>("");

  function onHandleSubmit(): void {
    onClick(value);
  }

  function onChangeCode(code: string): void {
    setValue(code);
  }

  return (
    <Stack gap={{ xs: "8px", md: "10px" }} className="promo-code">
      <Box
        component="form"
        gap={{ xs: "12px", sm: "24px" }}
        display="grid"
        gridTemplateColumns={{ sm: "1fr 152px" }}
        className="promo-code__row"
      >
        <TextField
          variant="filled"
          placeholder={placeholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <TaskAltIcon color="success" />
              </InputAdornment>
            )
          }}
          onChange={(e) => onChangeCode(e.currentTarget.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={onHandleSubmit}
          disabled={value.length === 0}
        >
          Apply
        </Button>
      </Box>
    </Stack>
  );
};

export default PromoCode;
