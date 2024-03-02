import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import StyledInputBase from '@mui/material/InputBase';
import "../../assets/css/Grow.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Growing() {

  const [searchQuery, setSearchQuery] = useState('');
  const [plant, setPlant] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = plant.filter(plant =>
        plant.commonName.toLowerCase().includes(query)
      );
      setFilteredPlants(filtered);
    } else {
      setFilteredPlants([]);
    }
  }

  const getData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
    const response = await axios.get("http://localhost:8080/api/v1/user/plants/plant/all");
    setPlant(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grow-container">
        <div className="grow-header">
          <h4 className="grow-search">Search</h4>
          <SearchIcon />
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grow-mid-header">
          {(searchQuery ? filteredPlants : plant).map((plants) => (
            <div className="grow-all-display" key={plants.plantId}>
              <Link to={`/plant/${plants.plantId}`}>
                <img src={plants.plantImage} alt={plants.commonName} className="st-grow" />
              </Link>
              <h3 className="grow-h3-name">{plants.commonName}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Growing;
