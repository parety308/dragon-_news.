import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import HeadLine from '../Headline/HeadLine';
import Categories from '../Categories/Categories';
import RightAside from '../RightAside/RightAside';
const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div>
            <Header></Header>
            <div className="w-11/12 mx-auto">
                <HeadLine></HeadLine>
                <NavBar></NavBar>
                {
                    isLoading ? <div className="flex justify-center items-center h-[70vh] mr-5">
                        <span className="loading loading-bars loading-3xl"></span>
                        <span className="loading loading-bars loading-3xl"></span>
                        <span className="loading loading-bars loading-3xl"></span>
                        <span className="loading loading-bars loading-3xl"></span>
                        <span className="loading loading-bars loading-3xl"></span>

                    </div> :
                        <div className="grid grid-cols-12 gap-2">
                            <aside className="col-span-3 top-0 sticky max-h-fit ">
                                <Categories></Categories>
                            </aside>
                            <main className="col-span-6"><Outlet /></main>
                            <aside className="col-span-3 top-0 sticky max-h-fit"><RightAside></RightAside></aside>
                        </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;