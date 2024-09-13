//Splitting router into separate file


import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage></LoginPage>,
    },
    {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
    },
]);
export default router;

//   <Route path="/home" element={<HomePage />}></Route>
//   <Route path="/signup" element={<SignUpPage />}></Route>
//   <Route path="/forgot" element={<ForgotPasswordPage />}></Route>
//   <Route path="/admin" element={<AdminPage />}></Route>