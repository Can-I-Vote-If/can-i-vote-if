var seed;
if(process.env.NODE_ENV !== 'production') {
  require('dotenv-safe').config(); // environment variables, used for hiding secrets
  seed = require('seedquelize')
}

var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

// Connect to a sql database
if(process.env.NODE_ENV == 'production') {
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    },
  });
} else {
  var sequelize = new Sequelize(process.env.DATABASE_URL_DEV, {
    dialect: 'postgres',
    protocol: 'postgres',
  });
}

// We need to define models. A model describes the structure of
// something that we want to store in the database. On each model
// we define each of the fields on that model. We can also decide
// to have different internal and external field names. Internal
// fields would be the column names in the database, external are
// what you would use in your code.

//Define States
var States = sequelize.define('states', {
  name: {
    type: Sequelize.STRING,
		field: 'name'
  },
  age: {
    type: Sequelize.STRING,
		field: 'age'
  },
  citizenship: {
		type: Sequelize.STRING,
		field: 'citizenship',
	},
	residency: {
		type: Sequelize.STRING,
		field: 'residency',
	},
	criminalHistory: {
		type: Sequelize.STRING,
		field: 'criminalHistory',
	},
	other: {
		type: Sequelize.STRING,
		field: 'other',
	},
}, {
  freezeTableName: true
});

// THIS IS THE DON'T GET FIRED CLAUSE
// Seeding (or preloading) your database gives it dummy data
// so that development isn't a graveyard. In production we
// probably don't want to delete the entire database :)
//
if(process.env.NODE_ENV !== 'production') {
  sequelize.sync({force: true}).then(() => {

    // Some sample projects
    var states = {
      data: [
        {
          name: 'Alabama',
					age: 'You must be 18 years old before any election',
					citizenship: 'You must be a citizen of the United States',
					residency: 'You must be a resident of Alabama and your county at the time of registration',
					criminalHistory: 'You cannot have been convicted of a felony punishable by imprisonment in the penitentiary (or have had your civil and political rights restored)',
					other: 'You must "swear or affirm to “support and defend the Constitution of the US and the State of Alabama and further disavow any belief or affiliation with any group which advocates the overthrow of the governments of the US or the State of Alabama by unlawful means and that the information contained herein is true, so help me God”"',
        }, {
					name: 'Alaska',
					age: 'You must be 18 years old before any election',
					citizenship: 'You must be a citizen of the United States',
					residency: 'You must be a resident of Alabama and your county at the time of registration',
					criminalHistory: 'You cannot have been convicted of a felony punishable by imprisonment in the penitentiary (or have had your civil and political rights restored)',
					other: 'You must "swear or affirm to “support and defend the Constitution of the US and the State of Alabama and further disavow any belief or affiliation with any group which advocates the overthrow of the governments of the US or the State of Alabama by unlawful means and that the information contained herein is true, so help me God”"',
        },
      ],
      model: State
    };

    seed([
      states
    ]).then(() =>{
      startExpress();
    });

  });

} else {
  startExpress();
}

function startExpress() {

  // Create a new express app to server our api
  var app = express()

  // Teach express how to parse requests of type application/json
  app.use(bodyParser.json());

  // Teach express how to parse requests of type application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // OTHER ROUTES USING SEQUELIZE HERE

  // --------------STATES-------------------------

  // Get all states
  app.get('/api/states', (req, res) => {
    // Find all projects
    State.findAll().then((projects) => {
      res.json(projects);
    }).catch(err => {
      console.log(err);
    })
  });

  // Determine which port to listen on
  var port = process.env.PORT ? process.env.PORT : 3001

  // Actually start the server
  app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!')
  })
}