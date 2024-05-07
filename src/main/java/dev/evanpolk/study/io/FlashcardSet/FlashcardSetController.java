package dev.evanpolk.study.io.Flashcard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/Flashcard")
public class FlashcardSetController {
    private final FlashcardSetService flashcardSetService;

    @Autowired
    public FlashcardSetController(FlashcardSetService flashcardSetService) {
        this.flashcardSetService = flashcardSetService;
    }

    @GetMapping
    public List<FlashcardSet> getAllFlashcardSets() {
        return flashcardSetService.getAllFlashcardSets();
    }
}
