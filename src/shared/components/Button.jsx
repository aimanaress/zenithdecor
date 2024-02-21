import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className={
        props.highlight
          ? "relative m-1 rounded-xl p-2 focus:outline-none focus:ring-2 bg-highlight text-white text-nowrap hover:text-gray-200 hover:bg-highlight focus:ring-highlight focus:ring-offset-2 focus:ring-offset-highlight"
          : "relative m-1 rounded-xl p-2 focus:outline-none focus:ring-2 bg-dark-secondary text-white text-nowrap hover:text-dark-primary hover:bg-highlight focus:ring-highlight focus:ring-offset-2 focus:ring-offset-highlight"
      }
    >
      <p className="h-6 px-4">{props.name}</p>
    </button>
  );
}

export default Button;
