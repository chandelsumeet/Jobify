import { useContext, useState, createContext, useReducer } from "react";
import reducer from "../context/reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./action";
const initialStore = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStore);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 1000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useAppContext };
