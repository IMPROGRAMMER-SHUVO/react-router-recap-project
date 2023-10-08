import { Link } from "react-router-dom";
import './Header.css'
import { BanknotesIcon,  EllipsisHorizontalCircleIcon,  HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
const Header = () => {
    return (
        <nav className="allnav">
            <Link to="/">Home <HomeIcon className="text"/></Link>
          <Link to="/Order">order <ShoppingBagIcon className="shpping"/></Link>
          <Link to='/chackout'>chackout <BanknotesIcon className="bank"/></Link>
          <Link to='/about'> about <EllipsisHorizontalCircleIcon className="more"></EllipsisHorizontalCircleIcon></Link>
          <Link to='/grandpa'> Grendpa <EllipsisHorizontalCircleIcon className="grandpa"></EllipsisHorizontalCircleIcon></Link>
        </nav>
    );
};

export default Header;