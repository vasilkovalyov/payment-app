import { FC, useState } from "react";

import { Box, Stack, Button, TextField, InputAdornment } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export type PromoCodeProps = {
  placeholder?: string;
  success?: boolean;
  onClick: (value: string) => void;
};

const PromoCode: FC<PromoCodeProps> = ({ placeholder, success, onClick }) => {
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
          inputProps={{
            "aria-label": "promocode"
          }}
          InputProps={{
            endAdornment: (
              <>
                {success && (
                  <InputAdornment position="end">
                    <TaskAltIcon color="success" />
                  </InputAdornment>
                )}
              </>
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
          className="promo-code__button"
        >
          Apply
        </Button>
      </Box>
    </Stack>
  );
};

export default PromoCode;
