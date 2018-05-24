$(function() {

    var icon = '';
    var description = '';
    var city = '';
    var windInfo = '';
    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Roskilde&APPID=78101fe068bd64da9b6810e36dbed436',
        success: showTemperature
        });

        function showTemperature(data) {
          icon += JSON.stringify(data.weather[0].icon);
          icon = icon.replace("\"","");
          icon = icon.replace("\"","");
          description += JSON.stringify(data.weather[0].main);
          description = description.replace("\"","");
          description = description.replace("\"","");
          city += JSON.stringify(data.name);
          city = city.replace("\"","");
          city = city.replace("\"","");
          windInfo = data.wind.speed + ' m/s';
          $('.weatherIcon').html('<img src=http://openweathermap.org/img/w/' + icon + '.png>')
          $('.currentAPI').html('<h3>' + description + '</h3>' + '<h3>' + city + '</h3>' + '<h3>' + windInfo + '</h3>');

    }
});
