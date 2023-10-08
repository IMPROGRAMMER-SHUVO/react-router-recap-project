import Friend from "../Friend/Friend";


const Cousin = ({children,hasfrind}) => {
    return (
        <div>
            <h3>Cousin arif</h3>
            <p><span>ijiji{children}</span></p>
       {hasfrind&&<Friend></Friend>}
        </div>
    );
};

export default Cousin;