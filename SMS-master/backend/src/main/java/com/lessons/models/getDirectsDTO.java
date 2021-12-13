package com.lessons.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class getDirectsDTO {

    @Id
    private int id;

    private int schoolID;
    private int directorID;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSchoolID() {
        return schoolID;
    }

    public void setSchoolID(int schoolID) {
        this.schoolID = schoolID;
    }

    public int getDirectorID() {
        return directorID;
    }

    public void setDirectorID(int directorID) {
        this.directorID = directorID;
    }
}
