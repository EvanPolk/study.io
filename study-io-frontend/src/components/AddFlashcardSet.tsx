import { ChangeEvent, useState } from "react";
import axios from "axios";

interface Props {
  fetchFlashcardSets: () => void;
}

function AddFlashcardSet({ fetchFlashcardSets }: Props) {
  const [input, setInput] = useState("");

  const handleAdd = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/flashcardSets", {
        setName: input,
      });
      fetchFlashcardSets();
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="flashcardSet">
      <div className="label">
        <h4>New Set</h4>
        <div className="input-group mb-3">
          <button className="btn btn-primary" onClick={() => handleAdd()}>
            Add
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Set name"
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default AddFlashcardSet;
