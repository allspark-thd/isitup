package com.homedepot;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;


@RunWith(SpringJUnit4ClassRunner.class)
@Transactional
@EnableJpaRepositories
@DataJpaTest
@ContextConfiguration(classes = AppRepository.class)
public class RepositoryTests {

    @Autowired
    private AppRepository repository;

    @Before
    public void setUp() {
        repository.deleteAll();
    }

    @Test
    public void savesAppTarget() {
        AppTarget appTarget = new AppTarget("app", "panic", false);
        AppTarget target = repository.save(appTarget);
        assertEquals(target.getId(), 1);
        assertEquals(target.getAppName(), "app");
    }

    @Test
    public void findsAppByName() {
        AppTarget appTarget = new AppTarget("app", "panic", false);
        repository.save(appTarget);
        List<AppTarget> appTargets = repository.findByAppName("app");
        System.out.println("size is " + appTargets.size());
        assertEquals(appTargets.size(), 1);
        assertEquals(appTargets.get(0).getAppName(), "app");
        assertFalse(appTargets.get(0).isUp());
        assertEquals(appTargets.get(0).getDownMessage(), "panic");
    }
}