import React from "react";

const Wrapper = (props) => {
  return (
    <>
      <div className="row mb-3">
        {props.children}
      </div>
    </>
  );
};

export default Wrapper;
