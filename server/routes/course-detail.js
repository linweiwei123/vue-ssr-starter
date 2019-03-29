
const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');
const env = process.env.ENV !== 'prod' ? 'dev' : 'prod';
const bundle = fs.readFileSync(path.resolve('server/ssr_code/course/detail-server.js'), 'utf8');
const renderer = createBundleRenderer(bundle, {
    template: fs.readFileSync(path.resolve('server/views/' + env + '/course/detail.html'), 'utf8')
});

module.exports.index = function(req, res){

    if(req.query.ssr === 'true'){
        const context = { url: req.url }
        console.log('render start', new Date().getTime())
        renderer.renderToString(context, (err, html) => {
            if(err){
                console.log(err);
            }
            console.log('render End', new Date().getTime())
            res.end(html)
        })
    }
    else{
        res.render('course/detail')
    }

};
