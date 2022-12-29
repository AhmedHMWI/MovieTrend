// This project was done by Ahmed Hamwi.
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import MovieDetails from './Components/MovieDetails/MovieDetails';

const router = createBrowserRouter ([
  {path: '' , element: <Main/>, children:[
    {path:'', element: <Home/> },
    {path:'home', element: <Home/> },
    {path:'movies', element: <Movies /> },
    {path:'tv', element: <Tv /> },
    {path:'moviedetails', element: <MovieDetails/>, children:[
      {path:':media', children:[
        {path: ':id'}
      ]}
    ] },
    {path:'*', element: <Notfound/> },
  ] }
])

const App = () => {
  return <>
    <RouterProvider router={router} />
  </>
  ;
}
export default App;
