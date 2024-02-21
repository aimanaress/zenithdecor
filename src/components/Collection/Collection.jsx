import React from "react";
import CollectionCard from "./CollectionCard";

function Collection() {
  const collections = [
    {
      id: "1",
      title: "Summer Collection",
      subtitle: "Experience the warmth of Scandinavian design",
      imgLink:
        "https://images.unsplash.com/photo-1583845112239-97ef1341b271?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Explore Collection",
    },
    {
      id: "2",
      title: "Work From Home Essentials",
      subtitle: "Comfort and functionality combined",
      imgLink:
        "https://images.unsplash.com/photo-1637580681839-6e3ed197ca93?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Shop Now",
    },
  ];
  return (
    <div>
      <h2 className="font-bold text-3xl text-white py-6">
        Featured Collections
      </h2>
      {collections.map((collection) => {
        return (
          <CollectionCard
            title={collection.title}
            subtitle={collection.subtitle}
            imgLink={collection.imgLink}
            cta={collection.cta}
          />
        );
      })}
    </div>
  );
}

export default Collection;
