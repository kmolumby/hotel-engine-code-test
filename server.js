const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const repositoryController = require("./controllers/repositoryController");

app.use(bodyParser.urlencoded({extended: false}));
app.use("/repository", repositoryController);
app.use(express.static(__dirname + '/public'));




// Make a request to githubs api for user
app.get('/', (req,res) => {
 
    res.render('index.ejs')
    
})




const port = process.env.PORT || "3000"
app.listen(port, () => {
    console.log(`LIVE @ ${port}`);
})