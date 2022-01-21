const express = require("express");
const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads

app.get("/", function (req, res) {
    res.send(req.headers, req.originalUrl, req.method, req.body);
  });
  
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
