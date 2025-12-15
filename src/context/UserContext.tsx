import { createContext, useContext, useState, type ReactNode } from "react";

export type User = {
  id: string;
  username: string;
  isGuest?: boolean;
} | null;
type UserContextType = {
  user: User;
  login: (userData: User) => void;
  logout: () => void;
  loginAsGuest: () => User;
};
type UserProviderProps = {
  children: ReactNode;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(null);

  const login = (userData: User) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  const loginAsGuest = () => {
    const guestId = crypto.randomUUID();
    const guestUser = {
      id: guestId,
      username: `Gäst-${guestId.slice(0, 6)}`,
      isGuest: true,
    };

    setUser(guestUser);
    return guestUser;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loginAsGuest }}>
      {children}
    </UserContext.Provider>
  );
};

// för att endast skriva useUser()
export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside UserProvider");
  return ctx;
};
