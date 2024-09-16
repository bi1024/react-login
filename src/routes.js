//Splitting router into separate file
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';



const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage></LoginPage>,
    },
    {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
    },
    {
        path: "/home",
        element: <HomePage></HomePage>,
    },
    {
        path: "/admin",
        element: <AdminPage></AdminPage>,
    },
]);
export default router;

//   <Route path="/home" element={<HomePage />}></Route>
//   <Route path="/signup" element={<SignUpPage />}></Route>
//   <Route path="/forgot" element={<ForgotPasswordPage />}></Route>
//   <Route path="/admin" element={<AdminPage />}></Route>