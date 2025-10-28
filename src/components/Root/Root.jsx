import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import HeadLine from '../Headline/HeadLine';
import Categories from '../Categories/Categories';
import LogIn from '../LogIn/LogIn';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-11/12 mx-auto">
                <HeadLine></HeadLine>
                <NavBar></NavBar>
                <div className="grid grid-cols-12 gap-2">
                    <aside className="col-span-3 top-0 sticky h-fit">
                        <Categories></Categories>
                        </aside>
                    <main className="col-span-6"><Outlet /></main>
                    <aside className="col-span-3 top-0 sticky h-fit "><LogIn></LogIn></aside>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;