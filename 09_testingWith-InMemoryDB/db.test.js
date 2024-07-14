// db.test.js
import db from "../db";

test("should fetch user from database", (done) => {
  db.get("SELECT * FROM users WHERE id = ?", [1], (err, row) => {
    expect(row.name).toBe("John Doe");
    done();
  });
});
