
import { useLoaderData } from "react-router-dom";
import Tshart from "../T-shart/Tshart";
import Cart from "../Cart/Cart";
import './Home.css'
import { useState } from "react";
import toast from 'react-hot-toast';
// if you add use this
const Home = () => {
    const tshirts=useLoaderData()
const [cart,setCart]=useState([])
const handleaddtocart=tshirt=>{
    const exits=cart.find(ts=>ts._id ===tshirt._id);
    if(exits){
toast.error('you have already added')
    }
    else{

        const newCart=[...cart,tshirt];
        setCart(newCart)
    }


}
 // if you delet this add this cart
const handleRemovetocart=id=>{
   const remaing=cart.filter(ts=>ts._id!==id)
setCart(remaing)
}
    
    return (
        <div className="home-container">
           <div className="tshirts-container">
            
         {
            tshirts.map(tshart=> <Tshart 
            key={tshart.id}
            tshart={tshart}
            handleaddtocart={handleaddtocart}
            ></Tshart>)
         }
            </div> 
            <div className="card-container">
<Cart 
cart={cart}
handleRemovetocart={handleRemovetocart}
></Cart>
            </div>
        </div>
    );
};

export default Home;