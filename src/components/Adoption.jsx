import React, { useContext, useState } from "react";
import Context from "../ApiContext";

export default function Adoption() {
  const { addSelf, addName, people } = useContext(Context);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const Component = people.map((person, i) => (
    <li key={i} style={{ backgroundColor: name === person && "#FFC300" }}>
      {person}
    </li>
  ));

  function handleName(e) {
    setName(e.target.value);
  }

  function addPerson(e) {
    e.preventDefault();
    setSubmitted(true);
    addName(name);
    addSelf(name);
  }

  return (
    <div>
      <ul>{Component}</ul>
      {!submitted && (
        <form onSubmit={(e) => addPerson(e)}>
          <label>Name: </label>
          <input type="text" id="name" onChange={(e) => handleName(e)} />
          <input type="submit" value="Add name" />
        </form>
      )}
    </div>
  );
}