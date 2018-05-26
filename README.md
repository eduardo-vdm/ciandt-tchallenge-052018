# desafio-ciandt-mvp

Technical challenge CI&T.

## Requirements

- Node.js >= 8.x
- JDK 1.8
- Ports `FIXME-portbackend` and `FIXME-portfrontend` must be available.

## Technologies

### Backend

- **[Spring Boot](https://projects.spring.io/spring-boot/):** main API structure and server;

### Frontend

- **[AngularJS 1.x](https://angularjs.org):** Views/presentation layer; 
- **[Less.js](http://lesscss.org):** CSS preprocessor; 
- **[gulpjs](https://gulpjs.com):** build and tasks automation;

### Extras

- **[json-schema-faker](https://www.npmjs.com/package/json-schema-faker):** Node.js module to generate random mock data; 

## Tasks

### Run application

Both data generator, backend server and frontend webapp must be run:

1. `FIXME-rundatabackend` in terminal to generate data and then serve the backend API at [localhost:FIXME-portbackend](http://localhost:FIXME-portbackend)
2. `FIXME-runfrontend` in a different terminal session to serve the frontend application at [localhost:FIXME-portfrontend](http://localhost:FIXME-portfrontend)