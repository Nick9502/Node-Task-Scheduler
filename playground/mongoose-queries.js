const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Task} = require('./../server/models/task');
const {User} = require('./../server/models/user');

var id = '5bf8b0f6f86150853664076e11';
var userId = '5bf87575d74cf57a456002a1';

// if(!ObjectId.isValid(id)) {
// 	console.log('ID not valid');
// }
// Task.find({ //Fetch array
// 	_id: id
// }).then((tasks) => {
// 	console.log('Tasks', tasks);
// });

// Task.findOne({ // Fetch one document or null if it doesnt exist
// 	_id: id
// }).then((task) => {
// 	console.log('Tasks', task);
// });

// Task.findById(id).then((task) => {
// 	if (!task){
// 		return console.log('Id not found')
// 	}
// 	console.log('Tasks by Id', task);
// }).catch((e) => console.log(e));

/* 3 cases. Id valid, not found. Id found. Id invalid*/
User.findById(userId).then((user) => {
	if (!user){
		return console.log('Id not found')
	}
	console.log('Users by Id', user);
}).catch((e) => console.log(e));