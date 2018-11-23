var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minLength: 1,
		trim: true //Remove leading and trailing spaces
	}
});

module.exports = {User};

// var newUser = new User({
// 	email: ' nick@example.com '
// })
// newUser.save().then((doc) => {
// 	console.log('Successfully saved user..');
// 	console.log(JSON.stringify(doc,undefined,2));
// }, (err) => {
// 	console.log('Unable to save user', err);
// });