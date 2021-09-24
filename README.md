# Code Ninjas

Code Ninjas is an interactive web app, designed to teach JavaScript to kids aged 7 years and up. Answer questions and level up to become a fully fledged Code Ninja!

## requirements

- [MongoDB Community 5.0](https://docs.mongodb.com/manual/administration/install-community/)

## Setting up the server to run locally


```bash
git clone https://github.com/dentednerd/CodeNinjasBack.git
cd CodeNinjasBack
sudo service mongod start
mongo
npm start

# to seed the dev database:
npm run seed:dev
# (If this is your first time setting up,
# please comment out lines in seed.js containing 'dropCollection')

# to seed the test database
npm run seed:test
```

## Deploying the server to Heroku

This assumes you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed, and that you are logged in (`heroku login`), and that you have created the app on your Heroku account.

```bash
git add .
git commit -m "Ready to deploy"
git push heroku master
heroku open
```
