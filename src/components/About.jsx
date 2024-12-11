import React from 'react';
import MobileAbout from '../mobileComponents/MobileAbout';

const About = () => {
  return (
    <>
    <div className='hidden sm:block'>
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-32 px-6 w-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to <span className="font-semibold text-blue-600">Buzzed</span>, your trusted source for the latest and most reliable news from around the globe. Our mission is to deliver up-to-the-minute news coverage that helps you stay informed and make sense of the ever-changing world.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          With a team of experienced journalists and editors, we strive to maintain the highest standards of accuracy, objectivity, and engagement. Our stories cover everything from current events and politics to technology and entertainment.
        </p>
        <p className="text-lg text-gray-600">
          At Buzzed, we believe that informed citizens are the backbone of a strong community, and we aim to contribute to a better-informed society.
        </p>
        <div className="mt-6">
          <p className="font-semibold text-gray-800">Connect with us:</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/Rubanraj02" className="text-blue-600 hover:underline" target='_blank'>Github</a>
            <a href="https://x.com/ruban_devil" className="text-blue-600 hover:underline" target='_blank'>Twitter</a>
            <a href="https://www.instagram.com/blisterbug1/" className="text-blue-600 hover:underline" target='_blank'>Instagram</a>
            <a href="https://www.linkedin.com/in/rubanraj02/" className="text-blue-600 hover:underline" target='_blank'>LinkedIn</a>
          </div>
        </div>
        <div className="mt-6 border-t pt-2">
          <p className="text-lg text-gray-600">
            <span className='text-2xl font-bold'>Note from Developer: </span>This project supports dynamic fetching using any news API . Since the project is at developing stage i personally use News API for development purpose . Since News API doesn't support CORS enabled on all origins . "I was cornered to Hard Code the News Cards values". So if you need to fetch data dynamically from API . Clone our Github Repository, Run the project locally and in buzzed-news-blog/src/cards/ExampleCard . Please Refer the card for dynamic fetching . <span className='text-xl font-semibold'>Thank you for your Understanding</span>
          </p>
        </div>
      </div>
      </div>
      </div>
      <div className='block sm:hidden'>
          <MobileAbout/>
      </div>
    </>
  );
};

export default About;
