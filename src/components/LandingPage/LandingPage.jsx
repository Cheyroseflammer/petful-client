import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../ApiContext";
import dog from "../../images/dog.jpg";

export default function LandingPage() {
  const history = useHistory();
  const { addSelf } = useContext(Context);

  function adopt() {
    addSelf("");
    history.push("/pets");
  }

  return (
    <div className="App__Home">
      <h2>Adopt a furry new friend today!</h2>
      <p>
        FIFO is a pet adoption agency that takes a 'first-in-first-out' approach
        to adoption. The first animal that gets admitted to our shelter is the
        first one that gets adopted.
      </p>
      <p>
        People can add their name to the end of the list to sign up and adopt a
        pet. Once you are at the top of the list, you may select either a cat or
        a dog. Be wary that you may only adopt either the cat or dog that is
        currently up for adoption.
      </p>
      <h3>▼ Click Here To Begin! ▼</h3>
      <img alt="adopt-me" onClick={() => adopt()} tabIndex="0" src={dog} />
    </div>
  );
}
