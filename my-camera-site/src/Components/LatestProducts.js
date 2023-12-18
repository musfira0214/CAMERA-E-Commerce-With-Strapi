
import React from 'react';

//Components
import ProductSlider from '../Components/ProductSlider';

 /// useFetch Hook
import useFetch from '../hooks/useFetch';

const LatestProducts = () => {
   //get new products
   const {data} = useFetch('/products?populate=*&filters[isNew]=true')
   console.log(data);

  return (
    <div className='mb-16'>
    <div className='container mx-auto'>
      <h2 className='h2 mb-6 text-center xl:text-left'>LatestProducts</h2>
    </div>
    <ProductSlider data={data}/>
 </div>
  )
};

export default LatestProducts;




// const LatestProducts = () => {
//      //Get NEw Product
//  const {data} = useFetch('/products?populate=*&filters[isNew]=true');
 
//   return (
//   <div className='mb-16'>
//   <div className='container mx-auto'>
//    <h2 className='h2 mb-6 text-center xl:text-left'>Latest Prosucts</h2>
//   </div>
//      <ProductSlider data={data}/>
//   </div>
//   )
  
// }

// export default LatestProducts
