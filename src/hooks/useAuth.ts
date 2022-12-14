import { useLocalStorage } from '@mantine/hooks';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import superjson from 'superjson';

export interface UseAuthReturn {
  auth: any;
  setAuth: (val: any) => void;
  userLogin: VoidFunction;
  userLogout: VoidFunction;
  isLoading: boolean;
  isLoggedIn: boolean;
}

export const useAuth = (): UseAuthReturn => {
  // const [auth, setAuth] = useState<any>(null);
  const [auth, setAuth] = useLocalStorage<any>({
    key: 'user',
    defaultValue: null,
    serialize: superjson.stringify,
    deserialize: str => (str === undefined ? null : superjson.parse(str)),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function userLogin() {
    setIsLoading(false);
    setIsLoggedIn(true);
  }

  function userLogout() {
    setIsLoading(false);
    setIsLoggedIn(false);
  }

  useEffect(() => {
    (async () => {
      if (!auth) return userLogout();
      setIsLoading(true);
      try {
        const res = await axios.get('http://localhost:8000/users/me', {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setIsLoading(false);
        setIsLoggedIn(true);
        setAuth(res.data);
      } catch (e) {
        userLogout();
      }
    })();
    console.log({ isLoading, isLoggedIn });
  }, []);
  console.log({ auth });
  return { isLoggedIn, auth, setAuth, isLoading, userLogin, userLogout };
};
