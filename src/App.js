import "./App.css";
import Card from "./components/card";
import { useState } from "react";
import Modal from "./components/modal";

let i = 0;
function App() {
  const [values, setValues] = useState(["", "", "", "", "", "", "", "", ""]);
  const [modal, setModal] = useState(false);
  const [winner, setWinner] = useState(null);
  const handelClick = (index) => {
    i = i + 1;
    const prev = [...values];
    if (i % 2 === 1) {
      prev[index] = (
        <span className="text-red-400 text-3xl" key="X">
          X
        </span>
      );
    } else if (i % 2 === 0) {
      prev[index] = (
        <span className="text-blue-400 text-3xl" key="O">
          O
        </span>
      );
    }
    setValues(prev);

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let j = 0; j < lines.length; j++) {
      const [a, b, c] = lines[j];

      if (
        prev[a].key &&
        prev[a].key === prev[b].key &&
        prev[a].key === prev[c].key
      ) {
        setWinner(prev[a].key);
        setModal(true);
      }
    }
  };
  return (
    <div className="App ml-68 mt-36 absolute">
      {modal && <Modal winner={winner} />}
      <Card values={values} handelClick={handelClick} setValues={setValues} />
    </div>
  );
}

export default App;
