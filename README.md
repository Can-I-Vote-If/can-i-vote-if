# Can I Vote?  


### Prerequisites

* Node.js
* Postgres must [be installed](https://postgresapp.com/).

### Getting started

1. Clone the app git repo :)
2. Run `yarn`
3. cd to the server directory `cd server`
4. Copy `.env.example` to `.env`.
5. Edit `.env` and add your DATABASE_URL in the form `postgres://localhost:5432/rules` where `rules` is your postgres database name (typically your computer username).
6. cd back to app level `cd ..`
7. Run `yarn start`