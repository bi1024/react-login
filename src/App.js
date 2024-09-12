import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Appheader></Appheader> */}
        <Routes>
          <Route path="/" element={
            <>
              <LoginPage />
            </>
          }></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/forgot" element={<ForgotPasswordPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
