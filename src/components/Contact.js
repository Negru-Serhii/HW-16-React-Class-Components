import React, { Component } from "react";
import "./style.css";
import male from "./img/male.png";
import female from "./img/female.png";
import unknown from "./img/hz.png";

class Contact extends Component {
  render() {
    const { firstName, lastName, phone, gender } = this.props;
    let icon = "";
    if (gender === "male") {
      icon = male;
    } else {
      if (gender === "female") {
        icon = female;
      } else {
        icon = unknown;
      }
    }
    return (
      <div className="contact-wrapper">
        <img className="gender-picture" src={icon} alt={gender} />
        <div className="contact-info">
          <p>
            {firstName} {lastName}
          </p>
          <p className="phone-number">{phone}</p>
        </div>
      </div>
    );
  }
}
export default Contact;
