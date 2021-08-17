import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        green: "#00a900",
        yellow: "#d0cc62",
        blue: "#0100a8",
        oceanBlue: '#5ffce9',
        black: "#121212",
        gray: "#a8a8a8",
        darkGray: "#515459",
        white: "white",
    },
    fonts: ["Perfect DOS VGA 437", "Roboto"],
    fontSizes: {
        small: "1.4rem",
        medium: "2.4rem",
        large: "3rem"
    },
    fontWeight: {
        normal: 100,
        bold: 900,
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;