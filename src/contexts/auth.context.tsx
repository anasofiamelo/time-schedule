import { createContext, useContext } from "react";
import { Props } from "../models/DefaultProps";

const AuthContext = createContext<{ userId: string }>({
  userId: "YMCCgTKFIqcnerqOZ05f",
});

export const AuthProvider: React.FC<Props> = (props) => {
  const userId = "YMCCgTKFIqcnerqOZ05f";
  return (
    <AuthContext.Provider value={{ userId }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
