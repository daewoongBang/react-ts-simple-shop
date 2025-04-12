import { login, logout, onUserStateChange } from 'apis/firebase';
import { createContext, useContext, useState, useEffect } from 'react';

import { User } from 'types/user';

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  useEffect(() => {
    onUserStateChange((user: any) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return auth;
};
