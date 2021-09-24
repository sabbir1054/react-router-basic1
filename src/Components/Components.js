import React, { useEffect } from "react";
import {  Link  } from "react-router-dom";
import Blog from "./Blog";

const Components = () => {
  // const [infos, setInfos] = useState([]);
  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    
      <div>
          <h1>Home Page NAvigation Below</h1>
          <ul>
              <li><Link to='/blog'>Blog</Link> </li>
              <li><Link to='/contact'>Contact</Link> </li>
              <li><Link to= '/home'>Home Page</Link> </li>
          </ul>

      </div>

      
    
  );
};

export default Components;
