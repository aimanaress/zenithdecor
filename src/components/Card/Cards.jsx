import React from "react";
import ItemCard from "./ItemCard";

function Cards() {
  const items = [
    {
      id: "1",
      name: "Oakwood Dining Table",
      price: "$1200",
      imgLink:
        "https://images.unsplash.com/photo-1636138389529-d35a2a348dc1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      name: "Leather Lounge Chair",
      price: "$850",
      imgLink:
        "https://images.unsplash.com/photo-1488901512066-cd403111aeb2?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      name: "Walnut Sideboard",
      price: "$750",
      imgLink:
        "https://images.unsplash.com/photo-1604062529349-84280dbff887?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      name: "Linen Sofa",
      price: "$2000",
      imgLink:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-row justify-between items-center justify-center bg-background py-6">
      {items.map((item) => {
        return (
          <ItemCard
            name={item.name}
            price={item.price}
            imgLink={item.imgLink}
          />
        );
      })}
    </div>
  );
}

export default Cards;
