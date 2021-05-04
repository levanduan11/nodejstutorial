const express = require('express')
const morgan=require('morgan')
const handlebars  = require('express-handlebars');
const path = require('path');
const app = express()
const port = 5000
const route=require('./routes')

app.use(express.static(path.join(__dirname, 'public')));
//http logger
app.use(morgan('combined'))

//template engine

app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//route innit
route(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})