import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { RiAdminFill } from 'react-icons/ri';

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <FiShoppingBag />
        <h1>Logo</h1>
      </Link>

      <nav>
        <Link to={'/products'}>Products</Link>
        <Link to={'/Cart'}>Cart</Link>
        <Link to={'/admin/upload'}>
          <RiAdminFill />
        </Link>
        <Link to={'/login'}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
