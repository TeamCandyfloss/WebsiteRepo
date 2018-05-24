var express = require('express');
var reload = require('reload');
var app = express();

app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Ultimate 2K';
app.locals.productName = 'Ultimate 2K';
app.locals.currentTemp = '';


app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/alarms'));
app.use(require('./routes/weatherAPI'));
app.use(require('./routes/forecast'));
app.use(require('./routes/compare'));
app.use(require('./routes/comparedate'));
app.use(require('./routes/search'));

var server = app.listen(app.get('port'), function(){
    console.log('Lytter på Port ' + app.get('port'));
}
)
