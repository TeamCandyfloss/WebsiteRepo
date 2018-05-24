

function currentWeather() {
    $(function () {

        var currentTime = new Date();
        var city = '';
        var temperature = '';
        var windInfo = '';
        var location = $('#location').val();
        var country = $('#country').val();
        var selectedCountry = '';

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + ',' + country + '&mode=json&APPID=78101fe068bd64da9b6810e36dbed436',
            success: showTemperature
        });

        function showTemperature(data) {
            city += data.city.name;
            if (country == "dk") {
                selectedCountry = "Denmark"
            } else if (country == "se") {
                selectedCountry = "Sweden"
            } else if (country == "no") {
                selectedCountry = "Norway"
            }

            temperature += JSON.stringify(Math.round(data.list[0].temp.day - 273.15));
            windInfo += data.list[0].speed;

            $('#currentWeather').html('<h3>' + city + '</h3><h3>' + selectedCountry + '</h3><h3>' + temperature + '°</h3><h3>' + windInfo + ' m/s' + '</h3><h3>' + currentTime.getHours() + ':' + currentTime.getMinutes() + '</h3>');

        }
    });
}
