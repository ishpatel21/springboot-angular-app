INTRODUCTION
------------

Create/Read/Update/Delete Employee Application.

Backend: Spring Boot 2.3.0 Application(JPA, Spring Security, H2-Console, Swagger UI, Lombok)

FrontEnd: Angular 10.0 frontend(Primeng, Chart.JS)


Start Application in local
--------------------------
	
	Run backend on port 8080
	
	Run Frontend:
		- Run 'npm install' in src/main/ngapp folder
		- Then run 'ng serve --open' in same folder

Test Cloud Config Server
------------------

	To test config server, go to http://localhost:8080/hello
	(This will pull properties from config_props repo and read it into config_server repo. 
	This application calls config_server to read those cloud properties.)

ScreenShot
----------

![Screenshot](ScreenShot.png)
