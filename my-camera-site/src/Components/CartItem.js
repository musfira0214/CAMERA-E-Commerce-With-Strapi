

import React, { useContext } from 'react'

//Link
import { Link } from 'react-router-dom'

//icons
import {IoClose} from 'react-icons/io5'

//COMPONENTS
import Qty from '../Components/Qty'

///Context
import { CartContext } from '../context/CartContext'

const CartItem = ({item}) => {
  const {removeFromCart} = useContext(CartContext)

  return(
   <div className='flex gap-x-8'> 

  <Link to={`product/${item.id}`} className='w-[70px] h-[70px]'>
      <img 
      src={`http://localhost:1337${item.attributes.Images.data[0].attributes.url}`} alt="" />
  </Link>

  <div className='flex-1'>
    {/* TITLE AND REMOVE ICON */}
    <div className='flex gap-x-4 mb-3 '>
      <Link to={`product/${item.id}`}>{item.attributes.Title}</Link>
      <div 
      onClick={() => removeFromCart(item.id) } className='cursor-pointer text-[24px] hover:text-accent transition-all'>
         <IoClose/>
      </div>
    </div>

    <div className=' flex items-center gap-x-12'>
      {/* QUANTITY */}
      <div className='flex gap-x-4 mb-2'>
      <Qty item={item}/>
        </div>

        <div className='text-accent text-xl'>
       $ {item.attributes.Price * item.amount}
           </div>
           
    </div>

            {/* PRICE */}
    <div>
    <span className='text-accent'> 
    $ {item.attributes.Price} per piece 
    </span>
  </div>
  </div>
 
     </div>
 
  )

}

export default CartItem
