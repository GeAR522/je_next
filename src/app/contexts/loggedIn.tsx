'use client';
import { log } from 'console';
import * as React from 'react';

export const LoggedInContext = React.createContext<{
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
} | null>(null);

export function LoggedInProvider({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = React.useState(false);

  // TODO: finish this to make it actually secure after fixing the rails side of refreshing tokens
  React.useEffect(() => {
    console.log(localStorage.getItem('JE_TOKEN'));
    if (localStorage.getItem('JE_TOKEN')) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
}

// export const useLoggedIn = () => {
//   return useContext(LoggedInContext);
// };
