import React from 'react';
// ///ICONS
import {FiX} from 'react-icons/fi'

// ///LINK
import {Link} from 'react-router-dom';

// ///useFetch hook
import useFetch from '../hooks/useFetch'; 

const CategoryNavMobile = ({setCatNavMobile}) => {
  ///get cetagories
  const {data} = useFetch('/catagories');


  return (
    <div className='w-full h-full bg-primary p-8'>

     {/* CLOSE ICONS */}
   <div 
   onClick={() => setCatNavMobile(false)}
  className='flex justify-end mb-8 cursor-pointer'
  >
  <FiX className='text-3xl'/>
  </div>
  <div className='flex flex-col gap-y-8'>
  <h1>catagories</h1>
    {data?.map(category =>{
      return(

        
        <Link to={`products/${category.id}`}
        className='uppercase font-medium'
         key={category.id}>
         {category.attributes.Title} Cameras
         </Link>
      ) 
    })}
  </div>
    </div>
  ) 
};

export default CategoryNavMobile;




// ///ICONS
// import {FiX} from 'react-icons/fi'

// ///LINK
// import {Link} from 'react-router-dom';

// ///useFetch hook
// import useFetch from '../hooks/useFetch'; 

// const CategoryNavMobile = ({setCatNavMobile}) => {
//   ///get cetagories
//   const {data} = useFetch('/catagories');
//   console.log(data);

//   return (
//  <div className='w-full h-full bg-primary p-8'> 

//   {/* CLOSE ICONS */}
//   <div 
//   onClick={() => setCatNavMobile(false)}
//   className='flex justify-end mb-8 cursor-pointer'
//   >
//   <FiX className='text-3xl'/>
//   </div>

//   <div className='flex flex-col gap-y-8'>
//   <h1>catagories</h1>
//   {data?.map((catagory) =>{
   
//     return (
//       <Link to={`products/${catagory.id}`} 
//       className='uppercase font-medium' 
//       key={catagory.id}>
//       {catagory.attributes.Title} Cameras
//       </Link>
//     ) 
   
//   })}
//   </div>

//   </div>
//   );
// };

// export default CategoryNavMobile;
