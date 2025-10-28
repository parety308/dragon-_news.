import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';
const NewsIndividual = ({ newsInvidual }) => {
    const { title, image_url, author, details, total_view, rating, id } = newsInvidual;
    return (
        <div className='shadow-sm p-4 rounded-xl bg-base-100'>
            <div className='flex justify-between items-center  text-accent bg-base-200 p-3 rounded-xl'>
                <div className='flex items-center gap-4 text-accent bg-base-200 p-3 rounded-xl'>
                    <img className='w-10 rounded-3xl' src={author.img} alt="" />
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 text-3xl'>
                    <div><CiBookmark /></div>
                    <CiShare2 />
                </div>
            </div>
            <h1 className="text-2xl font-bold my-2">{title}</h1>
            <img className='rounded-xl mb-2' src={image_url} alt="" />
            <p>{details}</p>
            <NavLink to={`/newDetails/${id}`} className='text-[#FF8C47]'>Read More</NavLink>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <div className='text-yellow-400 flex text-lg items-center'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p>{rating.number}</p>
                </div>
                <p className='flex gap-1 items-center text-lg'><IoEyeOutline />{total_view}</p>
            </div>
        </div>
    );
};

export default NewsIndividual;