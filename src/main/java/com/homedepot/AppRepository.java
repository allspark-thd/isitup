package com.homedepot;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "app", path = "app")
public interface AppRepository extends PagingAndSortingRepository<AppTarget, String> {

    List<AppTarget> findByAppName(@Param("name") String name);

}