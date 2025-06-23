import React, { createContext, useState } from "react";

// Create Context
export const MyCount = createContext();

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <MyCount.Provider value={{ count, setCount }}>
            {children}
        </MyCount.Provider>
    );
};

export default CountProvider;
