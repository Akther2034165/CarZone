import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ReviewCard from "../ReviewCard/ReviewCard";
const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://intense-stream-09981.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "goldenrod" }}>
          <span>R</span> <span>E</span> <span>V</span> <span>I</span>{" "}
          <span>E</span> <span>W</span> <span>S</span>
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {reviews?.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Review;
