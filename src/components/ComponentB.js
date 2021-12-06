import HigherOrderComponent from "./HigherOrderComponent";

const ComponentB = ({ value, incrementHandler }) => {

  return (
    <div>
      <button onClick={incrementHandler}> Increment by 20 </button>
      <h2>{value}</h2>
    </div>
  );
};

export default HigherOrderComponent(ComponentB, 20);