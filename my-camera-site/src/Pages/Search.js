import React from 'react';

 //use location hook 
import { useLocation } from 'react-router-dom';

// useFetch hook
import useFetch from '../hooks/useFetch';

//components
import CategoryNav from '../Components/CategoryNav';
import Product from '../Components/Product';


const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  console.log(searchTerm);


  ////GET PRODUCTS BASED ON SEARCH TERM
  const {data} = useFetch(
    `/products?populate=*&filters[Title][$contains]=${searchTerm}`

    );
  console.log(data);
  return(
    <div className='mb-[30px] pt-40 lg:pt-4 xl:pt-0'>
      <div className='container mx-auto'>

          <div className='flex gap-x-[30px]'>

          {/* CATAGORY NAV */}
            <CategoryNav/>
            <div>

            {/* TITLE */}
            <div className='py-3 text-xl uppercase text-center lg:text-left'>
        {data?.length > 0 ? `${data.length} result for ${searchTerm}`: `no result found for ${searchTerm}`}
      </div>

            {/* PRODUCT GRID */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
              {data?.map(product =>{
                return <Product product={product} key={product.id}/>
              })}
             </div>
           </div>    
         </div> 
      </div>
    </div>
  ) 
};

export default Search;





// //use location hook 

// import { useLocation } from 'react-router-dom';

// /// useFetch hook
// import useFetch from '../hooks/useFetch';

// ///components
// import CategoryNav from '../Components/CategoryNav';
// import Product from '../Components/Product';


// const Search = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const searchTerm = searchParams.get('query');
//   console.log(searchTerm);
  

//   ///FACING PROBLEM ON SERACH BAR BY NAME
//   ////GET PRODUCTS BASED ON SEARCH TERM
//   const {data} = useFetch(
//     `/products?populate=*&filters[title][$contains]=${searchTerm}`
//     );
//   console.log(data);

//   return(
//      <div className='mb-[30px] pt-40 lg:pt-4 xl:pt-0'>
//     <div className='container mx-auto'>

//       <div className='flex gap-x-[30px]'>
//       <CategoryNav/>

//       <div>

//       {/* TITle */}
//       <div className='py-3 text-xl uppercase text-center lg:text-left'>
//         {data?.length > 0 ? `${data.length} result for ${searchTerm}`: `no result found for ${searchTerm}`}
//       </div>

//          {/* products GRID */}
//          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
//           {data?.map((product) =>{
//             return <Product product={product} key={product.id}  />
//           })}
//          </div>
//       </div>
        
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Search

//   ///FACING PROBLEM ON SERACH BAR BY NAME
