package dev.evanpolk.study.io.Flashcard;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class FlashcardSet {
    @Id
    private String id;
    private String setName;
    @DocumentReference
    private List<Flashcard> flashcards;

    public FlashcardSet(String setName) {
        this.setName = setName;
        flashcards = new ArrayList<>();
    }

    public boolean addFlashcard(Flashcard flashcard) {
        return flashcards.add(flashcard);
    }
}
