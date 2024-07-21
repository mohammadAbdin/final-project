import React, { createContext, ReactNode, useEffect, useState } from "react";
import UserType from "../Types/UserType.tsx";

type UserContextType = {
  isLogedIn: boolean;
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  searchData?: Result;
};
export const UserContext = createContext<UserContextType>({
  isLogedIn: false,
  setIsLogedIn: () => {},
  userType: "",
  setUserType: () => {},
  user: undefined,
  setUser: () => {},
  searchData: {} as Result,
});
interface UserContextProps {
  children: ReactNode;
}

interface Result {
  [x: string]: string | undefined;
}

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [user, setUser] = useState<UserType | undefined>();

  useEffect(() => {
    if (user?.userType) {
      setUserType(user.userType);
    }
  }, [user]);
  const contextValue: UserContextType = {
    isLogedIn,
    setIsLogedIn,
    userType,
    setUserType,
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
