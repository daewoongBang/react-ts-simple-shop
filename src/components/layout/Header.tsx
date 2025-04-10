import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { RiAdminFill } from 'react-icons/ri';
import { login, logout, onUserStateChange } from 'apis/firebase';

const Header = () => {
  const [user, setUser] = useState<any>(null);

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  console.log('user', user);

  useEffect(() => {
    onUserStateChange((user: any) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to={'/'} className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Simple Shop</h1>
      </Link>

      <nav className='flex items-center gap-4 font-semibold'>
        <Link to={'/products'}>Products</Link>
        <Link to={'/Cart'}>Cart</Link>

        {!user ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}

        <Link to={'/admin/upload'} className='text-2xl'>
          <RiAdminFill />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
