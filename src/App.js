import { useState } from 'react';
// 1. Build the UI from scratch
//    - include classes, dummy data, static state and logic that statically renders the component view
// 2. Add event listeners
//    - pass callback func in event handler so it's not immediately called
// 3. Add state to make component interactive
//    - create a new state
//    - use state w/event handlers in JSX
//    - update the state
// 4. Use conditional rendering to show/hide the component
//    - wrap all the JSX in JavaScript mode and use the state for conditional rendering

// * Use fragments to render components if you have more than one root element.
// * Fragments don't appear in the DOM tree.
// * Update state based on current state
// * Always update state with a callback function by passing the current state into the setState.
// * State is isolated inside each component meaning 2 components with the same state are independent.
// * React is declarative meaning we tell the UI what to do instead of manipulating the DOM
// * Create state when your want to track a peice of data.
// * Create a piece of state whenever something in the component is dynamic. (ie. hiding/displaying modal window)
// * Do not use state for variables that don't trigger component re-renders.
// * When creating state imagine the view changing over time.

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [ step, setStep ] = useState(1);
  const [ isOpen, setIsOpen ] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((prevState) => prevState - 1);
  }

  const handleNext = () => {
    if (step < 3) setStep((prevState) => prevState + 1);
  }

  const handleClose = () => {
    // console.log("close the window");
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
    
          <p className="message">Step {step}: {messages[step - 1]}</p>
    
          <div className="buttons">
            <button 
              style={{ backgroundColor: "#7950f2", color:'fff'}}
              onClick={handlePrevious}  
            >
              Previous
            </button>
            <button 
              style={{ backgroundColor: "#7950f2", color:'fff'}}
              onClick={handleNext}   
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}