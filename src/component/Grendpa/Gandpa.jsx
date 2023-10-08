import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Ganpa.css'
export  const RingContext=createContext('GoldenRing')
export const MonryContext=createContext(0);


const Gandpa = () => {
    const ring='diamond';
 const [money,setMoney]=useState(0)
    return (
        <div className="geandpa">
            <h3>gradpa</h3>
            <p>has money:{money}</p>
<MonryContext.Provider value={[money,setMoney]}>

<RingContext.Provider value='golden Ring'>
          <section className="flex">

<Father ring={ring}></Father>
<Uncle></Uncle>
<Aunty></Aunty>
</section>
          </RingContext.Provider>

</MonryContext.Provider>
        </div>
    );
};

export default Gandpa;
// 1 create a contect and  ecport
//2 crates 