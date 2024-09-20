package dev.evanpolk.study.io.Flashcard;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class FlashcardService {
    private FlashcardRepository flashcardRepository;

    public FlashcardService(FlashcardRepository flashcardRepository) {
        this.flashcardRepository = flashcardRepository;
    }

    public List<Flashcard> getAllFlashcards() {
        return flashcardRepository.findAll();
    }

    public Flashcard getFlashcardById(String id) {
        return flashcardRepository.findById(id).orElse(null);
    }

    public void addNewFlashcard(String front, String back) {
        flashcardRepository.save(new Flashcard(front, back));
    }

    public void deleteFlashcardById(String id) {
        flashcardRepository.deleteById(id);
    }

    @Transactional
    public void updateFlashcardById(String id, String front, String back) {
        Flashcard flashcard = flashcardRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "Flashcard with id: " + id + ", does not exist"));
        if (front != null && !front.isEmpty() && !front.equals(flashcard.getFront())) {
            flashcard.setFront(front);
            System.out.println(flashcard);
        }

        if (back != null && !back.isEmpty() && !back.equals(flashcard.getBack())) {
            flashcard.setBack(back);
        }
        flashcardRepository.save(flashcard);
    }
}
