import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "../styles/About.css";
import Card from "../components/Card";
import todoApp from "../assets/todolist.jpg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="about-me">
      <div className="skills">
        <h1>Meine Skills</h1>
        <Card />
      </div>
      <hr/>
      <div className="project">
        <h1>Mein Projekt</h1>
        <div className="project-card">
            <img className="todo-image" src={todoApp} />
    <h2>Was</h2>
    <p>asmdkalsmdalskdalskdmals
      asdkasdmaslkdmaslmdklasmdasd
      asodkasdlmasldmkasldmakldmas
      asdoasdjkldfdslakfmklsdmfasdf
      sdfoisdfjsdaklfmksdlmfklasdmfasd
      fasdiofasdjfklsdmflasmfklmasdf
      asdfasodifjasldkfmaslmflsmkfdksms
      dfsdkfsdlmfaslmkf
    </p>
    <hr/>
    <h2>Warum</h2>
    <p>asmdkalsmdalskdalskdmals
      asdkasdmaslkdmaslmdklasmdasd
      asodkasdlmasldmkasldmakldmas
      asdoasdjkldfdslakfmklsdmfasdf
      sdfoisdfjsdaklfmksdlmfklasdmfasd
      fasdiofasdjfklsdmflasmfklmasdf
      asdfasodifjasldkfmaslmflsmkfdksms
      dfsdkfsdlmfaslmkf
    </p>
    <hr/>
    <h2>Womit</h2>
    <p>asmdkalsmdalskdalskdmals
      asdkasdmaslkdmaslmdklasmdasd
      asodkasdlmasldmkasldmakldmas
      asdoasdjkldfdslakfmklsdmfasdf
      sdfoisdfjsdaklfmksdlmfklasdmfasd
      fasdiofasdjfklsdmflasmfklmasdf
      asdfasodifjasldkfmaslmflsmkfdksms
      dfsdkfsdlmfaslmkf
    </p>
    <hr/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}