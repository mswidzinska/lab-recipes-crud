const express = require("express");
const hbs = require("hbs")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express();

// let options = {
//     useNewUrlParser: true,
//     useUnifiedTypology: true
// }
mongoose.connect("mongodb://localhost:27017/recipeApp", (err, connectionInfo) => {
    if (err) console.log(err);
    else console.log("connected to database")
})
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "public"));
// set up handlebars

app.use("/", require("./routes/list"));
app.get('/', (req, res, next) => {
    res.render('index');
});


app.listen(3000, () => {
    console.log("Webserver is listening");
})