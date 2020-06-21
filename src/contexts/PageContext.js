import React, { useState, createContext } from 'react';

// Create Context Object
export const PageContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const PageContextProvider = (props) => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <PageContext.Provider value={[currentPage, setCurrentPage]}>
      {props.children}
    </PageContext.Provider>
  );
};
