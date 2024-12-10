import React from 'react'
import Hero from './Hero'
import Card from '../cards/Card'
import BigCard from '../cards/BigCard'
import BigStoryCard from '../cards/BigStoryCard'
import StoryCard from '../cards/StoryCard'
import ViewMore from './ViewMore'
import MoreNewsCard from '../cards/MoreNewsCard'
import Footer from './Footer'
import MobileCard from '../cards/MobileCard'
import MobileStoryCard from '../cards/MobileStoryCard'
import MobileMoreNewsCard from '../cards/MobileMoreNewsCard'

const Home = () => {
  return (
    <div>
    <div className='hidden sm:block'>
        <h1 className='text-9xl text-gray-100 cursor-default'>.</h1>
        <section>
            <div className='flex justify-center w-full'>
                <h1 className="text-5xl font-bold text-gray-700 pb-4 px-10 overflow-x-hidden ">
                    Breaking News, Instant Updates Here
                </h1>
            </div>
            <Hero/>
        </section>


        <section>
                <h2 className="text-3xl font-bold  p-4 pb-2 pl-36 pt-4 overflow-x-hidden text-gray-700">Technology</h2>
            <div className='grid grid-cols-3 gap-4 p-8 px-28 overflow-x-hidden'>
                    <div ><Card queryParameter="technology"/> </div>
                    <div ><Card queryParameter="google"/> </div>
                    <div ><Card queryParameter="scam"/> </div>   
            </div>
        </section>


        <section>
                <h2 className="text-3xl font-bold  p-4 pb-8 pl-36 overflow-x-hidden text-gray-700">Space</h2>
                <div className='flex justify-between px-10 overflow-x-hidden'>
            <div className='flex-1 pl-6'>
                        <BigCard queryParameter="space"/>
            </div>
            <div className='flex-1'>
                         <BigCard queryParameter="space"/>
            </div>
                </div>
        </section>


        <section>
                 <h2 className="text-3xl font-bold  p-4 pb-6 pl-36 pt-12 overflow-x-hidden text-gray-700">Featured Articles</h2>
            <div className='grid grid-cols-3 gap-4 p-8 px-28 overflow-x-hidden'>
                        <Card queryParameter="crime"/>  
                        <Card queryParameter="united states"/> 
                        <Card queryParameter="india"/> 
            </div>
        </section>

        <section>
            <div className='flex justify-center w-full'>
                <h1 className="text-6xl font-bold text-gray-700 pb-4 px-10 overflow-x-hidden ">
                            Stories
                </h1>
            </div>
                <p className="text-md  font-bold text-gray-700 pb-4 px-96 overflow-x-hidden "> 
                "The Visionaries, Builders, Trailblazers shaping a brighter future for all."</p>
            <div className='grid grid-cols-1 p-4 pl-16'>
                        <BigStoryCard queryParameter='stories'/> 
            </div>
            <div className='grid grid-cols-4 gap-6 p-4 pt-6 '>
                        <StoryCard queryParameter='stories'/>
                        <StoryCard queryParameter='united states'/>
                        <StoryCard queryParameter='comedy'/>
                        <StoryCard queryParameter='war'/>
            </div>
            <ViewMore/>
        </section>

        <section>
            <div className='flex justify-start w-full'>
                <h1 className="text-3xl font-bold text-gray-700 pb-4 pl-36 overflow-x-hidden ">
                    More from Chronicle Hub
                </h1>
            </div>
            <div className='grid grid-cols-2 gap-6 p-4 px-52'>
                        <MoreNewsCard queryParameter='climate'/>
                        <MoreNewsCard queryParameter='fashion'/>
                        <MoreNewsCard queryParameter='finance'/>
                        <MoreNewsCard queryParameter='weather'/>
                        <MoreNewsCard queryParameter='germany'/>
                        <MoreNewsCard queryParameter='india'/>
                        <MoreNewsCard queryParameter='cybersecurity'/>
                        <MoreNewsCard queryParameter='gaming'/>
            </div>
        </section>

        <section>
            <Footer/>
        </section>
    </div>


        {/* Mobile Code Here  */}
    <div className='block sm:hidden'>
        <div className='grid justify-start p-4 font-semibold text-2xl pt-28'>
          <h1>Breaking News</h1>
        </div>

        <div className='grid justify-center gap-6 p-4'>
          <MobileCard queryParameter='popular'/>
          <MobileCard queryParameter='science'/>
          <MobileCard queryParameter='crime'/>
          <MobileCard queryParameter='united states'/>
          <MobileCard queryParameter='entertainment'/>
          <MobileCard queryParameter='fashion'/>
          <MobileCard queryParameter='movies'/>
          <MobileCard queryParameter='space'/>
          <MobileCard queryParameter='politics'/>
          <MobileCard queryParameter='war'/>
          <MobileCard queryParameter='finance'/>
        </div>

        <div className='grid justify-center p-4 font-bold text-4xl'>
          <h1>Stories</h1>
        </div>
        <div className='grid justify-center items-center pl-4 font-semibold'>
          <p>"The Visionaries, Builders, Trailblazers shaping a brighter future for all."</p>
        </div>

        <div className='grid justify-center gap-6 p-4'>
          <MobileStoryCard queryParameter='finance'/>
          <MobileStoryCard queryParameter='crime'/>
          <MobileStoryCard queryParameter='canada'/>
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
  )
}

export default Home