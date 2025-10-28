import React from 'react';
import Marquee from 'react-fast-marquee';

const HeadLine = () => {
    return (
        <div className='bg-base-200 my-5 flex items-center p-3 gap-4 text-xl'>
            <button className='bg-secondary text-white px-4 py-2  rounded-md '>HeadLine</button>
            <Marquee pauseOnHover={true} speed={50}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quos hic ullam dignissimos quasi sunt?</p>
            </Marquee>
        </div>
    );
};

export default HeadLine;