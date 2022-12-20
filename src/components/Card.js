
import "../styles/Card.css";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css3.svg";
import jsLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import muiLogo from "../assets/material-ui.svg";
import expressLogo from "../assets/express-js.svg";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <span>HTML</span>
        <img src={htmlLogo} />
      </div>
      <div className="card">
      <span>CSS</span>
        <img src={cssLogo} />
      </div>
      <div className="card">
      <span>Javascript</span>
        <img className="javascript" src={jsLogo} />
      </div>
      <div className="card">
      <span>React</span>
        <img src={reactLogo} />
      </div>
      <div className="card">
      <span>MUI</span>
        <img src={muiLogo} />
      </div>
      <div className="card">
      <span>Express.js</span>
        <img src={expressLogo} />
      </div>
    </div>
  );
}
