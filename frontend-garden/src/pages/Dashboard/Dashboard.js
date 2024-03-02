import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import "../../assets/css/Dashboard.css"
import { useState } from 'react';
import { selectUser } from '../Redux/Userslice';
import axios from 'axios';

function Dashboard() {
  const [plant, setPlant] = useState([]);
  const user = useSelector(selectUser);
  const mail = user ? user.email : "Guest";

  const getData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
    const response = await axios.get("http://localhost:8080/api/v1/user/plants/plant/all");
    setPlant(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className='dashboard'>
        <h2 className="dashboard-title">Welcome {mail}!!</h2>
        <h2 className="dashboard-head">Featured Products</h2>
        <div className="product-show">
          {plant && plant.map((product) => (
            <div className="product-all-display" key={product.plantId}>
              <img src={product.plantImage} alt={product.commonName} className="st" />
              <h3>{product.commonName}</h3>
              <p className="product-desc">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;