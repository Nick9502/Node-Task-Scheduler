// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //ES6 Destructuring  - make new variables from an objects properties

// In production may be AWS url or Heroku URL.
MongoClient.connect('mongodb://localhost:27017/TaskApp',{ useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server.')
	}
	console.log('Connected to MongoDB server.')
	const db = client.db('TaskApp')

	/* Look at MongoDB Update Operator Documentation*/
	// db.collection('Tasks').findOneAndUpdate({
	// 	_id: new ObjectID('5bf58bf7da191c7fc243eb27')},
	// 	{
	// 		$set: {completed: true}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5bf4db758c899b5dd038ce69')},
		{
			$set: {name: 'Nicolas Larhon Hunter'},
			$inc: {age: 1}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})
	//client.close();
});
