import React, { useEffect, useContext } from 'react';
import { MyCount } from './CountContext';

const Counter = () => {
    const { count } = useContext(MyCount);

    // Updates document title whenever count changes
    useEffect(() => {
        console.log("Count updated:", count);
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h2>Current Count: {count}</h2>
        </div>
    );
};

export default Counter;
