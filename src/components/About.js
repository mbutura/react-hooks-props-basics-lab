import React from "react";
import Links from "./Links"

function About(props) {
  return (
    <div id="about">
      <h3>About Me</h3>
      {((props.bio !== undefined)&&(props.bio !== ""))&&<p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
