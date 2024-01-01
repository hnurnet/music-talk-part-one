import React from 'react';
import {
  createBrowserRouter,createRoutesFromElements,
  Route,RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import RouteLayout from "./layouts/RouteLayout";
import Error from './pages/Error';
import Profile from './pages/Profile';


const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<RouteLayout />}>
      <Route path='/' element={<App />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='*' element={<Error />}/>
    </Route>
  )
  ))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


