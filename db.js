const sqlite3 = require("sqlite3").verbose();

// Create a new database in memory
const db = new sqlite3.Database(":memory:");

// Initialize schema and seed data
db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)");
  db.run('INSERT INTO users (name) VALUES ("John Doe")');
});

export default db;
