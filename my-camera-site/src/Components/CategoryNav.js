import React from 'react';

// // usefetch Hooks
import useFetch from '../hooks/useFetch';

//Link
import {Link} from 'react-router-dom'

const CategoryNav = () => {
  const {data} = useFetch('/catagories');
  console.log(data);
  return(
    
    <aside className='hidden xl:flex'>

   <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>


     <div className='bg-accent py-4 text-primary uppercase font-medium flex items-center justify-center'>
     Browse Categories
     </div>

     <div className='flex flex-col gap-y-6 p-6'>
    
     {data?.map((catagory) => {
       return(
         <Link


          to={`/products/${catagory.id}`} className='cursor-pointer uppercase' key={catagory.id}
          >
          {catagory.attributes.Title}

         </Link>
        

       ) 

     })}

     </div>
    

   </div>

   </aside>

  )
};

export default CategoryNav;








// const CategoryNav = () => {
//    const {data} = useFetch('/catagories');

//   return (
//   <aside className='hidden xl:flex'>

//   <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>

//     <div className='bg-accent py-4 text-primary uppercase font-medium flex items-center justify-center'>
//     Browse Categories
//     </div>

//     <div className='flex flex-col gap-y-6 p-6'>
    
//    {/* ======= MAP METHOD==== */}

//     {data?.map((catagory) => {
      
//       return(
//         <Link
//          to={`/products/${catagory.id}`} className='cursor-pointer uppercase' key={catagory.id}
//          >
//          {catagory.attributes.Title}
//         </Link>
        
//       ) 
//     })}
//     </div>
    
//   </div>

//   </aside>
//   );
// };

// export default CategoryNav
