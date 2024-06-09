import { useState, useEffect } from "react";
import instance from "../axiosInstance";

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
    instance
      .get("/flashcardSets")
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
    <div className="flex flex-wrap flex-row">
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
