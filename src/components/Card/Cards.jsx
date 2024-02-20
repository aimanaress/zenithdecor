import React from "react";
import ItemCard from "./ItemCard";

function Cards() {
  return (
    <div className="flex flex-row justify-between items-center justify-center bg-background py-6">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default Cards;
