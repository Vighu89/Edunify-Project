
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/schools')
      .then(response => {
        setSchools(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="school-list">
      {schools.map((school) => (
        <div key={school.id} className="school-card">
          <img src={`/schoolImages/${school.image}`} alt={school.name} />
          <h3>{school.name}</h3>
          <p>{school.address}</p>
          <p>{school.city}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowSchools;

