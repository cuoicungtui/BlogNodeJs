const newsRouter = require('./news.router');
const homeRouter = require('./home.router');

function route(app){

    app.use('/news',newsRouter);
    app.use('/',homeRouter);
   
}

module.exports = route