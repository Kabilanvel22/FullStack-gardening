import React, { useEffect, useState } from 'react';
import "../../../assets/css/Addplant.css"
import NavBar from '../../../pages/NavBar/NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../AdminNavbar/AdminNavbar';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

function PlantForm() {
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [description, setDescription] = useState('');
  const [plantFamily, setPlantFamily] = useState('');
  const [plantType, setPlantType] = useState('');
  const [position, setPosition] = useState('');
  const [frostTolerant, setFrostTolerant] = useState('');
  const [spacing, setSpacing] = useState('');
  const [planting, setPlanting] = useState('');
  const [feeding, setFeeding] = useState('');
  const [harvesting, setHarvesting] = useState('');
  const [pests, setPests] = useState('');
  const [disease, setDisease] = useState('');
  const [fertilization, setFertilization] = useState('');
  const [notes, setNotes] = useState('');
  const [plantImage, setPlantImage] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  const {id} = useParams();

  const details = {
    commonName, scientificName, description, plantFamily, plantType,
    position, frostTolerant, spacing, planting, feeding, harvesting,
    pests, disease, fertilization, notes, plantImage
  };
  const plantData = async() => {
    const response = await axios.post("http://localhost:8080/api/v1/admin/plants/plant/add",details);
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
    console.log(response.data);
  };

  const updateData = async() => {
    const response = await axios.put(`http://localhost:8080/api/v1/admin/plants/plant/update/${id}`,details);
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
    console.log(response.data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/admin/plants/plant/getplant/${id}`);
        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
        setCommonName(response.data.commonName);
        setDescription(response.data.description);
        setDisease(response.data.disease);
        setFeeding(response.data.feeding);
        setFertilization(response.data.fertilization);
        setFrostTolerant(response.data.frostTolerant);
        setHarvesting(response.data.harvesting);
        setNotes(response.data.notes);
        setPests(response.data.pests);
        setPlantFamily(response.data.plantFamily);
        setPlantImage(response.data.plantImage);
        setPlantType(response.data.plantType);
        setPlanting(response.data.planting);
        setPosition(response.data.position);
        setScientificName(response.data.scientificName);
        setSpacing(response.data.spacing);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!commonName.trim()) {
      validationErrors.commonName = "Common Name is required";
    }

    if (!scientificName.trim()) {
      validationErrors.scientificName = "Scientific Name is required";
    }

    if (!description.trim()) {
      validationErrors.description = "description is required";
    }
    if (!plantFamily.trim()) {
      validationErrors.plantFamily = "plantFamily is required";
    }
    if (!plantType.trim()) {
      validationErrors.plantType = "plantType is required";
    }
    if (!position.trim()) {
      validationErrors.position = "position is required";
    }
    if (!frostTolerant.trim()) {
      validationErrors.frostTolerant = "frostTolerant is required";
    }
    if (!spacing.trim()) {
      validationErrors.spacing = "spacing is required";
    }
    if (!planting.trim()) {
      validationErrors.planting = "planting is required";
    }
    if (!feeding.trim()) {
      validationErrors.feeding = "feeding is required";
    }
    if (!harvesting.trim()) {
      validationErrors.harvesting = "harvesting is required";
    }
    if (!pests.trim()) {
      validationErrors.pests = "pests is required";
    }
    if (!disease.trim()) {
      validationErrors.disease = "disease is required";
    }
    if (!fertilization.trim()) {
      validationErrors.fertilization = "fertilization is required";
    }
    if (!notes.trim()) {
      validationErrors.notes = "notes is required";
    }
    if (!plantImage.trim()) {
      validationErrors.plantImage = "plantImage is required";
    }

    

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if(id){
            updateData();
            nav("/admin/plantlist");

    }else{
          plantData();
          nav("/admin/plantlist");
    }
       
    }
  }

  const title = () => {

    if(id){
        return <h1>Update Plant</h1>
    }else{
        return <h1>Add Plant</h1>
    }
}

  return (
    <>
    <AdminNavbar/>
      <div className="add-plant">
      {title()}
      <h3 className="add-plant-heading">Plant Details</h3>
        <div className="add-plant-container">
          <div className="add-plant-head">
            <div className="row" >
              <div id="cm6">
                <form className="add-plant-form">
                  <div className="mb-3">
                    <label>Common Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={commonName}
                      onChange={(e) => setCommonName(e.target.value)}
                      placeholder="Enter common name"
                    />
                    <h6 className='error'>{errors.commonName && <span>{errors.commonName}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Scientific Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={scientificName}
                      onChange={(e) => setScientificName(e.target.value)}
                      placeholder="Enter scientific name"
                    />
                    <h6 className='error'>{errors.scientificName && <span>{errors.scientificName}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter the Description"
                    />
                    <h6 className='error'>{errors.description && <span>{errors.description}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Plant Family</label>
                    <input
                      type="text"
                      className="form-control"
                      value={plantFamily}
                      onChange={(e) => setPlantFamily(e.target.value)}
                      placeholder="Enter Plant Family"
                    />
                    <h6 className='error'>{errors.plantFamily && <span>{errors.plantFamily}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Plant Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={plantType}
                      onChange={(e) => setPlantType(e.target.value)}
                      placeholder="Enter Plant Type"
                    />
                    <h6 className='error'>{errors.plantType && <span>{errors.plantType}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Position</label>
                    <input
                      type="text"
                      className="form-control"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      placeholder="Enter Position"
                    />
                    <h6 className='error'>{errors.position && <span>{errors.position}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Frost Tolerant</label>
                    <input
                      type="text"
                      className="form-control"
                      value={frostTolerant}
                      onChange={(e) => setFrostTolerant(e.target.value)}
                      placeholder="Enter Frost Tolerant"
                    />
                    <h6 className='error'>{errors.frostTolerant && <span>{errors.frostTolerant}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Spacing</label>
                    <input
                      type="text"
                      className="form-control"
                      value={spacing}
                      onChange={(e) => setSpacing(e.target.value)}
                      placeholder="Enter Spacing"
                    />
                    <h6 className='error'>{errors.spacing && <span>{errors.spacing}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Planting</label>
                    <input
                      type="text"
                      className="form-control"
                      value={planting}
                      onChange={(e) => setPlanting(e.target.value)}
                      placeholder="Enter Planting"
                    />
                    <h6 className='error'>{errors.planting && <span>{errors.planting}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Feeding</label>
                    <input
                      type="text"
                      className="form-control"
                      value={feeding}
                      onChange={(e) => setFeeding(e.target.value)}
                      placeholder="Enter Feeding"
                    />
                    <h6 className='error'>{errors.feeding && <span>{errors.feeding}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Harvesting</label>
                    <input
                      type="text"
                      className="form-control"
                      value={harvesting}
                      onChange={(e) => setHarvesting(e.target.value)}
                      placeholder="Enter Harvesting"
                    />
                    <h6 className='error'>{errors.harvesting && <span>{errors.harvesting}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Pests</label>
                    <input
                      type="text"
                      className="form-control"
                      value={pests}
                      onChange={(e) => setPests(e.target.value)}
                      placeholder="Enter Pests"
                    />
                    <h6 className='error'>{errors.pests && <span>{errors.pests}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Disease</label>
                    <input
                      type="text"
                      className="form-control"
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                      placeholder="Enter Disease"
                    />
                    <h6 className='error'>{errors.disease && <span>{errors.disease}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Fertilization</label>
                    <input
                      type="text"
                      className="form-control"
                      value={fertilization}
                      onChange={(e) => setFertilization(e.target.value)}
                      placeholder="Enter Fertilization"
                    />
                    <h6 className='error'>{errors.fertilization && <span>{errors.fertilization}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Notes</label>
                    <input
                      type="text"
                      className="form-control"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Enter Notes"
                    />
                    <h6 className='error'>{errors.notes && <span>{errors.notes}</span>}</h6>
                  </div>
                  <div className="mb-3">
                    <label>Plant Image</label>
                    <input
                      type="text"
                      className="form-control"
                      value={plantImage}
                      onChange={(e) => setPlantImage(e.target.value)}
                      placeholder="Enter Plant Image URL"
                    />
                    <h6 className='error'>{errors.plantImage && <span>{errors.plantImage}</span>}</h6>
                  </div>
                  <button className="plant-add-sub " onClick={handleSubmit} id="submit-btn" type="submit">
                    Submit
                  </button>
                  <button className="plant-add-can" id="cancel-btn">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlantForm;
