import { useState, useEffect } from "react";
import axios from "axios";

import FlashcardSet from "../components/FlashcardSet";
import AddFlashcardSet from "../components/AddFlashcardSet";

interface FlashcardSet {
  id: string;
  setName: string;
  flashcards: Array<{
    id: string;
    front: string;
    back: string;
  }>;
}

function Home() {
  const [flashcardSets, setFlashcardSets] = useState([]);

  useEffect(() => {
    fetchFlashcardSets();
  }, []);

  const fetchFlashcardSets = () => {
    axios
      .get("http://localhost:8080/api/v1/flashcardSets")
      .then((res) => {
        setFlashcardSets(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onDelete = (deletedId: string) => {
    const previousSet = [...flashcardSets];
    setFlashcardSets(
      previousSet.filter((set: FlashcardSet) => set.id !== deletedId)
    );
  };

  return (
    <div className="container-fluid d-flex flex-wrap align-items-start">
      <AddFlashcardSet fetchFlashcardSets={fetchFlashcardSets} />
      {flashcardSets.map((flashcardSet: any, idx: number) => (
        <FlashcardSet
          key={idx}
          flashcardSet={flashcardSet}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Home;
