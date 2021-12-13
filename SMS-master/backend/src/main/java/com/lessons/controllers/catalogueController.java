package com.lessons.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.lessons.models.catalogueDTO;
import com.lessons.services.smsService;

import javax.annotation.Resource;
import java.util.List;

@Controller("com.lessons.controllers.catalogueController")
public class catalogueController {

    private static final Logger logger = LoggerFactory.getLogger(catalogueController.class);

//    @Resource
//    private catalogueController catalogueService;
//
//    /**
//     * GET /api/ticket/list/all            (Get all tickets REST Call)
//     *
//     * @return a List of all media found in MDB with all fields in media
//     */
//    @RequestMapping(value = "/api/catalogue", method = RequestMethod.GET, produces = "application/json")
//    public ResponseEntity<?> catalogue() {
//
//        logger.debug("catalogue() started.");
//
//        // Get a list of all media in MDB
//        List<catalogueDTO> listOfCourses = smsService.catalogue();
//
//        // Return the list with the status info
//        return ResponseEntity
//                .status(HttpStatus.OK)
//                .body(listOfCourses);
//    }
}
