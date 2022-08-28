import React from "react";

function Modal(props) {
  return (
    <div
      className=""
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className=""
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
