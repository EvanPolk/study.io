package dev.evanpolk.study.io.Flashcard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/flashcards")
public class FlashcardController {
    private final FlashcardService flashcardService;

    @Autowired
    public FlashcardController(FlashcardService flashcardService) {
        this.flashcardService = flashcardService;
    }

    @GetMapping("/")
    public List<Flashcard> getAllFlashcards() {
        return flashcardService.getAllFlashcards();
    }

    @GetMapping(path = "/{flashcardId}")
    public Flashcard getFlashcardById(@PathVariable("flashcardId") String flashcardId) {
        return flashcardService.getFlashcardById(flashcardId);
    }

    @PostMapping(path = "/")
    public void addNewFlashcard(@RequestBody Flashcard flashcard) {
        flashcardService.addNewFlashcard(flashcard);
    }

    @DeleteMapping(path = "/{flashcardId}")
    public void deleteFlashcard(@PathVariable("flashcardId") String flashcardId) {
        flashcardService.deleteFlashcardById(flashcardId);
    }

    @PutMapping(path = "/{flashcardId}")
    public void updateFlashcard(@PathVariable("flashcardId") String flashcardId,
                                @RequestParam(required = false) String front,
                                @RequestParam(required = false) String back) {
        flashcardService.updateFlashcardById(flashcardId, front, back);
    }
}