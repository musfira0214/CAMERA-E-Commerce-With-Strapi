import React, { useContext } from 'react'

// //useParams hooks
import { useParams } from "react-router-dom";

// ///useFetch hooks
import useFetch from '../hooks/useFetch';

// ///Components
import RelatedProducts from '../Components/RelatedProducts';

// ///context
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const {addToCart} = useContext(CartContext)
  const {id} = useParams();

  ///get product data base on the id
  const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data){
    return <div className='container mx-auto'>loading.....</div>
   }
  
////CATEGORY TITLE
const categoryTitle = data[0].attributes.catagories.data[0].attributes.Title;


  return(
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
       <div className='container mx-auto'>

       {/* TEXT */}
         <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>

           <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center'>

           <img 
           src={`http://localhost:1337${data[0].attributes.Images.data[0].attributes.url}`} 
           alt="" 
           className='w-full max-w-[65%]'
           />
           </div>

           <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center' >

            {/*Catagory TITLE */}
            <div className='uppercase text-accent text-lg font-medium mb-2'>
            {data[0].attributes.catagories.data[0].attributes.Title}  Camera
            </div>

            {/* TITLE */}
            <h2 className='h2 mb-4'>{data[0].attributes.Title}</h2>

            {/* DESCRIPTION */}
      <p className='mb-12'>{data[0].attributes.description}</p>

            {/* PRICE AND BTN */}
      <div className='flex items-center gap-x-8'>

         {/* price */}
         <div className='text-3xl text-accent font-semibold'>
         ${data[0].attributes.Price}
        </div>

       <button onClick={()=> addToCart(data, id)} 
         className='btn btn-accent'>
        Add to Cart
        </button>

             </div>  
           </div>
         </div>

         {/* RELATED PRODUCTS */}
         <RelatedProducts categoryTitle={categoryTitle}/>
       </div>
    </div>
  ) 
};

export default ProductDetails;




// //useParams hooks
// import { useParams } from "react-router-dom";

// ///useFetch hooks
// import useFetch from '../hooks/useFetch';

// ///Components
// import RelatedProducts from '../Components/RelatedProducts';

// ///context
// import { CartContext } from '../context/CartContext';


// const ProductDetails = () => {
//   const {addToCart} = useContext(CartContext)
//   const {id} = useParams()
  
//   //get product data base on the id
//   const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
//   console.log(data)

//   if (!data){
//     return <div className='container mx-auto'>loading.....</div>
//   }

//   ///CATAGORY TITLE
//   const categoryTitle = data[0].attributes.catagories.data[0].attributes.Title
  
//   return(

//  <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
//   <div className='container mx-auto'>
   
//    {/* TEXT */}
//    <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>

//     <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center'>
//     <img 
//     src={`http://localhost:1337${data[0].attributes.Images.data[0].attributes.url}`} 
//     alt="" 
//       className='w-full max-w-[65%]'
//     />
//     </div>

//     <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center'>
//     {/* CATAGORY TITLE */}
//       <div className='uppercase text-accent text-lg font-medium mb-2'>
//       {data[0].attributes.catagories.data[0].attributes.Title} cameras
//       </div>

//       {/* TITLE */}
//       <h2 className='h2 mb-4'>{data[0].attributes.Title}</h2>

//       {/* DESCRIPTION */}
//       <p className='mb-12'>{data[0].attributes.description}</p>

//       {/* PRICE AND BTN */}
//       <div className='flex items-center gap-x-8'>

//         {/* price */}
//         <div className='text-3xl text-accent font-semibold'>
//         ${data[0].attributes.Price}
//         </div>

//         <button 
//         onClick={()=> addToCart(data, id)} className='btn btn-accent'>
//         Add to Cart
//         </button>

//       </div>
//     </div>
//    </div>

//  {/* RELATED PRODUCTS */}
//  <RelatedProducts categoryTitle={categoryTitle} />
//   </div>
//   </div>
//   )
// };


// export default ProductDetails
