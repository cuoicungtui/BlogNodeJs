const newsRouter = require('./news.router');
const homeRouter = require('./home.router');
const courseRouter= require('./course.router');

function route(app){

    app.use('/news',newsRouter);
    app.use('/',homeRouter);
    app.use('/course',courseRouter);
}

module.exports = route