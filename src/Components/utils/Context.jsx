import { createContext, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { reducer } from "../../reducer/reducer";

const ContextGlobal = createContext();

const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = { theme: "light", dentists: [], favs: storedFavs };

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      dispatch({ type: "GET_DENTISTS", payload: res.data });
      console.log(res.data);
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useDentistStates = () => useContext(ContextGlobal);
