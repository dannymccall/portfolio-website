import React from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";


interface TypewriterProps  {
    words: string[];
    loop?: number;
    deleteSpeed?: number;
    typeSpeed?: number;
    delaySpeed?: number
    handleDone: (text: string) => void
}
const TypewriterComponent = ({words, loop=1, deleteSpeed=50, typeSpeed=70, delaySpeed=1000, handleDone}: TypewriterProps) => {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

//   const handleDone = (text: string) => {
//     console.log({text})
//   };


  return (
    <Typewriter
      words={words}
      loop={loop}
      cursor
      cursorStyle="_"
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
      onLoopDone={() => handleDone(words.join(",").replace(",", " "))}
      onType={handleType}
    
      
    />
  );
};

export default TypewriterComponent;
