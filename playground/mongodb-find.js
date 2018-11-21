// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Destructuring  - make new variables from an objects properties

// In production may be AWS url or Heroku URL.
MongoClient.connect('mongodb://localhost:27017/TaskApp',{ useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server.')
	}
	console.log('Connected to MongoDB server.')
	const db = client.db('TaskApp')

	/* Can also find by name*/
	// db.collection('Tasks').find({
	// 	_id: new ObjectID("5bf4da614e81a15dafd7e468")
	// }).toArray().then((docs) => {
	// 	console.log('Tasks');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// }, (err) => {
	// 	console.log('Unable to fetch tasks.', err)
	// });

	db.collection('Tasks').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch tasks.', err)
	}); 

	//client.close();
});
