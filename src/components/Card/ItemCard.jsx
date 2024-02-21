import React from "react";

function ItemCard(props) {
  return (
    <div className="w-full flex flex-col py-4">
      <div className="h-[8rem] w-[17rem] m-1 rounded-lg overflow-hidden">
        <img
          className="h-full w-full overflow-hidden object-center hover:scale-110 transition duration-500 cursor-pointer object-cover"
          src={props.imgLink}
          alt={props.name}
        />
      </div>
      <div>
        <h2 className="text-white font-bold mt-2">{props.name}</h2>
        <p className="text-gray-500">{props.price}</p>
      </div>
    </div>
  );
}

export default ItemCard;
