import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: 'profile',
        element: <Profile/>,
    },
    {
        path: 'sign-up',
        element: <SignUp/>,
    },
    {
        path: 'sign-in',
        element: <SignIn/>,
    },
    {
        path: 'forgot-password',
        element: <ForgotPassword/>,
    },
    {
        path: 'offers',
        element: <Offers/>,
    }

])

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
