import React from 'react';

// //Link
import {Link} from 'react-router-dom'

const Product =({product}) =>{
  // console.log(product);
  
  return(
    <Link to={`/product/${product.id}`}>
      <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden group'>

         {/* BADGE */}
         {product.attributes.isNew ? (
          <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>
        new
       </div>
         ) : (
          ''
         )}
         

        {/* IMAGE    */}
        <div className='w-full h-[200px] flex items-center justify-center relative'>

           <img 
             className='w-[160px] h-[160px] group-hover:scale-90 transition-all'
            src={`http://localhost:1337${product.attributes.Images.data[0].attributes.url}`}  
            alt=''
             />
          </div>
          
          {/* TEXT */}
          <div  className='px-6 pb-8 flex flex-col'>
             {/* category title */}
             <div 
             className='text-sm text-accent capitalize mb-2'>
             {product.attributes.catagories.data[0].attributes.Title}
             </div>


             {/*title */}
             <div className='text-[15px] mb-4 lg:mb-9'> 
             {product.attributes.Title.substring(0, 35)}...
             </div>

             {/* price */}
             <div  className='text-lg text-accent'>
             ${product.attributes.Price}
             </div>

          </div>
      </div>
    </Link>
  )
}
export default Product;

     
   
//       <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden group'>

//       {/* BADGE */}
       
//        {product.attributes.isNew ? ( 
//         <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>
//         new
//       </div>
//        ) : (
//         ''
//        )}
     
//         {/* IMAGE    */}
//         <div className='w-full h-[200px] flex items-center justify-center relative'>

//             <img 
//             className='w-[160px] h-[160px] group-hover:scale-90 transition-all'
//             src={`http://localhost:1337${product.attributes.Images.data[0].attributes.url}`} 
//             alt=''
//             />
//         </div>

//         {/* TEXT */}
//         <div className='px-6 pb-8 flex flex-col'>

//            {/* catagory title  */}
//            <div className='text-sm text-accent capitalize mb-2'>
//            {product.attributes.catagories.data[0].attributes.Title}
//            </div>

//            {/*  title  */}
//            <div className='text-[15px] mb-4 lg:mb-9'>
//         {product.attributes.Title.substring(0, 35)}...
//         </div>

//            {/* price  */}
//            <div className='text-lg text-accent'>${product.attributes.Price}</div>

        

//         </div>
//         </div>
//   </Link>
//   )
// };





   
//   return ( 
//   <Link>
//       <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden group'>

//       {/* BADGE */}
       
//        {product.attributes.isNew ? ( 
//         <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>
//         new
//       </div>
//        ) : (
//         ''
//        )}
     
//         {/* IMAGE    */}
//         <div className='w-full h-[200px] flex items-center justify-center relative'>

//             <img 
//             className='w-[160px] h-[160px] group-hover:scale-90 transition-all'
//             src={`http://localhost:1337${product.attributes.Images.data[0].attributes.url}`} 
//             alt=''
//             />
//         </div>

//         {/* TEXT */}
//         <div className='px-6 pb-8 flex flex-col'>

//            {/* catagory title  */}
//            <div className='text-sm text-accent capitalize mb-2'>
//            {product.attributes.catagories.data[0].attributes.Title}
//            </div>

//            {/*  title  */}
//            <div className='text-[15px] mb-4 lg:mb-9'>
//         {product.attributes.Title.substring(0, 35)}...
//         </div>

//            {/* price  */}
//            <div className='text-lg text-accent'>${product.attributes.Price}</div>

        

//         </div>
//         </div>
//   </Link>
//   );
// };

// export default Product;