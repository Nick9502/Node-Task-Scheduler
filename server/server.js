var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Use Promises over callbacks.
mongoose.connect('mongodb://localhost:27017/TaskApp', { useNewUrlParser: true });

var Task = mongoose.model('Task', {
	text: {
		type: String,
		required: true,
		minLength: 1,
		trim: true //Remove leading and trailing spaces
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minLength: 1,
		trim: true //Remove leading and trailing spaces
	}
});

var newUser = new User({
	email: ' nick@example.com '
})
newUser.save().then((doc) => {
	console.log('Successfully saved user..');
	console.log(JSON.stringify(doc,undefined,2));
}, (err) => {
	console.log('Unable to save user', err);
});


// var otherTask = new Task({
// 	text: ' Finish Node Series '
// });

// otherTask.save().then((doc) => {
// 	console.log('Task has been saved.');
// 	console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
// 	console.log('Unable to save task', e)
// });

// var newTask = new Task({
// 	text: 'Device Driver',
// 	completed: false,
// 	completedAt: 422
// })

// newTask.save().then((doc) => {
// 	console.log('Task has been saved.');
// 	console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
// 	console.log('Unable to save task', e)
// });