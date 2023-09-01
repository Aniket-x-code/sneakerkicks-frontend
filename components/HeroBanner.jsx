import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { TfiArrowCircleRight} from "react-icons/tfi"
import { TfiArrowCircleLeft} from "react-icons/tfi"
TfiArrowCircleLeft


const HeroBanner = () => {
  return (
    <div  className="relative text-white text-[20px] w-full max-w-[1260px] mx-auto mt-12 ">
                
                        
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Trending This Week</span> </h1>
                

            <Carousel
            
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev) => (
                <div
                    onClick={clickHandler}
                    className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] z-10 flex items-center justify-center cursor-pointer hover:opacity-90 bg-black rounded-xl"
                >
                    <TfiArrowCircleLeft className="text-sm md:text-lg " />
                </div>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
                <div
                    onClick={clickHandler}
                    className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px]  z-10 flex items-center justify-center cursor-pointer hover:opacity-90 bg-black rounded-xl "
                >
                    <TfiArrowCircleRight className="rotate-0 text-sm md:text-lg" />
                </div>
            )}
            
            >
                 <div className='w-full max-w-[1260px] mx-auto mt-10'>  
                    <img src="/pur.png" className="aspect-[16/10] md:aspect-auto object-cover rounded-lg w-full max-w-[1260px]  h-[680px]"  />
                    <div className=" mx-3 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[20px] uppercase font-medium cursor-pointer hover:opacity-90 rounded-lg ">
                        Shop now
                    </div>
                </div> 
                <div className='w-full max-w-[1260px] mx-auto mt-10' >
                    <img src="/cyan.png" className="aspect-[16/10] md:aspect-auto object-cover rounded-lg w-full max-w-[1260px]  h-[680px]" />
                    <div className=" mx-3 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[20px] uppercase font-medium cursor-pointer hover:opacity-90 rounded-lg ">
                        Shop now
                    </div>
                </div>
                <div className='w-full max-w-[1260px] mx-auto mt-10'>
                    <img src="/og.png" className="aspect-[16/10] md:aspect-auto object-cover rounded-lg w-full max-w-[1260px]  h-[680px]" />
                    <div className="mx-3 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[20px] uppercase font-medium cursor-pointer hover:opacity-90 rounded-lg ">
                        Shop now
                    </div>
                </div>  
                 
                <div className='w-full max-w-[1260px] mx-auto mt-10'>
                    <img src="/unc.png" className="aspect-[16/10] md:aspect-auto object-cover rounded-lg w-full max-w-[1260px]  h-[680px]" />
                    <div className=" mx-3 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[20px] uppercase font-medium cursor-pointer hover:opacity-90 rounded-lg ">
                        Shop now
                    </div>
                </div>   
                <div className='w-full max-w-[1260px] mx-auto mt-10'>
                    <img src="/neon.png" className="aspect-[16/10] md:aspect-auto object-cover rounded-lg w-full max-w-[1260px]  h-[680px]" />
                    <div className=" mx-3 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[20px] uppercase font-medium cursor-pointer hover:opacity-90 rounded-lg ">
                        Shop now
                    </div>
                </div>  
                <div className='w-full max-w-[1260px] mx-auto mt-10'>
                    <img src="/red.png" className="aspect-[16/10] md:aspect-auto object-cover rounded-lg w-full max-w-[1260px]  h-[680px]" />
                    <div className=" mx-3 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[20px] uppercase font-medium cursor-pointer hover:opacity-90 rounded-lg " >
                        Shop now
                    </div>
                </div>  

                    
            </Carousel>
            <br />
            <br />
            <br />
                
            <br />
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-800">Our Customization !</span> </h1>
                <br></br>
            <div className='mt-6'>
                
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/295136773?h=63fa15086d" width="1260" height="680"  className=' mb-2 rounded-xl'></iframe>
                       
                </div>

                
    </div>
  )
}

export default HeroBanner