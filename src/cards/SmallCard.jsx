import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SmallCard = ({ queryParameter }) => {
  // const API_Key = import.meta.env.VITE_API_KEY;
  // const base_URL = `https://newsapi.org/v2/everything?q=${queryParameter}&apiKey=${API_Key}`;

  // const [article, setArticle] = useState(null);

  // const fetchNews = async () => {
  //   try {
  //     const response = await fetch(base_URL);
  //     const data = await response.json();
  //     if (data.articles && data.articles.length > 0) {
  //       // Filter articles to find one with all required data
  //       const validArticles = data.articles.filter(article => 
  //         article.urlToImage && article.title && article.description
  //       );
  //       if (validArticles.length > 0) {
  //         // Set a random valid article
  //         const randomIndex = Math.floor(Math.random() * validArticles.length);
  //         setArticle(validArticles[randomIndex]);
  //       } else {
  //         // If no valid articles found, try fetching again (or handle as needed)
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
  //       className="p-4 w-[230px] h-[300px] bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all"
  //       style={{ width: '230px', height: '300px' }}
  //     >
  //       {/* Skeleton placeholder */}
  //       <div className="h-32 bg-gray-300 rounded-t-2xl mb-4 animate-pulse"></div>
  //       <div className="flex flex-col justify-between h-[calc(420px-192px)]">
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
      style={{ width: '250px', height: '300px' }} // Fixed dimensions for the card
    >
      <img
        className="w-full h-32 object-cover hover:scale-105 transition-all"
        src="https://images.macrumors.com/t/qGHprTsNkfr5tu_zj5b7PRx8rt4=/2500x/article-new/2024/11/Pro-Display-XDR-2-Feature.jpg"
        alt="Blog Post"
      />
      <div className="p-4 flex flex-col justify-between h-[calc(420px-192px)]">
        <div>
          <p className="text-gray-500 text-sm">2024-11-19</p>
          <h3 className="text-lg font-semibold mt-2 line-clamp-2">
            Pro Display XDR 2 Expected to Feature Quantum-Dot Technology
          </h3>
        </div>
        <div className="flex justify-between items-center">
          <button
            // onClick={fetchNews}
            className="mb-14"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded-full hover:bg-gray-500 transition duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faRefresh} className="text-white" />
            </div>
          </button>
          <button
            onClick={() => window.open("https://www.macrumors.com/2024/11/19/pro-display-xdr-2-quantom-dot-rumor", '_blank')}
            className="mb-14 "
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded-full hover:bg-gray-500 transition duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
