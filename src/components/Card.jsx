import React, { useEffect, useState } from "react";

import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/forms");
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`/api/froms/${id}`);
      const data = response.data;
      console.log(data);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const editData = async (id) => {
    try {
      const response = await axios.put(`/api/froms/${id}`);
      const data = response.data;
      console.log(data);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Refresh</button>
      <h2>Data</h2>
      <ul>
        {data.map((document) => (
          <li key={document._id}>
            <h3>{document.title}</h3>
            <p>{document.content}</p>
            <button onClick={() => deleteData(document._id)}>Delete</button>
            <button onClick={() => editData(document._id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
