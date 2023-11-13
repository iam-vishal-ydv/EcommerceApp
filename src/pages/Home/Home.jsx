import React, { Children } from 'react'
import Layout from '../../Components/layout/Layout'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Filter from '../../Components/Filter/Filter'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Track from '../../Components/Track/Track'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,deleteFormCart } from '../../redux/cartSlice'



 const Home = () => {
  const  dispatch=useDispatch();
    
  const  cartItems= useSelector((state)=> state.cart)


   console.log(cartItems,"teste")

     const addCart=()=>{
    
      dispatch(addToCart("shart"))
    
    }

     const deleteCart=()=>{
    
        dispatch(deleteFormCart("shart"))
          console.log("Jjjj")
    
    }
  return (
    <Layout> 

  <div className=' w-28 border border-red-500 '>

  <button onClick={addCart}> add</button>

  
  <button onClick={deleteCart} className='pl-5'>  delete</button>

     </div>
        
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
       </Layout>
  )
}


export default Home