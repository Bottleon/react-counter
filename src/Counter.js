import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [value, setValue] = useState(0);

  const onIncrease = () => setValue((value) => value + 1);
  const onDecrease = () => setValue((value) => value - 1);

  return (
    <div className={"counter"}>
      <strong>카운터</strong>
      <h1>{value}</h1>
      <input
        className={"counter-down"}
        type="button"
        value="-"
        onClick={onDecrease}
      />
      <input
        className={"counter-up"}
        type="button"
        value="+"
        onClick={onIncrease}
      />
    </div>
  );
};

export default React.memo(Counter);
