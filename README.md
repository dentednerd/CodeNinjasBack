# Code Ninjas

Code Ninjas is an interactive web app, designed to teach JavaScript to kids aged 7 years and up. Answer questions and level up to become a fully fledged Code Ninja!

## Setting up the server to run locally

<<<<<<< HEAD
Install `mongodb-org` ([Instructions](https://docs.mongodb.com/manual/administration/install-community/))

```bash
git clone https://github.com/dentednerd/CodeNinjasBack.git
cd CodeNinjasBack
=======
First, install `mongodb-org`. ([Instructions](https://docs.mongodb.com/manual/administration/install-community/))

In terminal, run:

```bash
>>>>>>> 0f79fcb81042d19fa4534f5c661bc7143eba3d34
sudo service mongod start
mongo
npm start

# to seed the dev database:
npm run seed:dev
# (If this is your first time setting up,
# please comment out lines in seed.js containing 'dropCollection')

<<<<<<< HEAD
# to seed the test database
=======
#to seed the test database:
>>>>>>> 0f79fcb81042d19fa4534f5c661bc7143eba3d34
npm run seed:test
```

## Deploying the server to Heroku

<<<<<<< HEAD
This assumes you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed, and that you are logged in (`heroku login`), and that you have created the app on your Heroku account.
=======
This assumes you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed, that you are logged in (`heroku login`), and that you have created the app in your personal apps.
>>>>>>> 0f79fcb81042d19fa4534f5c661bc7143eba3d34

```bash
git add .
git commit -m "Ready to deploy"
git push heroku master
<<<<<<< HEAD
heroku open
=======
>>>>>>> 0f79fcb81042d19fa4534f5c661bc7143eba3d34
```
