import React from "react";

const Input = ( props ) => {

  return (
    <>
      <input
        type={props.type}
        className={props.className}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        required
      />
    </>
  );
};

export default Input;
