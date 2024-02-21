import React from "react";
import CollectionCard from "./CollectionCard";

function Collection() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-white py-6">
        Featured Collections
      </h2>
      <CollectionCard />
      <CollectionCard />
    </div>
  );
}

export default Collection;
