import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const card = filteredPlants.map(plant => {
    return <PlantCard key={plant.id} {...plant} />
  })
  return (
    <ul className="cards">{card}</ul>
  );
}

export default PlantList;
