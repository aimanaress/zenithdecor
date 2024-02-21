import React from "react";

function ItemCard(props) {
  return (
    <div className="m-1">
      <div>
        <img
          className="h-[8rem] w-[17rem] overflow-hidden rounded-lg object-cover object-center"
          src={props.imgLink}
          alt={props.name}
        />
        <h2 className="text-white font-bold mt-2">{props.name}</h2>
        <p className="text-gray-500">{props.price}</p>
      </div>
    </div>
  );
}

export default ItemCard;
