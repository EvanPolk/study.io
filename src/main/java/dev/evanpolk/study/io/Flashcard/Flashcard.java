package dev.evanpolk.study.io.Flashcard;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Flashcard {
    @Id
    private String id;
    private String front;
    private String back;

    public Flashcard(String front, String back) {
        this.front = front;
        this.back = back;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Flashcard)) {
            return false;
        }
        return ((Flashcard) o).getId().equals(id);
    }
}
