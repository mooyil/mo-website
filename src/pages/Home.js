import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import Card from "../components/Card";
import "../styles/Home.css"

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, mein Name ist Muhammed</h2>
        <div className="prompt">
          <p>Ich bin ein Web Entwickler</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
    </div>
  );
}
