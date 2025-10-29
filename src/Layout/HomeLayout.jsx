import { useLoaderData } from "react-router";
import NewsIndividual from "../components/NewsIndividual/NewsIndividual";

const HomeLayout = () => {
    const news=useLoaderData();
    return (        
            <main className="col-span-6">
                {
                    news.map(newsInvidual => 
                    <NewsIndividual key={newsInvidual.id} newsInvidual={newsInvidual}/>
                )
                }
            </main>
    );
};

export default HomeLayout;