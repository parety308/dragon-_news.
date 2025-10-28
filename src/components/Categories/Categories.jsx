import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const Categories = () => {
    const categories=useLoaderData();
    return (
        <div className=''>
            <h1 className="flex justify-center text-xl font-semibold mb-3"> All Categories</h1>
            <div className='grid grid-cols-1  gap-2 w-8/10'>
                {
                    categories.map(cat => <NavLink to={`/categories/${cat.id}`} key={cat.id} className={'bg-base-100 border-gray-100 btn text-xl px-1 py-2 hover:bg-base-300'} >{cat.name}</NavLink>)
                }
            </div></div>
    );
};

export default Categories;