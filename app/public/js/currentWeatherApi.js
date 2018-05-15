setTimeout(currentWeather, 1000);

function currentWeather() {
  $(function() {

      var currentTime = new Date();
      var city = '';
      var temperature = '';
      var place = $('#place').text();

      $.ajax({
          type : 'GET',
          dataType: 'jsonp',
          url: 'http://api.openweathermap.org/data/2.5/weather?q=' + place + ',DK&APPID=78101fe068bd64da9b6810e36dbed436',
          success: showTemperature
          });

          function showTemperature(data) {
            city += JSON.stringify(data.name);
            city = city.replace("\"","");
            city = city.replace("\"","");
            temperature += JSON.stringify(Math.round(data.main.temp-273.15));
            temperature = temperature.replace("\"","");
            temperature = temperature.replace("\"","");
            $('.currentAPI').html('<h1> Current API Temperature </h1>' +  '<br><h3>' + city + '</h3><h3>' + temperature + '</h3><h3>' + currentTime.getHours() + ':' + currentTime.getMinutes() + '</h3>');

      }
  });
}
