import React from "react";
//import Jlogo from "./Jlogo.jpg";

function ContactCard(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img src="http://placekitten.com/300/200" />
      <h3> {props.contact.name} </h3>
      <p> Phone: {props.contact.phone}</p>
      <p>email : {props.contact.email}</p>
    </div>
  );
}

export default ContactCard;

//<img src="http://placekitten.com/300/200" />
