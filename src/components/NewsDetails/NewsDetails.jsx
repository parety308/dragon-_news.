import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { NavLink, useLoaderData, useParams } from 'react-router';
import RightAside from '../RightAside/RightAside';

const NewsDetails = () => {
    const allNews = useLoaderData();
    const { id } = useParams();
    const news = allNews.find(n => n.id === id);
    const { title, image_url, details, category_id } = news;
    return (
        <div className='w-11/12 mx-auto grid grid-cols-12 my-5'>
            <div className='col-span-9'>
                <h1 className="text-2xl font-bold my-2">{title}</h1>
                <img className='rounded-xl mb-2' src={image_url} alt="" />
                <p>{details}</p>
                <NavLink to={`/categories/${category_id}`} className={'btn bg-secondary'}><FaArrowLeftLong />All news in this category</NavLink>
            </div>
            <div className='col-span-3'>
                <RightAside></RightAside>
            </div>
        </div>
    );
};

export default NewsDetails;