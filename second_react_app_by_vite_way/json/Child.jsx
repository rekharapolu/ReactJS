import React from 'react';

const Child = ({ jsonn }) => { 
    console.log(jsonn);

    return (
        <>
            {jsonn && jsonn.map((data, index) => (
                <div key={index}>
                    <h3>{data.name}</h3>
                    <h3>{data.age}</h3>
                    <h3>{data.secretIdentity}</h3>
                    <h3>{data.powers.join(', ')}</h3>
                </div>
            ))}
        </>
    );
};

export default Child;

