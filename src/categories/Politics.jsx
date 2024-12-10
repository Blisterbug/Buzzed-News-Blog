import React from 'react'
import BigStoryCard from '../cards/BigStoryCard'
import CenterCard from '../cards/CenterCard'
import SmallCard from '../cards/SmallCard'
import BigCard from '../cards/BigCard'
import Card from '../cards/Card'
import LoadMore from '../components/LoadMore'
import Footer from '../components/Footer'
import MobileMoreNewsCard from '../cards/MobileMoreNewsCard'
import MobileStoryCard from '../cards/MobileStoryCard'
import MobileCard from '../cards/MobileCard'



const Politics = () => {
  return (
    <>
    <div className='hidden sm:block'>
    <div className='flex flex-col gap-6 pt-32 bg-gray-100 text-gray-700'>
        <div className="container mx-auto flex justify-between items-center">
            {/* Center Section: Title */}
        <div className="text-center flex-grow">
            <h1 className="text-5xl font-bold text-gray-700 ">
                Uncover National Politics Daily
            </h1>
        </div>
     </div>


    <div className='w-full'>
    <div className='grid grid-cols-1 p-4 pl-16'>
                <BigStoryCard queryParameter="politics"/>
        </div>
    <div className='grid grid-cols-3 gap-6 p-8'>
        {/* left section - center card  */}
        <div className=' grid grid-cols-1  pl-8'>
            <CenterCard queryParameter="Politics"/>
        </div>

        <div className=' grid grid-rows-2 gap-6 px-72'>
            <SmallCard queryParameter="Politics"/>
            <SmallCard queryParameter="Politics"/>
        </div>

        <div className=' grid grid-rows-2 gap-6 px-36'>
            <SmallCard queryParameter="Politics"/>
            <SmallCard queryParameter="Politics"/>
        </div>
        </div>



        {/* Most Popular  */}

        <h2 className="text-3xl font-bold  p-4 pb-6 pl-24">Most Popular on Recent Days</h2>
        <div className='w-full'>
        <div className=' flex justify-between'>
                    <div className='pl-20'>
                        <BigCard queryParameter="Politics"/>
                    </div>
                    <div className='pr-16'>
                        <BigCard queryParameter="Politics"/>
                    </div>
        </div>
        </div>



        <h2 className="text-3xl font-bold  p-4 pb-6 pl-24 pt-12">Recent Trending on World Politics</h2>
        {/* Recent trending on this category  */}
        <div className='w-full'>
        <div className='grid grid-cols-3 gap-4 p-8 pl-24'>
            <Card queryParameter="Politics"/> 
            <Card queryParameter="Politics"/> 
            <Card queryParameter="Politics"/> 
        </div>
        </div>

        <LoadMore title="Politics"/>
        <Footer/>
    </div>
    </div>
    </div>


// Mobile Code Here 


<div className='block sm:hidden'>
      <div className=''>
    <div className='grid justify-start p-4 font-semibold text-2xl pt-28'>
      <h1>Uncover National Politics Daily</h1>
    </div>

    <div className='grid justify-center gap-6 p-4'>
      <MobileCard queryParameter='politics'/>
      <MobileCard queryParameter='politics'/>
      <MobileCard queryParameter='politics'/>
      <MobileCard queryParameter='politics'/>
      <MobileCard queryParameter='politics'/>
      <MobileCard queryParameter='politics'/>
      <MobileCard queryParameter='politics'/>
    </div>

    <div className='grid justify-center p-4 font-bold text-2xl'>
      <h1>Most Popular on Recent Days</h1>
    </div>

    <div className='grid justify-center gap-6 p-4'>
      <MobileStoryCard queryParameter='politics'/>
      <MobileStoryCard queryParameter='politics'/>
      <MobileStoryCard queryParameter='politics'/>
    </div>

    <div className='grid justify-start p-4 font-semibold text-2xl'>
      <h1>More From Chronicle Hub</h1>
    </div>

    <div className='grid justify-center gap-6 p-4'>
      <MobileMoreNewsCard queryParameter='finance'/>
      <MobileMoreNewsCard queryParameter='popular'/>
      <MobileMoreNewsCard queryParameter='comedy'/>
      <MobileMoreNewsCard queryParameter='car'/>
      <MobileMoreNewsCard queryParameter='india'/>
      <MobileMoreNewsCard queryParameter='france'/>
      <MobileMoreNewsCard queryParameter='israel'/>
      <MobileMoreNewsCard queryParameter='games'/>
    </div>
    <div className='p-2'><Footer/></div>
    </div>
      </div>
      </>
  )
}

export default Politics