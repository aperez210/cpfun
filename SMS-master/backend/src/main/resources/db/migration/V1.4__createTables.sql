create table if not exists sdb.designationLK(
                                              id serial,
                                              symbol varchar(1),
                                              name varchar(45),

                                              primary key (id)
);

create table if not exists sdb.school(
                                              name varchar(100),
                                              id serial,
                                              phoneNumber varchar(20),

                                              primary key (id)
);


create table if not exists sdb.course(
                                              name varchar(100),
                                              id serial,
                                              subject varchar(100),
                                              price integer,
                                              schoolID serial,

                                              primary key (id),
                                              constraint school_fkey foreign key (schoolID) references sdb.school(id)
);


create table if not exists sdb.location(
                                                id serial,
                                                schoolID serial,
                                                street varchar(100),
                                                city varchar(50),
                                                zipcode varchar(5),

                                                primary key (id),
                                                constraint schoolLoc_fkey foreign key (schoolID) references sdb.school(id)
);


create table if not exists sdb.person(
                                              fname varchar(45),
                                              lname varchar(45),
                                              id serial,
                                              des varchar(1),
                                              username varchar(10),
                                              street varchar(100),
                                              city varchar(50),
                                              zipcode varchar(5),
                                              dateOfBirth date,
                                              phoneNumber varchar(20),
                                              email varchar(50),
                                              balance varchar(10),
                                              startDate date,
                                              salary integer,
                                              specialty varchar(50),
                                              password varchar(50),

                                              primary key (id)
);


create table if not exists sdb.directs(
                                               id serial,
                                               schoolID serial,
                                               directorID serial,

                                               primary key (id),
                                               constraint schoolD_fkey foreign key (schoolID) references sdb.school(id),
                                               constraint director_fkey foreign key (directorID) references sdb.person(id)
);


create table if not exists sdb.teachesAt(
                                                 id serial,
                                                 schoolID serial,
                                                 teacherID serial,

                                                 primary key (id),
                                                 constraint schoolT_fkey foreign key (schoolID) references sdb.school(id),
                                                 constraint teacher_fkey foreign key (teacherID) references sdb.person(id)
);


create table if not exists sdb.worksFor(
                                                id serial,
                                                schoolID serial,
                                                accountantID serial,

                                                primary key (id),
                                                constraint schoolA_fkey foreign key (schoolID) references sdb.school(id),
                                                constraint director_fkey foreign key (accountantID) references sdb.person(id)
);


create table if not exists sdb.section(
                                               secNo varchar(10),
                                               id serial,
                                               courseID serial,
                                               teacherID serial,
                                               locationID serial,
                                               room varchar(10),
                                               startDate date,
                                               endDate date,
                                               days varchar(7),
                                               times varchar(15),

                                               primary key (id),
                                               constraint course_fkey foreign key (courseID) references sdb.course(id),
                                               constraint courseT_fkey foreign key (teacherID) references sdb.person(id),
                                               constraint location_fkey foreign key (locationID) references sdb.location(id)
);


create table if not exists sdb.takes(
                                             id serial,
                                             studentID serial,
                                             sectionID serial,
                                             grade varchar(2),

                                             primary key (id),
                                             constraint student_fkey foreign key (studentID) references sdb.person(id),
                                             constraint section_fkey foreign key (sectionID) references sdb.section(id)
);


create table if not exists sdb.announcement(
                                            id serial,
                                            sectionID serial,
                                            dateAdded date,
                                            timeAdded varchar(20),
                                            content text,

                                            primary key (id),
                                            constraint sec_fkey foreign key (sectionID) references sdb.section(id)
);


create table if not exists sdb.payment(
                                            id serial,
                                            studentID serial,
                                            paymentDate date,
                                            paymentAmount integer,
                                            previousBalance integer,

                                            primary key (id),
                                            constraint stud_fkey foreign key (studentID) references sdb.person(id)
);

