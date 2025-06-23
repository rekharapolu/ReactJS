import React, { useState } from 'react';

const Word = () => {
    let [word, setWord] = useState("Cheetaah");
console.log(word);

let ToUpperCase=()=>{
    setWord(word.toUpperCase()); 
}

  return (
    <div>
        <h1>{word}</h1>
        <button onClick={ToUpperCase}>Submit</button>
    </div>
  )
}

export default Word