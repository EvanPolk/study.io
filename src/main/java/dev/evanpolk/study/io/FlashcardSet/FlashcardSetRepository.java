package dev.evanpolk.study.io.Flashcard;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlashcardSetRepository extends MongoRepository<FlashcardSet, String> {

}
