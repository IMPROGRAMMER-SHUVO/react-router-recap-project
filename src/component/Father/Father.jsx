import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Father = ({ring}) => {
    return (
        <div className="flex">
            <h3>Father</h3>
            <Myself ring={ring}></Myself>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;