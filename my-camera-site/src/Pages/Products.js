import React, { useEffect, useState } from 'react';

///useparams hooks
import { useParams } from "react-router-dom";

// //usefetch hook
import useFetch from '../hooks/useFetch';

// ///components
import CategoryNav from '../Components/CategoryNav';
import Product from '../Components/Product';

const Products = () => {
  const {id} = useParams();

  ///get products based on category title
  const {data} = useFetch(
     `/products?populate=*&filters[catagories][id][$eq]=${id}`
   );
   const [title, setTitle] = useState(null);

      ///SET THE TITLE WHEN DATA IS FETCHED  

  useEffect(() => {
    if (data){
       setTitle(data[0].attributes.catagories.data[0].attributes.Title)
    } 
  }, [data]);


 

  return(

    <div className='mb-16 pt-40 lg:pt-0'>
    <div className='container mx-auto'>
        <div className='flex gap-x-[30px]' >
          <CategoryNav />
          <main>
            {/* TITLE */}
            <div className='py-3 text-xl uppercase text-center lg:text-left'>{title} cameras</div>

            {/* PRODUCT GRID */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
            {data?.map((product) =>{
              return <Product product={product} key={product.id}/>
            })}
            </div>

          </main>
        </div>
    </div>
    </div>
  ) 
};

export default Products;





// //useparams hooks
// import { useParams } from "react-router-dom";

// //usefetch hook
// import useFetch from '../hooks/useFetch';

// ///components
// import CategoryNav from '../Components/CategoryNav';
// import Product from '../Components/Product';

// const Products = () => {
//   const {id} = useParams();
//   // console.log(id);

//   //get Products based on catagory id
//   const {data} = useFetch(
//     `/products?populate=*&filters[catagories][id][$eq]=${id}`
//   );
//   console.log(data)

//   const [title, setTitle] = useState(null);


  
//   ///SET THE TITLE WHEN DATA IS FETCHED  

//   useEffect(() => {
//     if (data){
//        setTitle(data[0].attributes.catagories.data[0].attributes.Title)
//     } 
//   }, [data]);



//   return(
//    <div className='mb-16 pt-40 lg:pt-0'>
//   <div className='container mx-auto'>
//     <div className='flex gap-x-[30px]' >
//       <CategoryNav/>

//       <main>
//           {/* title */}
//           <div className='py-3 text-xl uppercase text-center lg:text-left'>{title} cameras</div>

//           {/* product grid */}
//           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
//           {data?.map((product) =>{
//             return <Product product={product} key={product.id}/>
//           })}
          
            
//           </div>
//       </main>
//     </div>
//   </div>
//   </div>
//   )
// };

// export default Products

  
