import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

function Plant() {
  const[plants,setPlants] = useState([]);
  const getData = async() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
    const response = await axios.get("http://localhost:8080/api/v1/admin/plants/plant/all");
        setPlants(response.data);
        console.log("data",response.data);
  };
  const handleDelete = async(id) =>{
    console.log("Id:",id);
    if (window.confirm('Sure to Delete?')){
        const response = await axios.delete(`http://localhost:8080/api/v1/admin/plants/plant/delete/${id}`);
        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
      }
      getData();
    }
  useEffect(()=>{
      getData();
  },[]);
  return (
    <div>
    <AdminNavbar/>
      <div id="view_container">
        <h1 id="view_title">Plant Detail</h1>
        <Link to="/admin/addplant">
          <button id="addbtn">Add Plant</button>
        </Link>
        <Table id="view_table">
          <TableHead id="view_head">
            <TableRow>
              <TableCell>Plant ID</TableCell>
              <TableCell>Common Name</TableCell>
              <TableCell>Scientific Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Plant Family</TableCell>
              <TableCell>Plant Type</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Frost Tolerant</TableCell>
              <TableCell>Spacing</TableCell>
              <TableCell>Planting</TableCell>
              <TableCell>Feeding</TableCell>
              <TableCell>Harvesting</TableCell>
              <TableCell>Pests</TableCell>
              <TableCell>Disease</TableCell>
              <TableCell>Fertilization</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Plant Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="view_body">
            {plants &&
              plants.map((plant) => (
                <TableRow key={plant.plantId}>
                  <TableCell id="id">{plant.plantId}</TableCell>
                  <TableCell id="commonName">{plant.commonName}</TableCell>
                  <TableCell id="scientificName">{plant.scientificName}</TableCell>
                  <TableCell id="description">{plant.description}</TableCell>
                  <TableCell id="plantFamily">{plant.plantFamily}</TableCell>
                  <TableCell id="plantType">{plant.plantType}</TableCell>
                  <TableCell id="position">{plant.position}</TableCell>
                  <TableCell id="frostTolerant">{plant.frostTolerant}</TableCell>
                  <TableCell id="spacing">{plant.spacing}</TableCell>
                  <TableCell id="planting">{plant.planting}</TableCell>
                  <TableCell id="feeding">{plant.feeding}</TableCell>
                  <TableCell id="harvesting">{plant.harvesting}</TableCell>
                  <TableCell id="pests">{plant.pests}</TableCell>
                  <TableCell id="disease">{plant.disease}</TableCell>
                  <TableCell id="fertilization">{plant.fertilization}</TableCell>
                  <TableCell id="notes">{plant.notes}</TableCell>
                  <TableCell id="plantImage">{plant.plantImage} 
                  </TableCell>
                  <TableCell id="action">
                    <Link to={`/admin/updateplant/${plant.plantId}`}>
                      <button id="actions">Update</button>
                    </Link>
                    <button id="action-del" onClick={() => handleDelete(plant.plantId)} style={{marginTop:"10px"}}>
                      Delete!
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>

        </Table>
      </div>
    </div>
  );
}

export default Plant;
