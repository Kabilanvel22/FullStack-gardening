import React, { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';
import "../../assets/css/Plant1.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ChilliGrowing() {
  const [plants, setPlants] = useState([]);
  const { id } = useParams();
  const GetAllPlants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/plants/plant/getplant/${id}`
      );
      setPlants(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  useEffect(() => {
    GetAllPlants();
  }, []);
  return (
    <>
      <div className="plant-container">
            <main className="plant-main">
              <h4 className="plant-header">A Comprehensive Guide to Growing {plants.commonName}</h4>

              <div className="plant-section">
              <img src={plants.plantImage} alt={plants.commonName} className="stss-grow" />
              </div>
              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-sun"></i> ScientificName</span>
                <p className="plant-para">{plants.scientificName}</p>
              </div>
              <div className="plant-section">
              <span className="plant-header-sub"><i className="fas fa-arrows-alt-h"></i> PlantFamily</span>
              <p className="plant-para">{plants.plantFamily}</p>
              </div>
              
              <div className="plant-section">
              <span className="plant-header-sub"><i className="fas fa-pepper-hot"></i> PlantType</span>
              <p className="plant-para">{plants.plantType}</p>
              </div>
              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-snowflake"></i>Description</span>
                <p className="plant-para">{plants.description}</p>
              </div>
              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-snowflake"></i>Position</span>
                <span className="plant-header-sub">How much sun do {plants.commonName} need?</span>
                <p className="plant-para">{plants.position}</p>
              </div>

              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-arrows-alt-h"></i> FrostTolerant</span>
                <span className="plant-header-sub">Are {plants.commonName} frost tolerant?</span>
                <p className="plant-para">{plants.frostTolerant}</p>
              </div>

              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-seedling"></i>Spacing</span>
                <span className="plant-header-sub">How much space do {plants.commonName} need?</span>
                <p className="plant-para">
                  {plants.spacing}
                </p>
              </div>

              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-bug"></i> Planting</span>
                <span className="plant-header-sub">When should I plant {plants.commonName}?</span>
                <p className="plant-para">{plants.planting}</p>
              </div>

              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-sun"></i> Feeding</span>
                <span className="plant-header-sub">What do I feed {plants.commonName}?</span>
                <p className="plant-para">{plants.feeding}</p>
              </div>

              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-bug"></i>Harvesting</span>
                <span className="plant-header-sub">When can I harvest {plants.commonName}?</span>
                <p className="plant-para">{plants.harvesting}</p>
              </div>

              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-biohazard"></i> Pests</span>
                <span className="plant-header-sub">What pests do {plants.commonName} get?</span>
                <p className="plant-para">{plants.pests}</p>
              </div>

              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-bug"></i> Diseases</span>
                <span className="plant-header-sub">What diseases do {plants.commonName} get?</span>
                <p className="plant-para">{plants.disease}</p>
              </div>
              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-seedling"></i> Fertilization</span>
                <span className="plant-header-sub">What Fertilizer do {plants.commonName} need?</span>
                <p className="plant-para">{plants.fertilization}</p>
              </div>
              <div className="plant-section">
                <span className="plant-header-sub"><i className="fas fa-sticky-note"></i> Notes</span>
                <span className="plant-header-sub">Is there anything else I need to know about {plants.commonName}?</span>
                <p className="plant-para">{plants.notes}</p>
              </div>
            </main>
      </div>
    </>
  );
}

export default ChilliGrowing;
