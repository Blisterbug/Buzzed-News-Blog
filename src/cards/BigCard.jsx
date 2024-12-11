import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BigCard = ({ queryParameter }) => {
  const API_Key = import.meta.env.VITE_API_KEY;
  const base_URL = `https://newsapi.org/v2/everything?q=${queryParameter}&apiKey=${API_Key}`;

  const [article, setArticle] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await fetch(base_URL);
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        // Filter articles to only include those with all required data
        const validArticles = data.articles.filter(article => 
          article.urlToImage && article.title && article.description
        );
        if (validArticles.length > 0) {
          // Select a random valid article
          const randomIndex = Math.floor(Math.random() * validArticles.length);
          setArticle(validArticles[randomIndex]);
        } else {
          // Log if no valid articles are found
          console.error('No articles with complete data found.');
        }
      }
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [queryParameter]);

  if (!article) {
    return (
      <div
        className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all"
        style={{ width: '580px', height: '400px' }} // Fixed dimensions for the card
      >
        {/* Skeleton loader */}
        <div className="h-48 bg-gray-300 rounded-t-2xl mb-4 animate-pulse"></div>
        <div className="p-4 flex flex-col justify-between h-[calc(400px-192px)]">
          <div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all"
      style={{ width: '590px', height: '400px' }} // Fixed dimensions for the card
    >
      <img
        className="w-full h-48 object-cover hover:scale-105 transition-all"
        src="https://cdn.vox-cdn.com/thumbor/LkXbMw6BwFq1t-UwdzV1c5-RJBQ=/0x0:682x366/1200x628/filters:focal(341x183:342x184)/cdn.vox-cdn.com/uploads/chorus_asset/file/24035514/Fcyv3EnWQAEQFMm.png"
        alt="Blog Post"
      />
      <div className="p-4 flex flex-col justify-between h-[calc(420px-192px)]">
        <div>
          <p className="text-gray-500 text-sm">2024-11-21</p>
          <h3 className="text-lg font-semibold mt-2 line-clamp-1">
            FCC passes auto safety spectrum rules
          </h3>
          <p className="text-gray-600 mt-3 line-clamp-2">FCC has finalized Cellular Vehicle-to-Everything (C-V2X) technology spectrum rules by evolving the 5.9GHz band for Intelligent Transportation Systems</p>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={fetchNews}
            className="px-4 py-2 mb-6 bg-blue-500 text-white rounded-3xl text-sm hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faRefresh} className="text-white" />
          </button>
          <button
            onClick={() => window.open("https://www.theverge.com/2024/11/21/24302733/fcc-cv2x-cellular-vehicle-everything-spectrum-rules-final", '_blank')}
            className="px-4 py-2 mb-6 bg-green-500 text-white rounded-3xl text-sm hover:bg-green-700 transition"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
