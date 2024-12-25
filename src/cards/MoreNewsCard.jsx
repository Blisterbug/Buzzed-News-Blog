import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MoreNewsCard = ({ queryParameter }) => {
  // const API_Key = import.meta.env.VITE_API_KEY;
  // const base_URL = `https://newsapi.org/v2/everything?q=${queryParameter}&apiKey=${API_Key}`;

  // const [article, setArticle] = useState(null);

  // const fetchNews = async () => {
  //   try {
  //     const response = await fetch(base_URL);
  //     const data = await response.json();
  //     if (data.articles && data.articles.length > 0) {
  //       const validArticles = data.articles.filter(
  //         (article) =>
  //           article.urlToImage &&
  //           article.title &&
  //           article.description &&
  //           article.publishedAt
  //       );
  //       if (validArticles.length > 0) {
  //         const randomIndex = Math.floor(Math.random() * validArticles.length);
  //         setArticle(validArticles[randomIndex]);
  //       } else {
  //         console.error("No valid articles with complete data found.");
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error fetching article:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, [queryParameter]);

  // if (!article) {
  //   return (
  //     <div
  //       className="bg-gray-100 rounded-lg shadow flex animate-pulse"
  //       style={{ width: "462px", height: "179px" }}
  //     >
  //       <div className="h-full w-1/3 bg-gray-300 rounded-l-lg"></div>
  //       <div className="flex-1 p-4">
  //         <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
  //         <div className="h-4 bg-gray-300 rounded mb-2"></div>
  //         <div className="h-4 bg-gray-300 rounded w-1/3"></div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div
      className="bg-gray-100 flex items-center border-none"
      style={{ width: "462px", height: "179px" }}
    >
      {/* Image on the left */}
      <img
        src="https://images.macrumors.com/t/gSfA9gdPJTtAYv_7hjK9YByevcM=/2500x/article-new/2024/07/Safari-Technology-Preview-Updated-Feature-1.jpg"
        alt="Image"
        className="h-full w-1/2 p-6 rounded-xl object-cover rounded-l-lg"
      />

      {/* Content on the right */}
      <div className="flex-1 px-4 py-2 flex flex-col justify-between">
        <p className="text-sm text-gray-500 uppercase font-medium">
        2024-11-23
        </p>
        <h3 className="text-md font-semibold mt-1 line-clamp-5 leading-tight">
        Apple Releases Safari Technology Preview 208 With Bug Fixes and Performance Improvements
        </h3>
      </div>

      {/* Action button */}
      <button
        onClick={() => window.open("https://www.macrumors.com/2024/11/21/apple-releases-safari-technology-preview-208", "_blank")}
        className="ml-2 mr-6"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded-full hover:bg-gray-500 transition duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faPlus} size="lg"/>
            </div>
      </button>
    </div>
  );
};

export default MoreNewsCard;
