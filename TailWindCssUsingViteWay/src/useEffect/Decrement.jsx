import React, { useContext } from 'react';
import { MyCount } from './CountContext';

const Decrement = () => {
    const { count, setCount } = useContext(MyCount);

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Decrement;


