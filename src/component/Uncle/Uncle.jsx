import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MonryContext } from "../Grendpa/Gandpa";


const Uncle = () => {
    const [money,setMoney]=useContext(MonryContext)
    return (
        <div>
            <h4> unlce</h4>
            <p><span>Grandpa money:{money}</span></p>
         <button onClick={()=>setMoney(money+1000)}>Send 1000</button>
            <section>
                <Cousin>anbil</Cousin>
            </section>
        </div>
    );
};

export default Uncle;