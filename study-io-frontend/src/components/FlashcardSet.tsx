import "./FlashcardSet.css";
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface Props {
  flashcardSet: {
    id: string;
    setName: string;
    flashcards: Array<{
      id: string;
      front: string;
      back: string;
    }>;
  };
  onDelete: (deletedId: string) => void;
}

function FlashcardSet({ flashcardSet, onDelete }: Props) {
  const { id, setName, flashcards } = flashcardSet;
  const [nameChange, toggleNameChange] = useState(false);
  const [nameInput, setNameInput] = useState(setName);

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await axios.delete("http://localhost:8080/api/v1/flashcardSets/" + id);
      onDelete(id);
    } catch (err) {
      throw err;
    }
  };

  const handleChangeName = async () => {
    if (nameChange) {
      flashcardSet.setName = nameInput;
      await axios.put(
        "http://localhost:8080/api/v1/flashcardSets/" +
          id +
          "?setName=" +
          nameInput
      );
      toggleNameChange(false);
    } else {
      toggleNameChange(true);
    }
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  return (
    <div className="flashcardSet" id={id}>
      <div className="label">
        {nameChange ? (
          <div className="container-fluid d-flex justify-content-around">
            <input
              type="text"
              placeholder={setName}
              onChange={handleChangeInput}
            ></input>
          </div>
        ) : (
          <h4>{setName}</h4>
        )}
        <p className="m-0">{flashcards.length}</p>
        {nameChange ? (
          <div></div>
        ) : (
          <div className="container-fluid d-flex justify-content-around">
            <a href={"http://localhost:5173/flashcardSet/" + id}>
              <button className="btn btn-primary btn-large m-2">
                Explore Set
              </button>
            </a>
            <button
              className="btn btn-danger btn-large m-2"
              onClick={() => handleDelete(id)}
            >
              Delete Set
            </button>
          </div>
        )}
      </div>
      <div className="mx-auto d-flex justify-content-around m-2">
        {nameChange ? (
          <button className="btn btn-success" onClick={handleChangeName}>
            Confirm
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={handleChangeName}>
            Change name
          </button>
        )}
      </div>
    </div>
  );
}

export default FlashcardSet;
