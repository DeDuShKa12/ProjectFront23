import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {FilmDetailsPage, FilmsPage, MainPage} from "./pages";
import {SearchPage} from "./pages/SearchPage/SearchPage";


const App = () => {

  return (

          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'home'}/>}/>
                  <Route path={'home'} element={<MainPage/>}/>
                  <Route path={'films'} element={<FilmsPage/>}/>
                  <Route path={'films/:id'} element={<FilmDetailsPage/>}/>
                  <Route path={'search'} element={<SearchPage/>}/>
                  <Route path={'search/:id'} element={<FilmDetailsPage/>}/>
              </Route>
          </Routes>
  );
};

export {App};
