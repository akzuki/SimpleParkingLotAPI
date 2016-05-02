var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://akzuki:123456@localhost:5432/parkinglot';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, x VARCHAR(40) not null, y VARCHAR(40) not null, status BOOLEAN)');
query.on('end', function() { client.end(); });