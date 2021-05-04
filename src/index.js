const express = require('express')
const morgan=require('morgan')
const handlebars  = require('express-handlebars');
const path = require('path');
const app = express()
const port = 5000

app.use(express.static(path.join(__dirname, 'public')));
//http logger
app.use(morgan('combined'))

//template engine

app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => { res.render('home')})

app.get('/news', (req, res) => { res.render('news')})

app.get('/search', (req, res) => { 
  console.log(req.query.q)
  res.render('search')})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})