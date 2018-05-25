setTimeout(currentWeather, 1000);

function currentWeather() {
  $(function() {

      var currentTime = new Date();
      var city = '';
      var temperature = '';
      var place = $('#place').val();
      var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Roskilde,dk&mode=json&APPID=78101fe068bd64da9b6810e36dbed436';
      
      $.ajax({
          type : 'GET',
          dataType: 'jsonp',
          url: apiUrl,
          success: showTemperature
          });

          function showTemperature(data) {
            city += data.city.name;
            temperature += JSON.stringify(Math.round(data.list[0].temp.day-273.15));
            temperature = temperature.replace("\"","");
            temperature = temperature.replace("\"","");
            
            $('.currentAPI').html('<h1> Current API Temperature </h1>' +  '<br><h3>' + city + '</h3><h3>' + temperature + '</h3><h3>' + currentTime.getHours() + ':' + currentTime.getMinutes() + '</h3>');

      }
  });
}
