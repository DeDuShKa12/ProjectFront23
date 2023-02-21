import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {FilmDetailsPage, FilmsPage} from "./pages";
import {SearchPage} from "./pages";
import {FilmGenresPage} from "./pages";


const App = () => {

  return (

          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'films'}/>}/>
                  <Route path={'films'} element={<FilmsPage/>}/>
                  <Route path={'films/:id'} element={<FilmDetailsPage/>}/>
                  <Route path={'genre/:id'} element={<FilmGenresPage />} />
                  <Route path={'search'} element={<SearchPage/>}/>
                  <Route path={'search/:id'} element={<FilmDetailsPage/>}/>
                  <Route path={'genre/:id/:id'} element={<FilmDetailsPage/>}/>
              </Route>
          </Routes>
  );
};

export {App};
