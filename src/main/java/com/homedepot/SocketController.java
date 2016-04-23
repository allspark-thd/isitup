package com.homedepot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;

@RepositoryRestController
public class SocketController  {

    private final AppRepository repository;

    @Autowired
    public SocketController(AppRepository repo) {
        repository = repo;
    }

//    @RequestMapping(method = GET, value = "/scanners/search/listProducers")
//    public @ResponseBody
//    ResponseEntity<?> getProducers() {
//        List<String> producers = repository.listProducers();
//
//        //
//        // do some intermediate processing, logging, etc. with the producers
//        //
//
//        Resources<String> resources = new Resources<String>(producers);
//
//        resources.add(linkTo(methodOn(ScannerController.class).getProducers()).withSelfRel());
//
//        // add other links as needed
//
//        return ResponseEntity.ok(resources);
//    }



}