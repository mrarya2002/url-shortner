package com.url.url_shortener.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ClickEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;
    LocalDateTime clickDate;

    @ManyToOne
    @JoinColumn(name ="url_mapping_id")
    UrlMapping urlMapping;
}
