/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    variants: {
        display: ["group-hover"],
    },
    theme: {
        fluidTypography: {},
        screens: {
            sm: "575px",
            md: "768px",
            lg: "1025px",
            xl: "1202px",
        },
        fontFamily: {
            display: ['"GalderGlynn"', "sans-serif"],
            subheading: ['"Antonio"', "sans-serif"],
            body: ['"Mono"', "sans-serif"],
        },
        container: {
            center: true,
            padding: "1rem",
        },
        colors: {
            red: {
                100: "#ca1235",
                200: "#8d1725",
                300: "#5e1c15",
                400: "#2f2005",
            },
            white: "#f7f7f7",
            black: "#050505",
        },
        extend: {
            textColor: {
                gray: "#f7f7f740",
            },
        },
    },
    plugins: [require("tailwind-fluid-typography")],
};
