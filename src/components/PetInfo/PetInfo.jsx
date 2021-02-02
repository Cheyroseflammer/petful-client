import React, { useContext, useEffect, useState } from "react";
import Pet from "../Pet";
import Context from "../../ApiContext";
import Adoption from "../Adoption";

export default function PetInfo() {
  const { cat, dog, person, people, remove, addName, addSelf } = useContext(
    Context
  );
  const [adoptedPet, setAdoptedPet] = useState(false);

  function fiveSec() {
    let newUsers = ['Taylor Jmaes', 'Bobby Brackin', 'Ralph Lauren', 'Laney Jane', 'Joe Thomas', "Lee James", "Megan Styles", "Jordan Sectrect", "Jimmy Jones", "Ryan Taylor", "Reese Bryce", "John Remy"];
    if (people.length < 5) {
      const random = Math.floor(Math.random() * newUsers.length);
      addName(newUsers[random]);
      return;
    }

    if (person !== people[0]) {
      remove();
      return;
    }
  }

  useEffect(() => {
    if (person === null || person === people[0]) return;

    const interval = setInterval(() => {
      fiveSec();
    }, 5000);
    return () => clearInterval(interval);
  });

  function adopted(type) {
    setAdoptedPet(true);
    remove(type);
    addSelf(null);
  }

  return (
    <div className="Pet__Info">
      {!adoptedPet && <h2>Who would you like to adopt?</h2>}
      {adoptedPet && (
        <h2 className="Congratulations">
          Congratulations! <br /> You have adopted a pet.{" "}
        </h2>
      )}
      <div>
        <strong>People in line:</strong>
        <Adoption />
      </div>
      <div className="cat-or-dog">
        <div className="cat">
          <h3>Cats</h3>
          {Object.keys(cat).length > 1 && person === people[0] && (
            <button onClick={() => adopted("cat")}>Adopt This Cat</button>
          )}
          <Pet pet={cat} />
        </div>
        <div className="dog">
          <h3>Dogs</h3>
          {Object.keys(dog).length > 1 && person === people[0] && (
            <button onClick={() => adopted("dog")}>Adopt This Dog</button>
          )}
          <Pet pet={dog} />
        </div>
      </div>
    </div>
  );
}