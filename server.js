var express = require("express");
var path = require("path");
var fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'));

app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});