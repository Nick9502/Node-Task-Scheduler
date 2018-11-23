var mongoose = require('mongoose');

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

module.exports = {Task};

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