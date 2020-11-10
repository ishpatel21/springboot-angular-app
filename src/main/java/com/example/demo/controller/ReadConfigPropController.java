package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RefreshScope
@RestController
public class ReadConfigPropController {

	@Value("${text.greeting}")
    private String textGreeting;
	
	@GetMapping("/hello")
	public String printConfigServerProps() {
		return "Reading from config server properties: " + textGreeting;
	}
}