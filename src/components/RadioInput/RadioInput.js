import React from "react";

function RadioInput({name, value, label, ...delegated}) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
              <input
                id={id}
                type="radio"
                name={name}
                value={value}
                {...delegated}
              />
                {label || value}
              </label>
  )
}

export default RadioInput;
