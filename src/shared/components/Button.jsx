import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className={`relative m-1 rounded-xl p-2 focus:outline-none focus:ring-2 text-white text-nowrap hover:bg-highlight focus:ring-highlight focus:ring-offset-2 focus:ring-offset-gray-800 ${
        props.highlight
          ? "bg-highlight hover:text-gray-200 "
          : "bg-dark-secondary hover:text-dark-primary"
      } `}
    >
      <p className={`h-6 ${props.icon ? "" : "px-4"}`}>{props.name}</p>
    </button>
  );
}

export default Button;
