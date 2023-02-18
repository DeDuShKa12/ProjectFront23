import React, {useMemo, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {FilmDetailsPage, FilmsPage, MainPage, SerialsPage} from "./pages";
import {createTheme, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                    main: "#d30303",
                },
                divider: "#d30303",
                background: {
                    default: "#d30303",
                    paper: "#d30303",
                },
                text: {
                    primary: "#d30303",
                    secondary: "#d30303",
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#d30303",
                },
                divider: "#d30303",
                background: {
                    default: "#d30303",
                    paper: "#d30303",
                },
                text: {
                    primary: "#d30303",
                    secondary: "#d30303",
                },
            }),
    },
});

const App = () => {
    const [mode, setMode] = useState("light");
    const darkMode = useSelector((state) => state.theme.darkMode);

    useMemo(() => {
        if (darkMode) {
            setMode("dark");
        } else {
            setMode("light");
        }
    }, [darkMode]);

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
      <ThemeProvider theme={theme}>
          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'home'}/>}/>
                  <Route path={'home'} element={<MainPage/>}/>
                  <Route path={'films'} element={<FilmsPage/>}/>
                  <Route path={'films/:id'} element={<FilmDetailsPage/>}/>
                  <Route path={'serials'} element={<SerialsPage/>}/>
              </Route>
          </Routes>
      </ThemeProvider>
  );
};

export {App};
