# Code Ninjas API

Code Ninjas is an interactive web app, designed to teach JavaScript to kids aged 7 years and up. Answer questions and level up to become a fully fledged Code Ninja!

## requirements

- [Google Application Credentials](https://firebase.google.com/docs/admin/setup)
- [Firebase CLI  (recommended)](https://firebase.google.com/docs/cli)

## Setting up the server to run locally

```sh
git clone https://github.com/dentednerd/CodeNinjasBack.git
cd CodeNinjasBack
npm run dev
```

## Seeding the Firestore database

```sh
npm run seed
````

## Deploying the server to Heroku

This assumes you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed, and that you are logged in (`heroku login`), and that you have created the app on your Heroku account.

```bash
git add .
git commit -m "Ready to deploy"
git push heroku main
heroku open
```

## Notes

- Recently migrated from MongoDB to Firestore.
