package com.homedepot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@EnableOAuth2Sso
@SpringBootApplication
public class IsItUp {
// extends WebSecurityConfigurerAdapter
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//				.authorizeRequests()
//                .antMatchers("/hubot", "/app/search/**")
//                .permitAll()
//                .anyRequest()
//                .authenticated();
//	}

	public static void main(String[] args) {
		SpringApplication.run(IsItUp.class, args);
	}
}
