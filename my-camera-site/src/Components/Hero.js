import React from 'react';

//Importn Components
import CategoryNav from './CategoryNav';
import MainSlider from './MainSlider';

//IMAGES
import PromoImg1 from '../img/promo_img1.png';
import PromoImg2 from '../img/promo_img2.png';

const Hero = () => {
  return (
      <section className='mb-[30px] pt-36 lg:pt-0'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>

                {/* SIDEBAR */}
                <div>
                    <CategoryNav/>
                </div>

                {/* MAINSIDEBAR */}
                <div className='w-full max-w-lg lg:max-w-[734px] mx-auto'>
                   <MainSlider/>                 
                   </div>

                {/* PROMO IMGES */}

                <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]' >

                {/* PROMO 1 */}
                <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6 '>

                    {/* TEXT */}
                    <div className='flex flex-col max-w-[144px] h-full justify-center '>

                         <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                        Save 35% all dslr Cameras 
                        </div>
                         <a href='#'className='uppercase text-accent'>Shop now</a>
                    </div>

                     {/* IMG */}
                    <img className='absolute z-20 -top-2 -right-2' src={PromoImg1} alt="" />
                </div> 

                {/* PROMO 2 */}
                   <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6 '> 

                    {/* TEXT */}
                    <div className='flex flex-col max-w-[144px] h-full justify-center '>
                         <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                        Save 25% all mirrorless Cameras 
                        </div>
                        <a href='#' className='uppercase text-accent'>
                        Shop now
                        </a>
                      </div>
                      
                     {/* IMG */}
                    <img className='absolute z-20 top-4 -right-6' src={PromoImg2} alt="" />
                    </div> 
                  </div>
            </div>
        </div>
   </section>
  ) 
}

export default Hero;



