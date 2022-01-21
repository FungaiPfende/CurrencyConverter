import React, { createContext, useState } from "react";

export const ConversionContext = createContext();

// ConversionContext.Provider -> provides the app with the data and state it needs to use
// ConversionContext.Consumer -> grabs the data from the provider and uses it

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
