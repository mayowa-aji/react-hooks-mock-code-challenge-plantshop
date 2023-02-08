import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((response) => response.json())
    .then((data) => setPlants(data))
  }, [])


  return (
    <main>
      <NewPlantForm
        setPlants={setPlants}/>
      <Search
       search ={search}
       setSearch={setSearch}/>
      <PlantList
        plants={plants}
        search={search}
         />
    </main>
  );
}

export default PlantPage;
