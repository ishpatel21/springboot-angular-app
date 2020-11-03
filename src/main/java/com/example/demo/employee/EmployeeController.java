package com.example.demo.employee;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("emp")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	
	@Autowired
	 private EmployeeRepository employeeRepository;

	
	@GetMapping
	 public List<Employee> getAllEmployees() {
	  return employeeRepository.findAll();
	 }
	
	 @GetMapping("/{id}")
	 public ResponseEntity<Optional<Employee>> getEmployeeById(@PathVariable(value = "id") Long employeeId){
	  Optional<Employee> employee = employeeRepository.findById(employeeId);
	  return ResponseEntity.ok().body(employee);
	 }
	 
	 @PostMapping
	 public Employee createEmployee(@RequestBody Employee employee) {
	  return employeeRepository.save(employee);
	 }
	
	 @DeleteMapping("/{id}")
	 public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId){
	  employeeRepository.deleteById(employeeId);
	  Map<String, Boolean> response = new HashMap<>();
	  response.put("deleted", Boolean.TRUE);
	  return response;
	 }
}