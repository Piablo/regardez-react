import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Administration</h1>
    <p>This will be the home page for the administrator</p>

    <Link to="about" className="btn btn-primary btn-lg">
      About Page
    </Link>
  </div>
);

export default HomePage;
