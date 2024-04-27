const { connect, connection } = require('mongoose');
require('dotenv').config()

const connectionString = process.env.MONGO_CONNECT;

connect(connectionString);

module.exports = connection;