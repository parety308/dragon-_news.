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
export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        loader: () => fetch('/categories.json'),
        children: [
            {
                path: '/',
                loader: () => fetch('/news.json'),
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
        Component: NewsDetails
    }
])