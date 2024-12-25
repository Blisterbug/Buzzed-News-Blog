import React, { useState, useEffect } from 'react';

const CenterCard = ({ queryParameter }) => {
  // const API_Key = import.meta.env.VITE_API_KEY;
  // const base_URL = `https://newsapi.org/v2/everything?q=${queryParameter}&apiKey=${API_Key}`;
  // const [article, setArticle] = useState(null);

  // const fetchNews = async () => {
  //   try {
  //     const response = await fetch(base_URL);
  //     const data = await response.json();
  //     if (data.articles && data.articles.length > 0) {
  //       // Filter articles to include only those with complete data
  //       const validArticles = data.articles.filter(article => 
  //         article.urlToImage && article.title && article.description
  //       );
  //       if (validArticles.length > 0) {
  //         // Select a random valid article
  //         const randomIndex = Math.floor(Math.random() * validArticles.length);
  //         setArticle(validArticles[randomIndex]);
  //       } else {
  //         // Log a message if no valid articles are found
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
  //       style={{ width: '650px', height: '625px' }} // Fixed dimensions for the card
  //     >
  //       {/* Skeleton loader */}
  //       <div className="h-80 bg-gray-300 rounded-t-2xl mb-4 animate-pulse"></div>
  //       <div className="p-4 flex flex-col justify-between h-[calc(625px-192px)]">
  //         <div>
  //           <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
  //           <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
  //           <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
  //         </div>
  //         <div className="flex justify-between items-center">
  //           <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
  //           <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div
      className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all"
      style={{ width: '650px', height: '625px' }} // Fixed dimensions for the card
    >
      <img
        className="w-full h-80 object-cover hover:scale-105 transition-all"
        src="https://gizmodo.com/app/uploads/2024/11/samsung-frame-tv.jpg"
        alt="Blog Post"
      />
      <div className="p-4 flex flex-col justify-between h-[calc(625px-192px)]">
        <div>
          <p className="text-gray-500 text-sm">2024-11-29</p>
          <h3 className="text-xl font-bold mt-2 line-clamp-2">
          Samsung’s Gone Wild: $1,300 Off on Frame TVs, Now at an All-Time Low Price
          </h3>
          <p className="text-gray-600 mt-3 line-clamp-3">If you're looking for a TV that combines advanced technology with art, Samsung's Frame TV is the perfect choice.</p>
          <div className="flex justify-between items-center">
          <button
            // onClick={fetchNews}
            className="px-4 py-3 mt-16 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-700 hover:text-white transition"
          >
            Refresh

          </button>
          <button
            onClick={() => window.open("https://gizmodo.com/samsungs-gone-wild-1300-off-on-frame-tvs-now-at-an-all-time-low-price-2000531725", '_blank')}
            className="px-4 py-3 mt-16 bg-green-500 text-white rounded-lg text-sm hover:bg-green-700 hover:text-white transition "
          >
            Read Story
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterCard;
