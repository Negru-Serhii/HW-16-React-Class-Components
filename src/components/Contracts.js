import React, { Component } from "react";
import "./style.css";
import Contact from "./Contact.js";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

class Contracts extends Component {
  state = {
    contacts: contacts,
    search: "",
    checkMale: true,
    checkFemale: true,
    checkUnknown: true,
  };

  textSearch = async (e) => {
    await this.setState({ search: e.target.value });
    this.filterContacts();
  };

  filterContacts = () => {
    const searchContacts = this.state.search.toLowerCase();
    let filteredContacts = contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(searchContacts) ||
        contact.lastName.toLowerCase().includes(searchContacts) ||
        contact.phone.toLowerCase().includes(searchContacts) ||
        (contact.firstName + " " + contact.lastName)
          .toLowerCase()
          .includes(searchContacts)
    );
    if (filteredContacts !== []) {
      this.setState({ contacts: filteredContacts });
    } else {
      this.setState({ contacts: contacts });
    }
  };

  setGenderFilter = (e) => {
    const gender = e.target.name;
    const isChecked = e.target.checked;
    if (gender === "male") this.setState({ checkMale: isChecked });
    if (gender === "female") this.setState({ checkFemale: isChecked });
    if (gender === "unknown") this.setState({ checkUnknown: isChecked });
  };

  filterGender = async (event) => {
    this.setState({ search: "" });
    await this.setGenderFilter(event);
    let filteredGender = contacts.filter(
      (contact) =>
        (contact.gender === "male" && this.state.checkMale) ||
        (contact.gender === "female" && this.state.checkFemale) ||
        (contact.gender === undefined && this.state.checkUnknown)
    );
    this.setState({ contacts: filteredGender });
  };

  render() {
    return (
      <div className="input-wrapper">
        <input
          className="enter-text-block"
          type="text"
          value={this.state.search}
          onChange={this.textSearch}
        />
        <div className="checkbox-wrapper">
          <input
            className="checkbox-block"
            defaultChecked="true"
            type="checkbox"
            name="male"
            value={this.state.checkMale}
            onChange={this.filterGender}
          />
          <label>male</label>

          <input
            className="checkbox-block"
            defaultChecked="true"
            type="checkbox"
            name="female"
            value={this.state.checkFemale}
            onChange={this.filterGender}
          />
          <label>female</label>

          <input
            className="checkbox-block"
            defaultChecked="true"
            type="checkbox"
            name="unknown"
            value={this.state.checkUnknown}
            onChange={this.filterGender}
          />
          <label>unknown</label>
        </div>
        {this.state.contacts.map((contact, i) => (
          <Contact {...contact} key={i} />
        ))}
      </div>
    );
  }
}

export default Contracts;
