import React, { useContext } from 'react';
import { MyCount } from './CountContext';

const Increment = () => {
    const { count, setCount } = useContext(MyCount);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Increment;
