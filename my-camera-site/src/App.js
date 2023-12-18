import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

///Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import Search from './Pages/Search';

// ///Components
import Header from './Components/Header';
import Footer from './Components/Footer';

// ///Layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products/:id', element: <Products/> },
      { path: '/product/:id', element: <ProductDetails/> },
      { path: '/search', element: <Search /> },
    ],
  },
]);


const App = () => {
  return(
           <div>
            <RouterProvider router={router}/>
           </div>
      );
};

export default App;




