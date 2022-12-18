import React, { createContext, useCallback, useContext, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
// import { useQuery } from "react-query/types/react";

const UserContext = createContext<any>({});

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState();
  const getCurrentUser = (userId: string = "YMCCgTKFIqcnerqOZ05f") => {
    // const { isLoading, error, data } = useQuery("currentUser", () => {
    //   const docRef = doc(db, "users", userId);
    //   getDoc(docRef);
    // });
    // if (isLoading) {
    //   return <span>Loading...</span>;
    // }
    // if (!!error) {
    //   console.log("error", error);
    //   // return <span>Error: {error?.message}</span>
    // }
    // return data;
  };

  return (
    <UserContext.Provider value={{ getCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;
