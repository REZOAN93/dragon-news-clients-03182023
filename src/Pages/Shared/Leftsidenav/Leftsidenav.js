import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Leftsidenav.css";

const Leftsidenav = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://dragon-news-server-03182023.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="category-list">
      {user.map((user) => (
        <p id="pcategory" key={user.name}>
          <Link id="link-category" to={`/category/${user.id}`}>
            {user.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Leftsidenav;
