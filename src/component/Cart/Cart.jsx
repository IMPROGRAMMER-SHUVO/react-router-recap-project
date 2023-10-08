import './Cart.css'

const Cart = ({cart,handleRemovetocart}) => {
   let massage;
   if(cart.length===0)
   {
    massage=<p className='orange'>plase add some product</p>
   }
   else{
    massage=<div> 
        <p className='blue'>

        thanks add 
        </p>
        </div>
   }
   
    return (
        <div>
            <h3 className={cart.length==1? 'bule':'green'}> Order summary: {cart.length}</h3>
            {cart.length>2? <span className=""> add more product</span>:<span>go back</span>}
            {massage}
            {
                cart.map(tshart=><p  key={tshart._id}> 
                
                
                {tshart.name}
                <button onClick={()=>handleRemovetocart(tshart._id)}>delet</button>
                </p>)
            }
            {
                cart.length===2 && <p> Dobule bouns</p>
            }
            {
                cart.length===3|| <h3>but not 3</h3>
            }
        </div>
    );
};

export default Cart;