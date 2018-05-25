# Code Ninjas

Code Ninjas is an interactive web app, designed to teach JavaScript to kids aged 7 years and up. Answer questions and level up to become a fully fledged Code Ninja!

## Setting up the server to run locally

1. Install `mongodb-org` ([Instructions](https://docs.mongodb.com/manual/administration/install-community/))
2. In terminal, run `sudo service mongod start`   
3. In terminal, run `mongo`  
4. `npm start` to start up the server   
`npm run seed:dev` to seed the dev database   
(If this is your first time setting up, please comment out lines in seed.js containing 'dropCollection')   
`npm run seed:test` to seed the test database

