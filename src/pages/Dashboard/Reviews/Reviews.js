import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
const Reviews = () => {
  const [userReview, setUserReivew] = useState({});
  const { user } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...userReview };
    newUser[field] = value;
    newUser.name = user?.displayName;
    setUserReivew(newUser);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://intense-stream-09981.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Send Successfully!", "", "success");
          e.target.reset();
        }
      });
  };
  const textArea = {
    height: "100px",
    outline: "none",
    border: "2px solid #3498db",
    width: "100%",
    padding: "5px",
  };

  return (
    <div className="pt-3">
      <Container>
        <div className="form-area">
          <h2 className="text-center mb-4 fw-bold" style={{ color: "black" }}>
            CUSTOMER REVIEW
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              disabled
              defaultValue={user.displayName}
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              onBlur={handleBlur}
              type="text"
              name="img"
              placeholder="Image URL"
              required
            />
            <input
              onBlur={handleBlur}
              type="text"
              name="rating"
              placeholder="Rating"
              required
            />
            <textarea
              style={textArea}
              onBlur={handleBlur}
              type="text"
              name="des"
              placeholder="Description"
              required
            />
            <Button type="submit" className="mt-2">
              Send Review
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
