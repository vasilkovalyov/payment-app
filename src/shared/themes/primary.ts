import { createTheme } from "@mui/material";

import { AppColors } from "./colors";

export const primaryTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: AppColors.Primary
    },
    secondary: {
      main: AppColors.Secondary
    },
    warning: {
      main: AppColors.Orange
    },
    success: {
      main: AppColors.Green
    },
    error: {
      main: AppColors.Secondary
    },
    text: {
      primary: AppColors.Light,
      secondary: AppColors.Grey
    }
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(",")
  }
});

const containerWidth = 1142;
const containerPadding = 20;

primaryTheme.typography.h1 = {
  fontSize: 28,
  fontWeight: 800
};

primaryTheme.typography.h2 = {
  fontSize: 24,
  fontWeight: 800
};

primaryTheme.typography.h5 = {
  fontSize: 18,
  fontWeight: 800
};

primaryTheme.typography.h6 = {
  fontSize: 16
};

primaryTheme.typography.body1 = {
  fontSize: 16
};

primaryTheme.typography.body2 = {
  fontSize: 8,
  lineHeight: 1.36,
  fontWeight: 500,
  color: AppColors.Grey,
  [primaryTheme.breakpoints.up("md")]: {
    fontSize: 12
  }
};

primaryTheme.typography.caption = {
  fontSize: 10,
  lineHeight: 1.36,
  [primaryTheme.breakpoints.up("md")]: {
    fontSize: 14
  }
};

primaryTheme.components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        color: AppColors.Light,
        backgroundColor: AppColors.Dark1,
        lineHeight: 1.36
      }
    }
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: containerWidth,
        paddingInline: containerPadding,
        [primaryTheme.breakpoints.up("sm")]: {
          maxWidth: containerWidth,
          paddingInline: containerPadding
        },
        [primaryTheme.breakpoints.up("md")]: {
          maxWidth: containerWidth,
          paddingInline: containerPadding
        },
        [primaryTheme.breakpoints.up("md")]: {
          maxWidth: containerWidth,
          paddingInline: containerPadding
        }
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "capitalize",
        lineHeight: 1.36,
        borderRadius: 4,
        fontWeight: 800,
        boxShadow: `-1px 2px 6px 0px rgb(0 0 0 / .9)`,
        [primaryTheme.breakpoints.up("md")]: {
          borderRadius: 6,
          boxShadow: "none"
        },
        ":hover": {
          boxShadow: "none"
        }
      },
      sizeMedium: {
        fontSize: 14,
        height: "auto",
        minHeight: 40,
        [primaryTheme.breakpoints.up("md")]: {
          fontSize: 16,
          minHeight: 42
        }
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      elevation24: {
        backgroundColor: AppColors.Dark3,
        boxShadow: "1px 1px 5px 0 rgb(0 0 0 / 0.05)",
        padding: 20,
        borderRadius: 6,
        width: "100%"
      }
    }
  },
  MuiInput: {
    styleOverrides: {
      input: {},
      root: {}
    }
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        borderRadius: 4,
        backgroundColor: AppColors.Dark3,
        height: 24,
        fontSize: 14,
        fontWeight: 500,

        [primaryTheme.breakpoints.up("md")]: {
          fontWeight: 800,
          height: 26,
          fontSize: 16
        }
      },
      root: {
        "&.MuiFilledInput-root::after": {
          display: "none"
        },
        "&.MuiFilledInput-root::before": {
          display: "none"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
          borderWidth: 0
        }
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      input: {
        padding: "8px 12px"
      }
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: AppColors.Dark3
      }
    }
  }
};
