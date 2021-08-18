require('dotenv').config();
const express = require('express');
const app = express();

app.set("port", process.env.PORT || process.env.MY_LOCAL_PORT);
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index');
});


let server = app.listen(app.get("port"), () => {
  console.log('Example app listening on port ' + app.get("port"))
});

