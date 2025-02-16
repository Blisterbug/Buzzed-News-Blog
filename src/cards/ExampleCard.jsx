import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ExampleCard = ({ queryParameter }) => {
  // const API_Key = "70889e2fa744b8b945e4bc435dc612fd"
  // const base_URL = `https://newsapi.org/v2/everything?q=${queryParameter}&apiKey=${API_Key}`;
  

  // const [article, setArticle] = useState(null);

  // const fetchNews = async () => {
  //   try {
  //     const response = await fetch(base_URL);
  //     const data = await response.json();
  //     console.log(data);
  //     if (data.articles && data.articles.length > 0) {
  //       // Filter out articles with missing essential data
  //       const validArticles = data.articles.filter(article => 
  //         article.urlToImage && article.title && article.description
  //       );
  //       if (validArticles.length > 0) {
  //         // Select a random valid article
  //         const randomIndex = Math.floor(Math.random() * validArticles.length);
  //         setArticle(validArticles[randomIndex]);
  //       } else {
  //         // Log if no valid articles were found
  //         console.error('No articles with complete data found.');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error fetching article:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, [queryParameter]);

  // if (!article) {
  //   return (
  //     <div
  //       className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all"
  //       style={{ width: '320px', height: '0px' }} // Fixed dimensions for the card
  //     >
  //       {/* Skeleton loader */}
  //       <div className="h-48 bg-gray-300 rounded-t-2xl mb-4 animate-pulse"></div>
  //       <div className="p-4 flex flex-col justify-between h-[calc(420px-192px)]">
  //         <div>
  //           <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
  //           <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
  //         </div>
          
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div
      className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all"
      style={{ width: '360px', height: '390px' }} // Fixed dimensions for the card
    >
      <img
        className="w-full h-48 object-cover hover:scale-105 transition-all"
        src={article.urlToImage || `https://via.placeholder.com/320x180`}
        alt="Blog Post"
      />
      <div className="p-4 flex flex-col justify-between h-[calc(420px-192px)]">
        <div>
          <p className="text-gray-500 text-sm">{new Date(article.publishedAt).toLocaleDateString()}</p>
          <h3 className="text-lg font-semibold mt-2 line-clamp-2">
            {article.title.length > 60 ? article.title.slice(0, 60) + '...' : article.title}
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <button
            // onClick={fetchNews}
            className="px-4 py-2 mb-9 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faRefresh} className="text-white" />
          </button>
          <button
            onClick={() => window.open(article.url, '_blank')}
            className="px-4 py-2 mb-9 bg-green-500 text-white rounded-3xl text-sm hover:bg-green-700 transition"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExampleCard;
