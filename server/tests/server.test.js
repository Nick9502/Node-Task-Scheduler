const expect = require('expect');
const request = require('supertest')

const {app} = require('../server');
const {Task} = require('../models/task')

// Seed data
const tasks = [{
	text: 'First test task'
}, {
	text: 'second test task '
}]

// Will Run Before Every Test Case
// Make database empty before request
beforeEach((done) => {
	Task.remove({}).then(() => {
		return Task.insertMany(tasks);
	}).then(() => done());
	//Add Seed data
});

describe('POST /tasks', () => {
	it('should create a new task', (done) => { //Aync so specify done
		var text = 'Test Task Text';

		request(app)
			.post('/tasks')
			.send({text}) //ES6 Syntax is great.
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if (err){
					return done(err);
				}
				Task.find({text}).then((tasks) => { //MongoDB Find
					expect(tasks.length).toBe(1);
					expect(tasks[0].text).toBe(text);
					done();
				}).catch((e) => done(e));
			})
	})

	it('should not create task with invalid body data', (done) => {
		request(app)
			.post('/tasks')
			.send({})
			.expect(400)
			.end((err, res) => {
				if (err){
					return done(err);
				}
				Task.find().then((tasks) => { //MongoDB Find
					expect(tasks.length).toBe(2);
					done();
				}).catch((e) => done(e));
			})

	});
});

describe('GET /tasks', () => {
	it('should get all tasks', (done) => {
		request(app)
			.get('/tasks')
			.expect(200)
			.expect((res) => {
				expect(res.body.tasks.length).toBe(2);
			})
			.end(done);
	})

});