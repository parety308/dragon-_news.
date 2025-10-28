import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { NavLink, useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const allNews = useLoaderData();
    const { id } = useParams();
    const news = allNews.find(n => n.id === id);
    const { title, image_url, details,category_id } = news;
    return (
        <div>
            <h1 className="text-2xl font-bold my-2">{title}</h1>
            <img className='rounded-xl mb-2' src={image_url} alt="" />
            <p>{details}</p>
            <NavLink to={`/categories/${category_id}`} className={'btn bg-secondary'}><FaArrowLeftLong />All news in this category</NavLink>
        </div>
    );
};

export default NewsDetails;