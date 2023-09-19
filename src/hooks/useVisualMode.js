
//Create and export a useVisualMode function in src/hooks/useVisualMode.js
// export default function useVisualMode(initial) {
//   const [mode, setMode] = useState(initial);
//   return { mode };
// }
  


//Create a transition function within useVisualMode. The function will take in a new mode and update the mode state with the new value.
// export default function useVisualMode(initial) {
//     const [mode, setMode] = useState(initial);
//     function transition(newMode){
//       setMode(newMode)
//     }
//     return { mode };
//   }
  

//Add a transitionproperty to the object that returns in useVisualMode
// export default function useVisualMode(initial) {
//     const [mode, setMode] = useState(initial);
  
//     function transition(newMode){
//       setMode(newMode)
//     }
  
//     return { mode, transition };
//   }
  
  
//

//Add an empty back() function to the Hook.
//You don't need to implement any logic for this function yet. 
//Be sure to add the back property to the object that useVisualMode returns, 
//just like you did with the transition() function.
// export default function useVisualMode(initial) {
//     const [mode, setMode] = useState(initial);
//     function transition(newMode) { /* ... */ }
//     function back() { /* ... */ }
//     return { mode, transition, back };
//   };
  


//We are initializing our history as an array with the first mode that gets passed to useVisualMode.
// export default function useVisualMode(initial) {
//     const [mode, setMode] = useState(initial);
//     const [history, setHistory] = useState([initial]); // This line is new!
//     // the rest of your code //
//   }
  
//Implement a way to add a new mode to the history state array.
//function transition(newMode){
//     setMode(newMode);
//     setHistory(prev => [...prev, newMode])
//   }

//Refactor your hook by removing the mode state, and set the mode property to be equal to history[history.length - 1].

import { useState } from "react";

export default function useVisualMode(initial) {
    const [mode, setMode] = useState(initial);
    const [history, setHistory] = useState([initial]);
  
    const transition = (val, replace = false) => {
        if (replace) {
          const fake = [...history];
          fake.pop(history.length - 1);
          setHistory([...fake]);
          setMode(history[history.length - 1]);
        }
        history.push(val);
        setHistory((prev) => [...prev, val]);
        setMode(val);
      };
  
    const back = () => {
        if (history.length - 1 >= 1) {
          const fake = [...history];
          fake.pop(history.length - 1);
          setHistory([...fake]);
          setMode(history[history.length - 1]);
        }
      };
  
      return { mode, transition, back };
  }
  
  
  
  
