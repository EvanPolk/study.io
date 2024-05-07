package dev.evanpolk.study.io.Flashcard;

import org.springframework.stereotype.Service;

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
}
