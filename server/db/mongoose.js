var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Use Promises over callbacks.
mongoose.connect('mongodb://localhost:27017/TaskApp', { useNewUrlParser: true });

module.exports = {mongoose}