import React, { useState } from "react";
import './App.css';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import SignUpPage from "./pages/SignUpPage";
import Unauthorized from "./pages/Unauthorized";
import Profile from "./pages/Profile";


function App() {
  return (

    <div className="App ">
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage></LoginPage>} path='/'></Route>
          <Route element={<SignUpPage></SignUpPage>}  path='/signup'></Route>
          <Route element={<Unauthorized></Unauthorized>}  path='/unauthorized'></Route>
          <Route element={<ProtectedRoutes role='user' />}>
            <Route element={<HomePage />}  path='/home'></Route>
            <Route element={<Profile />}  path='/profile'></Route>
          </Route>
          <Route element={<ProtectedRoutes role='admin' />}>
            <Route element={<AdminPage />}  path='/admin'></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
