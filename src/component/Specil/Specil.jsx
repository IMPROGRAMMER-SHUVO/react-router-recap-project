import { useContext } from "react";
import { RingContext } from "../Grendpa/Gandpa";


const Specil = ({ring}) => {
    const angti=useContext(RingContext)
    return (
        <div>
       <h3>my spical</h3> 
       <p>ring{angti}</p>    
        </div>
    );
};

export default Specil;