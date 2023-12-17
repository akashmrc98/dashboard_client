import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { colorConfig } from "./colors";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: colorConfig.secondary,
          color: colorConfig.font,
          "& .MuiTablePagination-root": {
            color: colorConfig.font,
          },
          "& .PrivateSwitchBase-input css-1m9pwf3": {
            outline: "2px solid #ffffff",
            backgroundColor: colorConfig.secondary,
          },
          "& .MuiDataGrid-cellCheckbox.MuiDataGrid-cell--withRenderer.MuiDataGrid-cell.MuiDataGrid-cell--textCenter.MuiDataGrid-withBorderColor":
            {
              backgroundColor: colorConfig.secondary,
            },
        },
      },
    },
  },
  palette: {
    primary: {
      main: colorConfig.primary,
    },
    secondary: {
      main: colorConfig.secondary,
    },
  },
  typography: {
    button: {
      fontFamily: "'Vina Sans', sans-serif",
    },
    caption: {
      fontFamily: "'Vina Sans', sans-serif",
    },
    body1: {
      fontFamily: "'Josefin Sans', sans-serif",
    },
    body2: {
      fontFamily: "'Josefin Sans', sans-serif",
    },
    h1: {
      fontFamily: "'Vina Sans', sans-serif",
    },
    h2: {
      fontFamily: "'Vina Sans', sans-serif",
    },
    h3: {
      fontFamily: "'Vina Sans', sans-serif",
    },
    h4: {
      fontFamily: "'Vina Sans', sans-serif",
    },
    h5: {
      fontFamily: "'Vina Sans', sans-serif",
    },
    h6: {
      fontFamily: "'Vina Sans', sans-serif",
    },
  },
});

export default theme;
