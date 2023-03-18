import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSumarry from "../Shared/NewsSumarry/NewsSumarry";

const AllNews = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.map((news) => (
        <NewsSumarry key={news._id} news={news}></NewsSumarry>
      ))}
    </div>
  );
};

export default AllNews;
