
import './tshart.css'
const Tshart = ({tshart ,handleaddtocart}) => {
    const{gender,name,picture,price}=tshart
    return (
        <div className='tshart'>
           
            <h3>name :{name}</h3>
            <img src={picture}/>
            <p>price:{price}</p>
            <button onClick={()=>handleaddtocart(tshart)}>Buy now</button>
        </div>
    );
};

export default Tshart;

