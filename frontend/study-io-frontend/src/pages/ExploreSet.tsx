import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Flashcard from "../components/Flashcard";

interface FlashcardSet {
  id: string;
  setName: string;
  flashcards: Array<{
    id: string;
    front: string;
    back: string;
  }>;
}

function ExploreSet() {
  const [flashcardSet, setFlashcardSet] = useState<FlashcardSet | null>(null);
  const { setId } = useParams();

  useEffect(() => {
    fetchFlashcardSet();
  }, []);

  const fetchFlashcardSet = async () => {
    await axios
      .get("http://localhost:8080/api/v1/flashcardSets/" + setId)
      .then((res) => {
        console.log(res.data);
        setFlashcardSet(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      {flashcardSet !== null ? (
        <Flashcard
          flashcardSet={flashcardSet}
          fetchFlashcardSet={fetchFlashcardSet}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default ExploreSet;
