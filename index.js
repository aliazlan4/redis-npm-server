const RedisServer = require('redis-server');

// Simply pass the port that you want a Redis server to listen on.
const server = new RedisServer({
	port: 6379,
	bin: './redis-server'
});

server.open((err) => {
	if (err === null) {
		console.log('Redis Server Started Successfully');
	} else {
		console.log('Error in starting server:', err);
	}
});