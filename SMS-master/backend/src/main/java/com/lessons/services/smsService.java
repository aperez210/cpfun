package com.lessons.services;

import com.lessons.models.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.util.List;

@Service("com.lessons.services.smsService")

public class smsService {
    private static final Logger logger = LoggerFactory.getLogger(smsService.class);

    @Resource
    private DataSource dataSource;

    /*
    Get a list of all the people in the database
    */
    public List<getPersonDTO> getAllPeople() {
        // Construct the SQL to get all person info (sorted by person.id ascending)
        String sql =
                "select p.id as id, p.fname as fname, p.lname as lname, p.des as des, p.username,\n" +
                        "       p.street as street, p.city as city, p.zipcode as zipcode,\n" +
                        "       p.dateOfBirth as dateOfBirth, p.phoneNumber as phoneNumber,\n" +
                        "       p.email as email, p.balance as balance, p.startDate as startDate,\n"+
                        "       p.salary as salary, p.specialty as specialty\n" +
                        "from sdb.person p;";

        // Use the rowMapper to convert the results into a list of GetPersonDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "p.fname as fname"(SQL) to the "private String title"(DTO)
        BeanPropertyRowMapper<getPersonDTO> rowMapper = new BeanPropertyRowMapper<>(getPersonDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of GetAllMediaDTO objects
        // Return the connection to the connection pool
        List<getPersonDTO> listOfPeople = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfPeople;
    }

    public List<getDesignationDTO> getDesignation() {
        // Construct the SQL to get all person info (sorted by designationLK.id ascending)
        String sql =
                "select d.id as id, d.symbol as symbol, d.name as name\n" +
                        "from sdb.designationLK d;";

        // Use the rowMapper to convert the results into a list of GetPersonDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "p.fname as fname"(SQL) to the "private String title"(DTO)
        BeanPropertyRowMapper<getDesignationDTO> rowMapper = new BeanPropertyRowMapper<>(getDesignationDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of GetAllMediaDTO objects
        // Return the connection to the connection pool
        List<getDesignationDTO> listOfDesignations = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfDesignations;
    }

    public List<getSchoolDTO> getAllSchools() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select s.name as name, s.id as id, s.phoneNumber as phoneNumber\n" +
                        "from sdb.school s;";

        // Use the rowMapper to convert the results into a list of GetSchoolDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "s.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getSchoolDTO> rowMapper = new BeanPropertyRowMapper<>(getSchoolDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of GetSchoolDTO objects
        // Return the connection to the connection pool
        List<getSchoolDTO> listOfSchools = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfSchools;
    }

    public List<getCourseDTO> getCourses() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select c.name as name, c.id as id, c.subject as subject, c.price as price," +
                        "c.schoolID as schoolID\n" +
                        "from sdb.course c;";

        // Use the rowMapper to convert the results into a list of GetCourseDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getCourseDTO> rowMapper = new BeanPropertyRowMapper<>(getCourseDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of GetCourseDTO objects
        // Return the connection to the connection pool
        List<getCourseDTO> listOfCourses = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfCourses;
    }

    public List<getLocationDTO> getLocation() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select l.id as id, l.schoolD as schoolD, l.street as street, l.city as city, " +
                        "l.zipcode as zipcode\n" +
                        "from sdb.location l;";

        // Use the rowMapper to convert the results into a list of GetCourseDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getLocationDTO> rowMapper = new BeanPropertyRowMapper<>(getLocationDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of getLocationDTO objects
        // Return the connection to the connection pool
        List<getLocationDTO> listOfLocations = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfLocations;
    }

    public List<getDirectsDTO> getDirect() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select d.id as id, d.schoolD as schoolD, d.street as street, d.city as city, " +
                        "d.zipcode as zipcode\n" +
                        "from sdb.directs d;";

        // Use the rowMapper to convert the results into a list of getDirectsDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getDirectsDTO> rowMapper = new BeanPropertyRowMapper<>(getDirectsDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of getDirectsDTO objects
        // Return the connection to the connection pool
        List<getDirectsDTO> listOfDirects = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfDirects;
    }

    public List<getTeachesAtDTO> getTeachesAt() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select t.id as id, t.schoolD as schoolD, t.teacherID as teacherID\n" +
                        "from sdb.teachesAt t;";

        // Use the rowMapper to convert the results into a list of getTeachesAtDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getTeachesAtDTO> rowMapper = new BeanPropertyRowMapper<>(getTeachesAtDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of getTeachesAtDTO objects
        // Return the connection to the connection pool
        List<getTeachesAtDTO> listOfteachesAt = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfteachesAt;
    }

    public List<getWorksForDTO> getWorksFor() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select w.id as id, w.schoolD as schoolD, w.accountantID as accountantID\n" +
                        "from sdb.worksFor w;";

        // Use the rowMapper to convert the results into a list of getWorksForDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getWorksForDTO> rowMapper = new BeanPropertyRowMapper<>(getWorksForDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of getWorksForDTO objects
        // Return the connection to the connection pool
        List<getWorksForDTO> listOfworksFor = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfworksFor;
    }

    public List<getSectionDTO> getSection() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select  e.id as id, e.courseID as courseID, e.teacherID as teacherID," +
                        "e.locationID as locationID, e.room as room, e.startDate as startDate, " +
                        "e.endDate as endDate, e.days as days, e.times as times\n" +
                        "from sdb.section e;";

        // Use the rowMapper to convert the results into a list of getSectionDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getSectionDTO> rowMapper = new BeanPropertyRowMapper<>(getSectionDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of getSectionDTO objects
        // Return the connection to the connection pool
        List<getSectionDTO> listOfsection = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfsection;
    }

    public List<getTakesDTO> getTakes() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select tk.id as id, tk.studentID as studentID, tk.sectionID as sectionID," +
                        "tk.grade as grade,\n" +
                        "from sdb.takes tk;";

        // Use the rowMapper to convert the results into a list of getTakesDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getTakesDTO> rowMapper = new BeanPropertyRowMapper<>(getTakesDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of getTakesDTO objects
        // Return the connection to the connection pool
        List<getTakesDTO> listOftakes = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOftakes;
    }


    public List<getAnnouncementDTO> getAnnouncement() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select a.id as id, a.sectionID as sectionID, a.dateAdded as dateAdded," +
                        "a.timeAdded as timeAdded, a.content as content\n" +
                        "from sdb.announcement a;";

        // Use the rowMapper to convert the results into a list of getAnnouncementDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getAnnouncementDTO> rowMapper = new BeanPropertyRowMapper<>(getAnnouncementDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of getAnnouncementDTO objects
        // Return the connection to the connection pool
        List<getAnnouncementDTO> listOfannouncement = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfannouncement;
    }

    public List<getPaymentDTO> getPayment() {
        // Construct the SQL to get all school info (sorted by school.id ascending)
        String sql =
                "select p.id as id, p.studentID as studentID, p.sectionID as sectionID," +
                        "p.grade as grade\n" +
                        "from sdb.payment p;";

        // Use the rowMapper to convert the results into a list of getPaymentDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<getPaymentDTO> rowMapper = new BeanPropertyRowMapper<>(getPaymentDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of getPaymentDTO objects
        // Return the connection to the connection pool
        List<getPaymentDTO> listOfpayment = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfpayment;
    }

    public List<catalogueDTO> catalogue() {
        // Construct the SQL to get all school and course info (sorted by school.id ascending)
        String sql =
                "select s.id as schoolID,  s.name as schoolName, c.price as price, \n" +
                        "       c.name as courseName, c.id as courseID, c.subject as subject\n" +
                        "from sdb.course c\n" +
                        "join sdb.school s on s.id = c.schoolID;";

        // Use the rowMapper to convert the results into a list of catalogueDTO objects
        //      Maps the "as" something to the matching name in the DTO
        //      Example: maps "c.name as name"(SQL) to the "private String name"(DTO)
        BeanPropertyRowMapper<catalogueDTO> rowMapper = new BeanPropertyRowMapper<>(catalogueDTO.class);

        // Create a JdbcTemplate object
        JdbcTemplate jt = new JdbcTemplate(this.dataSource);

        // Get a connection from the connection pool
        // Run the SQL
        // Convert the results into a list of catalogueDTO objects
        // Return the connection to the connection pool
        List<catalogueDTO> listOfCourses = jt.query(sql, rowMapper);
        logger.debug("sql finished");
        return listOfCourses;
    }
}
