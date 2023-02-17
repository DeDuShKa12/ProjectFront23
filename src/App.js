import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {FilmsPage, MainPage, SerialsPage} from "./pages";

const App = () => {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'}/>}/>
              <Route path={'home'} element={<MainPage/>}/>
              <Route path={'films'} element={<FilmsPage/>}/>
              <Route path={'serials'} element={<SerialsPage/>}/>
          </Route>
      </Routes>
  );
};

export {App};
