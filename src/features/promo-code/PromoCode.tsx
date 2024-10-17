import { FC, useState } from "react";

import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  InputAdornment
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { AppColors } from "src/shared/themes";

export type PromoCodeProps = {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  onClick: (value: string) => void;
};

const PromoCode: FC<PromoCodeProps> = ({
  title,
  subtitle,
  placeholder,
  onClick
}) => {
  const [value, setValue] = useState<string>("");

  function onHandleSubmit(): void {
    onClick(value);
  }

  function onChangeCode(code: string): void {
    setValue(code);
  }

  return (
    <Stack gap={{ xs: "8px", md: "10px" }}>
      <Typography variant="h5">{title}</Typography>
      <Typography
        variant="body1"
        color={AppColors.Grey}
        fontSize={{ xs: "10px", md: "16px" }}
      >
        {subtitle}
      </Typography>
      <Box
        component="form"
        gap={{ xs: "12px", sm: "24px" }}
        display="grid"
        gridTemplateColumns={{ sm: "1fr 152px" }}
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
          type="submit"
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
