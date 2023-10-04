# Code Ninjas API

Code Ninjas is an interactive web app, designed to teach JavaScript to kids aged 7 years and up. Answer questions and level up to become a fully fledged Code Ninja!

A RESTful API with a Mongo database.

[https://codeninjas-api.fly.dev/](https://codeninjas-api.fly.dev/)

## requirements

- Node v14.17.4: [download](https://nodejs.org/)
- Docker 24.0.6: [download](https://www.docker.com/)
- flyctl: [download](https://fly.io/docs/hands-on/install-flyctl/)
- credentials for local development (note to self: check your vault xoxo)

## Installation

```bash
git clone https://github.com/dentednerd/CodeNinjasBack.git
cd CodeNinjasBack
npm i
npm run dev
```

Database is hosted on MongoDB Atlas and should only need reseeding after a major data change.
