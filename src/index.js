const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes/index.js')
const db = require('./config/db/index')

// connect db

db.conect();

app.use(express.static(path.join(__dirname, 'public')))

// post du lieu
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.use(morgan('combined'));

// template engine
app.engine('hbs', exphbs({
  extname : ".hbs"
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})