import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { RiAdminFill } from 'react-icons/ri';

import UserProfile from 'components/user/UserProfile';
import Button from 'components/common/Button';
import CartStatus from 'components/user/CartStatus';
import { useAuth } from 'context/AuthContext';

const Header = () => {
  const { user, login, logout } = useAuth();

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to={'/'} className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>S-Shop</h1>
      </Link>

      <nav className='flex items-center gap-4 font-semibold'>
        <Link to={'/products'}>Products</Link>
        {user && (
          <Link to={'/cart'}>
            <CartStatus />
          </Link>
        )}

        {user && user.isAdmin && (
          <Link to={'/admin/upload'} className='text-2xl'>
            <RiAdminFill />
          </Link>
        )}

        {user && <UserProfile user={user} />}

        {!user ? (
          <Button onClick={login}>Login</Button>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
