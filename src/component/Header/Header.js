import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <header className="Header">
        <h1>React App</h1>
        <nav>
          <Link to="/">Add Items To List</Link>
          <Link to="/FetchApi">GitHub</Link>
        </nav>
      </header>
    </div>
  );
};
