import React from "react";
import { Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
const ReviewCard = (props) => {
  const { name, img, des, rating } = props.review;
  const cardStyle = {
    border: "2px solid #3498db",
    width: "350px",
    padding: "20px",
    margin: "15px",
    borderRadius: "10px",
  };
  return (
    <Col style={cardStyle} className="review-card">
      <div style={{ height: "150px" }}>
        <p>{des}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", mt: 5 }}>
        <img
          width="80px"
          height="80px"
          className="rounded-circle"
          src={img}
          alt=""
        />
        <div style={{ marginLeft: "15px" }}>
          <div>
            <h5 style={{ color: "#3498db", fontWeight: 600 }}>{name}</h5>
          </div>
          <div>
            <h6 style={{ margin: "0" }}>Rating: {rating}</h6>
            <ReactStars
              isHalf={true}
              edit={false}
              size={24}
              color="#666"
              count={Number(rating)}
              value={Number(rating)}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ReviewCard;
