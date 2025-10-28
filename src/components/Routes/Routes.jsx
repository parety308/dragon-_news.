import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../../Layout/HomeLayout";
import About from "../About/About";
import LogIn from "../LogIn/LogIn";
import Career from "../Career/Career";
import Categories from "../Categories/Categories";
import CategoriesNews from "../CategoriesNews/CategoriesNews";
import NewsDetails from "../NewsDetails/NewsDetails";
import Sign_In from "../Sign_In/Sign_In";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        loader: () => fetch('/categories.json'),
        children: [
            {
                path: '/',
                Component: HomeLayout
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/login',
                Component: LogIn
            },
            {
                path: '/career',
                Component: Career
            },
            {
                path: 'categories/:id',
                loader: () => fetch('/news.json'),
                Component: CategoriesNews

            },
            {
                path: '/newDetails/:id',
                loader: () => fetch('/news.json'),
                Component: NewsDetails
            }, 
            {
             path:'/signIn',
             Component:Sign_In
            }

        ]
    }
])