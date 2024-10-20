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

const containerWidth = 1240;
const containerPadding = 20;

primaryTheme.typography.h1 = {
  fontSize: 28,
  fontWeight: 800
};

primaryTheme.typography.h2 = {
  fontSize: 18,
  fontWeight: 800,
  [primaryTheme.breakpoints.up("md")]: {
    fontSize: 24
  }
};

primaryTheme.typography.h3 = {
  fontSize: 18,
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
        boxShadow: `0 0 6px 0 rgb(0 0 0 / .9)`,
        [primaryTheme.breakpoints.up("sm")]: {
          borderRadius: 6,
          boxShadow: "none"
        },
        ":hover": {
          boxShadow: "none"
        }
      },
      sizeMedium: {
        fontSize: 14,
        height: 40,
        [primaryTheme.breakpoints.up("sm")]: {
          fontSize: 16,
          height: 42
        }
      },
      sizeLarge: {
        fontSize: 14,
        height: 40,
        [primaryTheme.breakpoints.up("sm")]: {
          fontSize: 16,
          height: 48
        }
      }
    },
    variants: [
      {
        props: {
          variant: "contained",
          color: "secondary"
        },
        style: {
          ":disabled": {
            opacity: 0.5,
            color: AppColors.Light,
            backgroundColor: AppColors.Secondary
          }
        }
      }
    ]
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
  MuiInputBase: {
    styleOverrides: {
      input: {
        height: 36,
        fontSize: 14,
        fontWeight: 500,
        boxSizing: "border-box",
        [primaryTheme.breakpoints.up("sm")]: {
          fontWeight: 800,
          height: 42,
          fontSize: 16
        },
        "::placeholder": {
          fontWeight: 500
        }
      },
      root: {
        "&.MuiFilledInput-root::after": {
          display: "none"
        },
        "&.MuiFilledInput-root::before": {
          display: "none"
        }
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      input: {
        padding: "8px 12px"
      },
      root: {
        borderRadius: 4,
        backgroundColor: AppColors.Dark3,
        ":hover": {
          backgroundColor: AppColors.Dark3
        },
        "&.Mui-focused": {
          backgroundColor: AppColors.Dark3
        }
      }
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: AppColors.Dark3
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        maxWidth: 540,
        width: "100%",
        padding: "40px 20px 30px",
        borderRadius: 10,
        backgroundColor: AppColors.Black2,
        margin: 10,
        maxHeight: "calc(100% - 40px)",

        [primaryTheme.breakpoints.up("md")]: {
          maxWidth: 714,
          padding: "32px 34px 30px"
        }
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: 500,
        fontSize: 16,
        marginBottom: 24
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 0,
        overflow: "visible"
      }
    }
  },
  MuiDialogContentText: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        paddingBlock: 16,
        paddingLeft: 0,
        paddingRight: 16,
        borderColor: AppColors.Black3
      }
    }
  }
};
