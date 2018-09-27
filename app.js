var express = require('express'),
    app = express();
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

var indexRoutes = require("./routes/index");
app.use("/", indexRoutes);


// SET PORT=3000
//http://127.0.0.1:3000/
app.listen(process.env.PORT, process.env.IP, function () {
    console.log(process.env.PORT);
    console.log(`Server running at http://${hostname}:${port}/`);
});

