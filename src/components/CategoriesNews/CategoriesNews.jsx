import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsIndividual from '../NewsIndividual/NewsIndividual';

const CategoriesNews = () => {
    const { id } = useParams();
    const news_Id = parseFloat(id);
    const allNews = useLoaderData();
    let news;
    if(news_Id===0){
      news=allNews;
    }
    else{
        news=allNews.filter(n=>n.category_id===news_Id);
    }

    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                news.map(newsInvidual => <NewsIndividual key={newsInvidual.id} newsInvidual={newsInvidual}/>)
            }

        </div>
    );
};

export default CategoriesNews;