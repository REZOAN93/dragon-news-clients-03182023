import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './News.css'

const News = () => {
  const news = useLoaderData();
  const { title, details, _id, image_url, author, total_view, rating,category_id } = news;
  return (
    <Card className="mb-5">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <div className="d-flex justify-content-end">
        <Link id="backlink" to={`/category/${category_id}`}>Back to Category</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default News;
