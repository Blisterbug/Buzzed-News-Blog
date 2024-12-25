import React from 'react';
import { useLocation } from 'react-router-dom';
import SmallCard from '../cards/SmallCard';
import CenterCard from '../cards/CenterCard';
import Card from '../cards/Card';
import LoadMore from './LoadMore'
import Footer from './Footer'
import MobileCard from '../cards/MobileCard';
import MobileStoryCard from '../cards/MobileStoryCard';
import MobileMoreNewsCard from '../cards/MobileMoreNewsCard';




const SearchResult = () => {
    const location = useLocation();
    const { searchTerm } = location.state || {};

    return (
        <>
            <div className="p-6 bg-gray-100 hidden sm:block">
                <>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Search Results for: "{searchTerm}"</h2>
                        <h2 className="text-3xl font-bold pt-20 pl-12  text-gray-700">Search Results for : "{searchTerm}"</h2>
                        <div className='flex justify-between items-stretch gap-6 p-6'>
                            {/* Left Section */}
                            <div className='grid grid-rows-2 gap-6 p-4 pl-4'>
                                <SmallCard queryParameter={searchTerm} />
                                <SmallCard queryParameter={searchTerm} />
                            </div>

                            {/* Center section*/}
                            <div className='grid grid-cols-1 gap-6 pt-4'>
                                <CenterCard queryParameter={searchTerm} />
                            </div>

                            {/* Right section*/}
                            <div className='grid grid-rows-2 gap-6 p-4 pl-6'>
                                <SmallCard queryParameter={searchTerm} />
                                <SmallCard queryParameter={searchTerm} />
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='grid grid-cols-3 gap-4 p-8 pl-24 '>
                            <Card queryParameter={searchTerm} />
                            <Card queryParameter={searchTerm} />
                            <Card queryParameter={searchTerm} />
                        </div>
                        <LoadMore title={searchTerm} />
                    </div>
                    <Footer />
                </>
            </div>


            <div>
                {/* // Mobile Code Here  */}

                <div className='block sm:hidden'>
                    <div>
                        <div className=''>
                            <div className='grid justify-start p-4 font-semibold text-2xl pt-28'>
                                <h1>Search Result for : "{searchTerm}"</h1>
                            </div>

                            <div className='grid justify-center gap-6 p-4'>
                                <MobileCard queryParameter={searchTerm} />
                                <MobileCard queryParameter={searchTerm} />
                                <MobileCard queryParameter={searchTerm} />
                                <MobileCard queryParameter={searchTerm} />
                                <MobileCard queryParameter={searchTerm} />
                                <MobileCard queryParameter={searchTerm} />
                                <MobileCard queryParameter={searchTerm} />
                            </div>

                            <div className='grid justify-center p-4 font-bold text-2xl'>
                                <h1>Most popular on "{searchTerm}" recent days</h1>
                            </div>

                            <div className='grid justify-center gap-6 p-4'>
                                <MobileStoryCard queryParameter={searchTerm} />
                                <MobileStoryCard queryParameter={searchTerm} />
                                <MobileStoryCard queryParameter={searchTerm} />
                            </div>

                            <div className='grid justify-start p-4 font-semibold text-2xl'>
                                <h1>More From Buzzed</h1>
                            </div>

                            <div className='grid justify-center gap-6 p-4'>
                                <MobileMoreNewsCard queryParameter='finance' />
                                <MobileMoreNewsCard queryParameter='popular' />
                                <MobileMoreNewsCard queryParameter='comedy' />
                                <MobileMoreNewsCard queryParameter='car' />
                                <MobileMoreNewsCard queryParameter='india' />
                                <MobileMoreNewsCard queryParameter='france' />
                                <MobileMoreNewsCard queryParameter='israel' />
                                <MobileMoreNewsCard queryParameter='games' />
                            </div>
                            <div className='p-2'><Footer /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchResult;
