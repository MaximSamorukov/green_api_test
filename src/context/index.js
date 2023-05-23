import { createContext, useState } from "react";

const AppContext = createContext(null);

export default AppContext;

export const useAppContext = () => {
  const [state, setState] = useState("register");
  const init = {
    state,
    setState,
  };
  return init;
};
