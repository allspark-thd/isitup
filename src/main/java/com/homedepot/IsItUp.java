package com.homedepot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableOAuth2Sso
@SpringBootApplication
public class IsItUp extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.authorizeRequests()
               .antMatchers("/hubot", "/app/search/**", "/app*")
               .permitAll()
               .anyRequest()
               .authenticated();
	}

	public static void main(String[] args) {
		SpringApplication.run(IsItUp.class, args);
	}
}
