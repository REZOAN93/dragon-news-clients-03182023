import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSumarry from "../NewsSumarry/NewsSumarry";

const CategoryNews = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.map((news) => (
        <NewsSumarry key={news._id} news={news}></NewsSumarry>
      ))}
    </div>
  );
};

export default CategoryNews;
