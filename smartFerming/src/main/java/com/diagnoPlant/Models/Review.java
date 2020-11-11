package com.diagnoPlant.Models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Review {

    @Id
    private Long id;
    private String content;
    private int agricultureId;

    public Review() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getAgricultureId() {
        return agricultureId;
    }

    public void setAgricultureId(int agricultureId) {
        this.agricultureId = agricultureId;
    }
}
