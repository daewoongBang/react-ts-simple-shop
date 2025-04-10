import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { RiAdminFill } from 'react-icons/ri';
import { login } from 'apis/firebase';

const Header = () => {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to={'/'} className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Logo</h1>
      </Link>

      <nav className='flex items-center gap-4 font-semibold'>
        <Link to={'/products'}>Products</Link>
        <Link to={'/Cart'}>Cart</Link>
        <button onClick={() => login()}>Login</button>
        <Link to={'/admin/upload'} className='text-2xl'>
          <RiAdminFill />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
