import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode,mode];
};


























































// import { createContext,useState , useMemo } from "react"
// import { createTheme } from "@mui/material"
// // import { useTheme } from "@emotion/react";

// export const tokens= (mode)=>({
//     ...(mode === "dark")? {
//         grey: {
//             100: "#e0e0e0",
//             200: "#c2c2c2",
//             300: "#a3a3a3",
//             400: "#858585",
//             500: "#666666",
//             600: "#525252",
//             700: "#3d3d3d",
//             800: "#292929",
//             900: "#141414",
//           },
//           primary: {
//             100: "#d0d1d5",
//             200: "#a1a4ab",
//             300: "#727681",
//             400: "#1F2A40",
//             500: "#141b2d",
//             600: "#101624",
//             700: "#0c101b",
//             800: "#080b12",
//             900: "#040509",
//           },
//           greenAccent: {
//             100: "#dbf5ee",
//             200: "#b7ebde",
//             300: "#94e2cd",
//             400: "#70d8bd",
//             500: "#4cceac",
//             600: "#3da58a",
//             700: "#2e7c67",
//             800: "#1e5245",
//             900: "#0f2922",
//           },
//           redAccent: {
//             100: "#f8dcdb",
//             200: "#f1b9b7",
//             300: "#e99592",
//             400: "#e2726e",
//             500: "#db4f4a",
//             600: "#af3f3b",
//             700: "#832f2c",
//             800: "#58201e",
//             900: "#2c100f",
//           },
//           blueAccent: {
//             100: "#e1e2fe",
//             200: "#c3c6fd",
//             300: "#a4a9fc",
//             400: "#868dfb",
//             500: "#6870fa",
//             600: "#535ac8",
//             700: "#3e4396",
//             800: "#2a2d64",
//             900: "#151632",
//           },
//     }:{
//         grey: {
//             900: "#e0e0e0",
//             800: "#c2c2c2",
//             700: "#a3a3a3",
//             600: "#858585",
//             500: "#666666",
//             400: "#525252",
//             300: "#3d3d3d",
//             200: "#292929",
//             100: "#141414",
//           },
//           primary: {
//             900: "#d0d1d5",
//             800: "#a1a4ab",
//             700: "#727681",
//             600: "#1F2A40",
//             500: "#141b2d",
//             400: "#101624",
//             300: "#0c101b",
//             200: "#080b12",
//             100: "#040509",
//           },
//           greenAccent: {
//             900: "#dbf5ee",
//             800: "#b7ebde",
//             700: "#94e2cd",
//             600: "#70d8bd",
//             500: "#4cceac",
//             400: "#3da58a",
//             300: "#2e7c67",
//             200: "#1e5245",
//             100: "#0f2922",
//           },
//           redAccent: {
//             900: "#f8dcdb",
//             800: "#f1b9b7",
//             700: "#e99592",
//             600: "#e2726e",
//             500: "#db4f4a",
//             400: "#af3f3b",
//             300: "#832f2c",
//             200: "#58201e",
//             100: "#2c100f",
//           },
//           blueAccent: {
//             900: "#e1e2fe",
//             800: "#c3c6fd",
//             700: "#a4a9fc",
//             600: "#868dfb",
//             500: "#6870fa",
//             400: "#535ac8",
//             300: "#3e4396",
//             200: "#2a2d64",
//             100: "#151632",
//           },
//     }
// });

// export const themeSettings = (mode)=>{
//     const colors = tokens(mode);
//     return{ 
//         palette:{
//             mode:mode,
//             ...(mode === "dark") ? {
//                 primary:{
//                     main:colors.primary[500]
//                 },
//                 secondary:{
//                     main:colors.greenAccent[500]
//                 },
//                 neutral:{
//                     main:colors.grey[700],
//                     light:colors.grey[500],
//                     dark:colors.grey[700]
//                 },
//                 background:{
//                     default:colors.primary[600]

//                 }
//             }:{
//                 primary: {
//                     main: colors.primary[100],
//                   },
//                   secondary: {
//                     main: colors.greenAccent[500],
//                   },
//                   neutral: {
//                     dark: colors.grey[700],
//                     main: colors.grey[500],
//                     light: colors.grey[100],
//                   },
//                   background: {
//                     default: "#fcfcfc",
//                   },
//                 },
//           },
//           typography: {
//             fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//             fontSize: 12,
//             h1: {
//               fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//               fontSize: 40,
//             },
//             h2: {
//               fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//               fontSize: 32,
//             },
//             h3: {
//               fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//               fontSize: 24,
//             },
//             h4: {
//               fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//               fontSize: 20,
//             },
//             h5: {
//               fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//               fontSize: 16,
//             },
//             h6: {
//               fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//               fontSize: 14,
            
//             }

//         }
//     }

// }

// export const ColorModeContext = createContext({
//     toggleColorMode:()=>{},
// });

// export const useMode =()=>{

//     const [mode ,setMode] = useState("dark");
//     const colorMode = useMemo(()=>({
//         toggleColorMode:()=>setMode((prev)=>prev==="light" ? "dark":"light")
//     }),[]);

//     const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);

//     return [theme , colorMode];

// };


// import { createContext, useState, useMemo } from "react";
// import { createTheme } from "@mui/material";


// const token = (mode) => ({
//   ...(mode === "dark"
//     ? {
//         "cornflower-blue": {
//           DEFAULT: "#6366F1",
//           50: "#FFFFFF",
//           100: "#F9F9FE",
//           200: "#D3D4FB",
//           300: "#AEAFF8",
//           400: "#888BF4",
//           500: "#6366F1",
//           600: "#3034EC",
//           700: "#1317D1",
//           800: "#0E119E",
//           900: "#0A0C6A",
//           950: "#070950",
//         },
//         blue: {
//           DEFAULT: "#6366F1",
//           50: "#FFFFFF",
//           100: "#F9F9FE",
//           200: "#D3D4FB",
//           300: "#AEAFF8",
//           400: "#888BF4",
//           500: "#6366F1",
//           600: "#0C0E83",
//           700: "#1317D1",
//           800: "#0E119E",
//           900: "#0A0C6A",
//           950: "#070950",
//         },
//         red: {
//           DEFAULT: "#6366F1",
//           50: "#FFFFFF",
//           100: "#F9F9FE",
//           200: "#D3D4FB",
//           300: "#AEAFF8",
//           400: "#888BF4",
//           500: "#6366F1",
//           600: "#0C0E83",
//           700: "#1317D1",
//           800: "#0E119E",
//           900: "#0A0C6A",
//           950: "#070950",
//         },
//         "great-blue": {
//           DEFAULT: "#2A669F",
//           50: "#E4F7F8",
//           100: "#CCEEF2",
//           200: "#9CD7E5",
//           300: "#6CB9D8",
//           400: "#3B94CB",
//           500: "#2A669F",
//           600: "#234B83",
//           700: "#1B3366",
//           800: "#14204A",
//           900: "#0C102E",
//         },
//         lime: {
//           DEFAULT: "#C1EF00",
//           50: "#EEFFA8",
//           100: "#EAFF93",
//           200: "#E2FF6A",
//           300: "#DBFF42",
//           400: "#D3FF19",
//           500: "#C1EF00",
//           600: "#94B700",
//           700: "#667F00",
//           800: "#394700",
//           900: "#0C0F00",
//         },
//         astronaut: {
//           DEFAULT: "#274C77",
//           50: "#BED2EA",
//           100: "#AEC8E5",
//           200: "#8FB3DB",
//           300: "#719DD1",
//           400: "#5288C7",
//           500: "#3B74B5",
//           600: "#316096",
//           700: "#274C77",
//           800: "#19314D",
//           900: "#0B1623",
//         },
//       }
//     : {
//         cornflowerBlue: {
//             DEFAULT: "#6366F1",
//             50:  "#070950",
//             100: "#0A0C6A",
//             200: "#0E119E",
//             300: "#1317D1",
//             400: "#3034EC",
//             500: "#6366F1",
//             600:"#FFFFFF",
//             700: "#888BF4",
//             800: "#AEAFF8",
//             900: "#D3D4FB",
//             950: "#F9F9FE",
//           },
//           blue: {
//             DEFAULT: "#6366F1",
//             50: "#FFFFFF",
//             100: "#F9F9FE",
//             200: "#D3D4FB",
//             300: "#AEAFF8",
//             400: "#888BF4",
//             500: "#6366F1",
//             600: "#0C0E83",
//             700: "#1317D1",
//             800: "#0E119E",
//             900: "#0A0C6A",
//             950: "#070950",
//           },
//           red: {
//             DEFAULT: "#6366F1",
//             50: "#FFFFFF",
//             100: "#F9F9FE",
//             200: "#D3D4FB",
//             300: "#AEAFF8",
//             400: "#888BF4",
//             500: "#6366F1",
//             600: "#0C0E83",
//             700: "#1317D1",
//             800: "#0E119E",
//             900: "#0A0C6A",
//             950: "#070950",
//           },
//           greatBlue: {
//             DEFAULT: "#2A669F",
//             50: "#E4F7F8",
//             100: "#CCEEF2",
//             200: "#9CD7E5",
//             300: "#6CB9D8",
//             400: "#3B94CB",
//             500: "#2A669F",
//             600: "#234B83",
//             700: "#1B3366",
//             800: "#14204A",
//             900: "#0C102E",
//           },
//           lime: {
//             DEFAULT: "#C1EF00",
//             50: "#0C0F00",
//             100:"#394700",
//             200:"#667F00",
//             300:"#94B700",
//             400:"#C1EF00",
//             500:"#EEFFA8",
//             600:"#D3FF19",
//             700:"#DBFF42",
//             800:"#E2FF6A",
//             900:"#EAFF93",
//           },
//           astronaut: {
//             DEFAULT: "#274C77",
//             50:  "#0B1623",
//             100: "#19314D",
//             200: "#274C77",
//             300: "#316096",
//             400: "#3B74B5",
//             500:"#BED2EA",
//             600: "#5288C7",
//             700: "#719DD1",
//             800: "#8FB3DB",
//             900: "#AEC8E5",
//           },
//     }),
// });


// export const colorShadeHolder=(mode)=>{
//     const colors = token(mode)
// };



// export const themeSettings = (mode)=>{
//     const colors = token(mode)
//     return{
//         mode:mode,
//         // ...(mode === "light" ? "dark":"light"),
//         palette:{
//             red:{
//                 main:colors.red[300]
//             },
//             lime:{
//                 main:colors.lime[300]
//             },
//             blue:{
//                 main:colors.blue[300]
//             },
//             cornflowerBlue:{
//                 main:colors.cornflowerBlue[300]
//             },
//             greatBlue:{
//                 main:colors.greatBlue[600]
    
//             },
//             astronaut:{
//                 main:colors.astronaut[500]
//             },
//             background:{
//                 background:colors.blue[500]
//             },
//         }
        
//     }
// }

// export const createColorContext = createContext({
//     toggleUserMode :()=>{}
// })

// export const useMode = ()=>{
//     const [mode , setMemo]= useState("dark")
//     const colorMode = useMemo(()=>({
//         toggleUserMode:()=>setMemo((prev)=>prev === "light"? "dark":"light")

//     }),[]);

//     const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])

//     return [colorMode, theme]
// };


