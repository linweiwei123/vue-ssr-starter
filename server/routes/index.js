const demo = require('./demo');
const course_index = require('./course-index');
const course_detail = require('./course-detail');
const course_my = require('./course-my');
//<@add page@>

module.exports.init = app =>{

    app.get('/demo', demo.index);
    app.get('/course', course_index.index);
    app.get('/course/detail', course_detail.index);
    app.get('/course/my', course_my.index);
    //<@add page router@>

    return app;
};


