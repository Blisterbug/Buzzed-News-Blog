import React from 'react'

const MobileAbout = () => {
  return (
    <div className='grid justify-center items-center w-full mt-20 bg-gray-100 text-black rounded-xl '>
      <div className='' style={{ width: '360px', height: '1250px' }}>
        <h1 className='grid text-center p-4 text-2xl font-semibold'>About Us</h1>
        <p className="p-4 text-lg">
          Welcome to <span className="font-semibold text-blue-600">Buzzed</span>, your trusted source for the latest and most reliable news from around the globe. Our mission is to deliver up-to-the-minute news coverage that helps you stay informed and make sense of the ever-changing world.
        </p>

        <p className="text-lg p-4 pt-4 mb-4">
          With a team of experienced journalists and editors, we strive to maintain the highest standards of accuracy, objectivity, and engagement. Our stories cover everything from current events and politics to technology and entertainment.
        </p>

        <p className="text-lg px-4 ">
          At Buzzed, we believe that informed citizens are the backbone of a strong community, and we aim to contribute to a better-informed society.
        </p>

        <div className="mt-6 px-4">
          <p className="font-semibold text-gray-800">Connect with us:</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/Rubanraj02" className="text-blue-600 hover:underline" target='_blank'>Github</a>
            <a href="https://x.com/ruban_devil" className="text-blue-600 hover:underline" target='_blank'>Twitter</a>
            <a href="https://www.instagram.com/blisterbug1/" className="text-blue-600 hover:underline" target='_blank'>Instagram</a>
            <a href="https://www.linkedin.com/in/rubanraj02/" className="text-blue-600 hover:underline" target='_blank'>LinkedIn</a>
          </div>
        </div>

        <div className="mt-6 border-t pt-2 px-4">
          <p className="text-lg ">
            <span className='text-lg font-bold'>Note from Developer: </span>This project supports dynamic fetching using any news API . Since the project is at developing stage i personally use News API for development purpose . Since News API doesn't support CORS enabled on all origins . "I was cornered to Hard Code the News Cards values". So if you need to fetch data dynamically from API . Clone our Github Repository, Run the project locally and in buzzed-news-blog/src/cards/ExampleCard . Please Refer the card for dynamic fetching . <span className='text-lg font-semibold'>Thank you for your Understanding</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MobileAbout