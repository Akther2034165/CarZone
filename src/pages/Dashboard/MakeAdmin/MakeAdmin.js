import { TextField, Button, Alert, Typography } from "@mui/material";
import React, { useState } from "react";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://intense-stream-09981.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="adminPart">
      <Typography variant="h4">MAKE AN USER ADMIN</Typography>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          type="email"
          label="Email"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <br /> <br />
        <Button type="submit" variant="contained" sx={{ width: "50%" }}>
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert severity="success" style={{ height: "45px" }}>
          Made Admin Successfully
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
