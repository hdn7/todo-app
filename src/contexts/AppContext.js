import React, { useState, createContext, useReducer } from 'react';
import { initialState, tasksReducer } from '../reducers/tasksReducer';

// Create Context Object
export const AppContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = (props) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <AppContext.Provider value={{ page: [currentPage, setCurrentPage], tasks: [state, dispatch] }}>
      {props.children}
    </AppContext.Provider>
  );
};
