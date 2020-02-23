var express = require('express')
var app = express()
var hbs = require('hbs');
var path = require('path');

const port = process.env.PORT || 3000

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'../templates/views'));  
hbs.registerPartials(path.join(__dirname,'../templates/partials'));

app.get('/', (req, res) => {
    res.render('home', {
        page: "About"
    })
})

app.listen(port, () =>{
    console.log("ah ha, we did it boys")
})

