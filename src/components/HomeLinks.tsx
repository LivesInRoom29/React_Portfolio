import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

interface HomeLinkProps {
  value: string,
  imagename: string
}

const HomeLinks = (props: HomeLinkProps) => {

  return (
    <div>
      <Link to={`/${props.value}`} className="home-button">
        <Button className="home-button">
          <img src={`${process.env.PUBLIC_URL}/img/${props.imagename}.png`} alt={props.imagename} className="home-img"></img>
          <h3>{props.value}</h3>
        </Button>
      </Link>

    </div>
  )
}

export default HomeLinks;