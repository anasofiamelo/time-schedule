import { createContext, useCallback, useContext, useState } from "react";
import { useFirestoreDocument } from "@react-query-firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { Props } from "../models/DefaultProps";
import { User } from "../models/User";
interface contextProps {
  currentUser: User;
}

const UserContext = createContext<contextProps>({ currentUser: new User() });

const userId = "YMCCgTKFIqcnerqOZ05f";

export const UserProvider: React.FC<Props> = (props) => {
  const userRef = doc(db, "users", userId);
  const { data } = useFirestoreDocument(["users", userId], userRef); // TODO: implement isLoading
  // console.log("data", data);
  // const { name, email, hour_value, hour_amount_per_day } = data?.data() as User;
  // const currentUser = new User(name, email, hour_value, hour_amount_per_day);
  const currentUser = new User();
  // console.log("currentUser", currentUser);
  return (
    <UserContext.Provider value={{ currentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;
