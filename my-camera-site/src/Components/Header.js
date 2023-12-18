import React, { useContext, useState }  from 'react'

// ///IMAGES
import Logo from '../img/logo.png';

// //ICONs

import {FiMenu} from 'react-icons/fi'
import {SlBag} from 'react-icons/sl'

// ///LINKS
import {Link} from 'react-router-dom'

// ///components
import SearchForm from '../Components/SearchForm';
import CategoryNavMobile from '../Components/CategoryNavMobile';
import Cart from '../Components/Cart'

// ///CART CONTEXT
import { CartContext } from '../context/CartContext';


const Header = () => {
const {isOpen, setIsOpen, itemsAmount} = useContext(CartContext);
const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
      <div className='container mx-auto'>
      <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>

         {/* MENU */}
         <div 
         onClick={()=>setCatNavMobile(true)} className='text-3xl xl:hidden cursor-pointer'
         >
          <FiMenu/>
         </div>

         {/* CATEGORY NAV MOBILE */}
         <div className={`${catNavMobile ? 'left-0': '-left-full'} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200 `}
         >
          <CategoryNavMobile setCatNavMobile={setCatNavMobile}/>
         </div>
         
         {/* LOGO */}
         <Link to={'/'}>
          <img src={Logo} alt="" />
         </Link>
          
     {/* SEARCH FROM SHOM ONLY ON DESKTOP*/}
     <div className='hidden w-full xl:flex xl:max-w-[734px]'>
      <SearchForm/>
     </div>

     {/* PHONE AND CART */}
     <div className='flex items-center gap-x-[10px]'>

     {/* PHONE */}
     <div className='hidden xl:flex uppercase'>
      Need Help? 123 456 789
       </div>

       {/* CART ICON*/}
       <div onClick={()=> setIsOpen(!isOpen)} className='relative cursor-pointer'>
        <SlBag className='text-2xl' />

        {/* AMOUNT */}
        <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>
        {itemsAmount}
        </div>
       </div>

       {/* CART */}
       <div 
       className={`
          ${isOpen ? 'right-0': '-right-full'}      
       bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}>
        <Cart/>
       </div>
     </div>
  </div>

      {/* SEARCH FROM MOBILE ONLY */}
      <div className='xl:hidden'>
          <SearchForm/>
        </div>
      </div>
    </header>
  );
};

export default Header;





// import { CartContext } from '../context/CartContext';

// const Header = () => {
//   const {isOpen, setIsOpen} = useContext(CartContext);
//   const [catNavMobile, setCatNavMobile] = useState(false);

//   return(
//  <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>

//     <div className='container mx-auto'>
//        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>

//           {/* MENU */}
//           <div 
//           onClick={() => setCatNavMobile(true)} 
//           className='text-3xl xl:hidden cursor-pointer'
//           >
//           <FiMenu/>
//           </div>

//           {/* CATAGORY NAV MOBILE */}
//           <div 
//           className={`${
//             catNavMobile ? 'left-0': '-left-full'} 
//             fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
//             >
//             <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
//           </div>

//           {/* LoGO */}
//           <Link to={'/'}>
//             <img src={Logo} alt="" />
//           </Link>

//           {/* SEARCHFORM SHOW ONLY on DESKTOP */}
//           <div className='hidden w-full xl:flex xl:max-w-[734px]'>
//             <SearchForm/>
//           </div>

//           {/* PHONE & CART */}
//           <div className='flex items-center gap-x-[10px]'>

//           {/* PHONE */}
//             <div className='hidden xl:flex uppercase'>
//             Need Help? 123 456 789
//             </div>

//             {/* CART ICON */}
//             <div onClick={()=> setIsOpen(!isOpen)} className='relative cursor-pointer '>
//             <SlBag className='text-2xl'/>


//             {/* AMOUNT */}

//             <div 
//             className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>
//             2
//             </div>

//             </div>

//            {/* CART */}
//            <div 
//            className={`
//            ${isOpen ? 'right-0' : '-right-full' }
//            bg-[#0e0f10] shadow-xl fixed top-0 bottom- w-full z-10 md:[500px] transition-all duration-300`}
//            >
//             <Cart/>
//            </div>


//           </div>
//        </div>

//        {/* SEARCH FORM SHOW ON MOBILE ONLY */}
//        <div className='xl:hidden'>
//         <SearchForm/>
//        </div>
       
//     </div>
//   </header>
//   );
// };

// export default Header
