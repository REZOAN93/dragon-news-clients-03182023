import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./NewsSumarry.css";
import Image from "react-bootstrap/Image";
import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { BsFillBookmarkFill, BsStarFill } from "react-icons/bs";

const NewsSumarry = (props) => {
  const { title, details, _id, image_url, author, total_view, rating } =
    props.news;
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            roundedCircle
            className="me-3"
            style={{ width: "45px" }}
            src={author?.img}
          ></Image>
          <div>
            <>{author.name}</>
            <br />
            <>{author.published_date}</>
          </div>
        </div>
        <div>
          <FaShareAlt className="me-3" />
          <BsFillBookmarkFill />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Img variant="top" src={image_url} /> */}
        <Card.Text>
          {details.length < 150 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250) + "..."}{" "}
              <Link id="readmorelink" to={`/news/${_id}`}>
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <>
            <BsStarFill id="starrating" className="me-2" /> {rating.number}
          </>
        </div>

        <div>
          <>
            <FaRegEye className="me-2" /> {total_view}
          </>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSumarry;
