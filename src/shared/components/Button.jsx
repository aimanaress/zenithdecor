import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className={
        props.highlight
          ? "relative m-1 rounded-xl p-2 focus:outline-none focus:ring-2 bg-highlight text-white hover:text-dark-primary hover:bg-highlight focus:ring-highlight focus:ring-offset-2 focus:ring-offset-gray-800"
          : "relative m-1 rounded-xl p-2 focus:outline-none focus:ring-2 bg-dark-secondary text-white hover:text-dark-primary hover:bg-highlight focus:ring-highlight focus:ring-offset-2 focus:ring-offset-gray-800"
      }
    >
      <p className="h-6 w-20">{props.name}</p>
    </button>
  );
}

export default Button;
