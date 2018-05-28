# ciandt-tchallenge-052018

Technical challenge CI&T.

## Requirements

- [Node.js](https://github.com/creationix/nvm) >= 8.x
- [npm](https://www.npmjs.com/get-npm) >= 6.x
- [Bower](https://bower.io) >= 1.8.x
- [gulp.js](https://gulpjs.com) >= 3.9.x
- JDK 1.8
- [Gradle 4.7](https://gradle.org/install/)
- Ports `8091` (api backend) and `3000` (web frontend) must be available.

----

## Technologies

### Backend

- **[Spring Boot](https://projects.spring.io/spring-boot/):** main API structure and server;
- **[Spring Data](https://projects.spring.io/spring-data/):** together with in-memory H2 database for simple persistence;

### Frontend

- **[AngularJS 1.x](https://angularjs.org):** main presentation application platform; implemented through ES6 Javascript (transpiled with Gulp/Babel); [angular-material](https://material.angularjs.org) as the main visual components framework.
- **[Less.js](http://lesscss.org):** CSS preprocessor; 
- **[gulpjs](https://gulpjs.com):** build and tasks automation;

### Extras

- **[json-schema-faker](https://www.npmjs.com/package/json-schema-faker):** Node.js module to generate random mock data in the `data-generator` module; 

----

## Tasks

### Setup

1. Clone this repository.
2. Inside the project's directory, run `./setup.sh` (this script will only run npm, bower and gradle build procedures) - first time should take some minutes.

### Run application

Both data generator, backend server and frontend webapp must be run:

1. To generate the .json file with legacy data, run `./generate-data.sh` at the root of the project. 
2. Run `./run-server.sh` in a terminal and serve the backend API at `http://localhost:8091/v1`.
3. In a different terminal, run `./run-client.sh` to serve the frontend application at `http://localhost:8091/v1`.

----

## Notes

#### Final state of application
Although it's functional and executing what was asked in the challenge, it's far from what I would be pleased with. I followed most guidelines I'm used to for my own projects, but I couldn't accomplish several tasks I had planned.
Of couse it doesn't matter if it wasn't implemented, but since this is a challenge so you can know my work style better, I thought on listing what I usually implement as well but couldn't for personal reasons:

- TDD: since I've known this methodology/workflow I always try to follow it, but it can somewhat takes a bit more of time (in my opinion the trade-off almost always is worth - not this time)
- Unit tests: I think it's the developer's best friend, keep the sanity of the mind and let you focus on what you doing - I had to priorize implementing the functionality.
- Backend automation: although I did provide some simple shell scripts, almost no automation at all (besides the gulp tasks) is bundled in this project, for simplicity (and time) reasons. I usually implement some with [pm2.js](http://pm2.keymetrics.io).
- API practices: with enough time I would have implemented more validation, proper error handling and mainly a proper documentation (automated by Swagger).
- Code linting: some code guidelines were left behind, but I'm always aiming at 0 linting errors. This time I didn't have enough time to properly setup the exact linting and ended up leaving some mistakes (which will be shown when starting the frontend application). 

----

## Final words

Thank you for taking your time evaluating my work. Although not the best I wanted to present, I had to learn a lot (mainly Spring/Spring Boot, some time since I last worked with Java itself) and it was challenging indeed.

Feel free to contact me at eduardovazdemello@gmail.com for any doubts or questions.


