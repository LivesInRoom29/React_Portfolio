import React from "react";
import Button from "react-bootstrap/Button";
// import bee from "../assets/img/bee.png";
// import honeypot from "../assets/img/honeypot.png";

interface HomeLinkProps {
  value: string,
  imagename: string //not using this at the moment - may try to change images on links
}

const HomeLinks = (props: HomeLinkProps) => {
  // let image = props.imagename === "honeypot" ? honeypot : bee;
  // let imgAlt = props.imagename === "honeypot" ? "honeypot" : "bee";

  return (
    <div>
    <Button href={`/${props.value}`} className="home-button">
      <img src={`./img/${props.imagename}.png`} alt={props.imagename} className="home-img"></img>
      <h3>{props.value}</h3>
    </Button>
  </div>
  )
}

export default HomeLinks;