import { useState } from "react";

const HigherOrderComponent = (Component, incrementValue) => {

  const HocFunct = () => {
    // Using State Hook to add state to this function component
    // useState returns a pair of values. the current state = value and a function that updates
    // [] is using "array destructuring"
    const [value, setValue] = useState(0);
    const incrementHandler = () => {
      setValue(value + incrementValue);
    };

    return <Component value={value} incrementHandler={incrementHandler} />
  };

  return HocFunct;

};

export default HigherOrderComponent;