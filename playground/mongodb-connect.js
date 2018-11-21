// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Destructuring  - make new variables from an objects properties

// In production may be AWS url or Heroku URL.
MongoClient.connect('mongodb://localhost:27017/TaskApp',{ useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server.')
	}
	console.log('Connected to MongoDB server.')
	const db = client.db('TaskApp')

	// db.collection('Tasks').insertOne({
	// 	text: 'Senior Design Project',
	// 	completed: false

	// }, (err,results) => {
	// 	if (err) {
	// 		return console.log('Unable to insert task', err);
	// 	}

	// 	// ops attribute will store all docs that were inserted
	// 	console.log(JSON.stringify(results.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Timmy-Two',
	// 	age: 18,
	// 	location: 'Broward'
	// }, (err,results) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user', err);
	// 	}

	// 	// ops attribute will store all docs that were inserted
	// 	console.log(results.ops[0]._id.getTimestamp());
	// });


	// client.close();
});
