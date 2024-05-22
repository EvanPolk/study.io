package dev.evanpolk.study.io.FlashcardSet;

import dev.evanpolk.study.io.Flashcard.Flashcard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.POST, RequestMethod.OPTIONS}, origins = "*")
@RequestMapping(path="api/v1/flashcardSets")
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

    @GetMapping(path = "/{flashcardSetId}")
    public FlashcardSet getFlashcardSetById(@PathVariable("flashcardSetId") String id) {
        return flashcardSetService.findFlashcardSetById(id);
    }

    @PostMapping
    public void addNewFlashcardSet(@RequestBody FlashcardSet flashcardSet) {
        flashcardSetService.addNewFlashcardSet(flashcardSet);
    }

    @PostMapping(path = "/{flashcardSetId}")
    public void addNewFlashcardToFlashcardSet(@PathVariable("flashcardSetId") String flashcardSetId,
                                              @RequestBody Flashcard flashcard) {
        flashcardSetService.addNewFlashcardToFlashcardSet(flashcardSetId, flashcard);
    }

    @DeleteMapping(path = "/{flashcardSetId}")
    public void deleteFlashcardSetById(@PathVariable("flashcardSetId") String flashcardSetId) {
        flashcardSetService.deleteFlashcardSetByID(flashcardSetId);
    }

    @DeleteMapping(path = "/{flashcardSetId}/{flashcardId}")
    public void deleteFlashcardInFlashcardSet(@PathVariable("flashcardSetId") String flashcardSetId,
                                              @PathVariable("flashcardId") String flashcardId) {
        flashcardSetService.deleteFlashcardInFlashcardSet(flashcardSetId, flashcardId);
    }

    @PutMapping(path = "/{flashcardSetId}")
    public void updateFlashcardSet(@PathVariable("flashcardSetId") String flashcardSetId,
                                   @RequestParam(required = false) String setName) {
        flashcardSetService.updateFlashcardSet(flashcardSetId, setName);
    }
}
