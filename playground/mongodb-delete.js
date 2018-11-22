// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Destructuring  - make new variables from an objects properties

// In production may be AWS url or Heroku URL.
MongoClient.connect('mongodb://localhost:27017/TaskApp',{ useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server.')
	}
	console.log('Connected to MongoDB server.')
	const db = client.db('TaskApp')

	//deleteMany
	// db.collection('Tasks').deleteMany({text: 'Device Driver'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne -- delete first item that matches criteria
	// db.collection('Tasks').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

	//findOneAndDelete -- Get data back and potentially undo 
	db.collection('Tasks').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);

	});
	//client.close();
});
