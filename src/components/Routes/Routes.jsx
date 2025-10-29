import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../../Layout/HomeLayout";
import About from "../About/About";
import Career from "../Career/Career";
import CategoriesNews from "../CategoriesNews/CategoriesNews";
import NewsDetails from "../NewsDetails/NewsDetails";
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";
import AuthLayout from "../../Layout/AuthLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        loader: () => fetch('/categories.json'),
         hydrateFallbackElement: <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-3xl"></span></div>,
        children: [
            {
                path: '/',
                loader: () => fetch('/news.json'),
                 hydrateFallbackElement: <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-3xl"></span></div>,
                Component: HomeLayout
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/career',
                Component: Career
            },
            {
                path: 'categories/:id',
                loader: () => fetch('/news.json'),
                 hydrateFallbackElement: <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-3xl"></span></div>,
                Component: CategoriesNews

            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/logIn',
                Component: LogIn
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/newDetails/:id',
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-3xl"></span></div>,
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
    }
])