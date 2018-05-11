var express = require('express');
var reload = require('reload');
var app = express();

app.set('port',process.env.PORT || 9988);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Ultimate 2K';
app.locals.productName ='Ultimate 2K';


app.use(express.static('app/public'));
app.use(require('./routes/index'));

var server = app.listen(app.get('port'), function(){
    console.log('Lytter på Port ' + app.get('port'));
}
)
