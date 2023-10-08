import Anotherccousin from "../Anothercousin/Anotherccousin";
import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div>
            <h3>aunty</h3>
            <section>
<Cousin></Cousin>
            <Anotherccousin hasfrind={true}>abir</Anotherccousin>
            </section>
        </div>
    );
};

export default Aunty;