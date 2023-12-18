import React from 'react';

// //USEFETCH HOOK
import useFetch from '../hooks/useFetch';

// //COMPONENTS
import ProductSlider from './ProductSlider';

const RelatedProducts = ({categoryTitle}) => {

  //GET PRODUCTS BY CATEGORY  TITLE

 const {data} = useFetch(
    `/products?populate=*&filters[catagories][Title]=${categoryTitle}`);

  return(
    <div className=' mb-16'>
    <div className='container mx-auto'>
      <h2 className='h2 mb-6 text-center xl:text-left'>Related Products</h2>
      <ProductSlider data={data}/>
    </div>
    </div>
  )
};

export default RelatedProducts;




// //USEFETCH HOOK
// import useFetch from '../hooks/useFetch';

// //COMPONENTS
// import ProductSlider from './ProductSlider';

// const RelatedProducts = ({categoryTitle}) => {
//   ///get Product by catagory title
//   const {data} = useFetch(
//     `/products?populate=*&filters[catagories][title]=${categoryTitle}`
//     );
//   // console.log(data);
//   return(
//    <div className='mb-16'>
//     <div className='container mx-auto'>
//       <h2 className='h2 mb-6 text-center xl:text-left'>Related Products</h2>
//       <ProductSlider data={data}/>
//     </div>
//    </div>

//  ) 
// };

// export default RelatedProducts;


// ////FACING PROBLEM WITH PRODUCT AND PRODUCTSS /id