export function validate(req, res, next) {
  // Authentication logic
  if (req.headers.authorization === "ThisIsvalidToken") {
    return next();
  } else {
    return res.status(401).send("Unauthorized");
  }
}

// this below code is in app.js
/* 
app.get('/secure', validate, (req, res) => {
    res.status(200).send('ThisIsvalidToken');
  });
*/
