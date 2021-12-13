package com.lessons.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class getTeachesAtDTO {

    @Id
    private int id;

    private int schoolID;
    private int teacherID;

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

    public int getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(int teacherID) {
        this.teacherID = teacherID;
    }
}
