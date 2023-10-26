import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FaTrash } from 'react-icons/fa';

import './project.css';

import Projcard from '../../admin/project/Projcard';
// import { Cards } from "../constants/constant";

const Project = () => {
  const [data, setData] = useState([]);

  // const info = await axios
  //   .get("http://localhost:3001/post")
  //   .then((res) => res.data.post)
  //   .catch((err) => console.log(err));
  // setData(info);

  // const deleteProj = async (_id, title) => {
  //   if (window.confirm(`Delete ${title}`)) {
  //     const response = await axios.delete(`http://localhost:3001/post/${_id}`);
  //     console.log(response);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/post');
      const data = await response.json();

      setData(data?.post);
    };
    fetchData();
  }, []);
  //console.log(data);

  const card =
    data.length > 0 &&
    data.map((item) => {
      return (
        <div>
          <Projcard
            key={item._id}
            img={item.img}
            title={item.title}
            link={item.link}
            description={item.descripton}
          />
          {/* <FaTrash onClick={() => deleteProj(item._id, item.title)} /> */}
          {/* <FaBars onClick={() => updateProj()} /> */}
        </div>
      );
    });
  //console.log(data);

  return (
    <section name="project" className="proj">
      <div className="proj-main">
        <div className="proj-head-text">
          <h3 className="proj-head">projects</h3>
        </div>
        <div className="proj-flex">
          <div className="proj-card"> {card} </div>
        </div>

        {/* <Link to={'/new-proj'} className="proj-button">
          <button className="proj-new">New Project</button>
        </Link> */}
      </div>
    </section>
  );
};

export default Project;
