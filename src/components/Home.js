import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <Card style={{ height: "29vh", maxWidth: "500px", margin: "0 auto" }}>
        <Card.Body className="text-center">
          <h1 className="text-center mb-auto">Profile</h1>
          <h3>
            <i>Welcome back!</i>{" "}
          </h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser && currentUser.email}

          <div
            className="w-100 text-center mt-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="link" onClick={handleLogOut}>
              Log Out
            </Button>
          </div>
        </Card.Body>

        {/* <div className="w-10  text-center mb-3">
            <Button variant="link" href="/guidelines">
              Guidelines
            </Button>
          </div> */}
      </Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="w-30 text-center mt-3 mr-2 ">
          <Button href="/web-dev-quiz">Quiz On Web Development</Button>
        </div>
        <div className="w-30 text-center mt-3 mx-2">
          <Button href="/java-quiz">JAVA QUIZ</Button>
        </div>
        <div className="w-30 text-center mt-3 ml-2">
          <Button href="/python-quiz">Python QUIZ</Button>
        </div>
      </div>
    </>
  );
}
