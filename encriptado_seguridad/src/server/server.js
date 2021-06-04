var app = express();



app.set('port',3000);




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeaader('Access-Control-Allow-Credentials', true);
    next();
});


var server = https.createServer({
    key: fs.readFileSync('./src/server/certificado_ssl/server-key.pem'),
    cert: fs.readFileSync('./src/server/certificado_ssl/server-cert.pem')
}, app)



app.use('/Server', require('./router/router'));

module.exports.app = app;
module.exports.server = server;