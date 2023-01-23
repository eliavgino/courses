const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "Courses",
  password: "eliav1301012",
  port: 5432,
});
client.connect();
module.exports = client;
