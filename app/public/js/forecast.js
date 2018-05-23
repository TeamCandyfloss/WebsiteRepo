$(function () {

    var city = '';

    
    var dt = new Date();

    var firstTemp = '';
    var firstDesc = '';
    var firstDate = '';

    var secondTemp = '';
    var secondDesc = '';
    var secondDate = '';

    var thirdTemp = '';
    var thirdDesc = '';
    var thirdDate = '';

    var fourthTemp = '';
    var fourthDesc = '';
    var fourthDate = '';

    var fifthTemp = '';
    var fifthDesc = '';
    var fifthDate = '';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Roskilde,dk&mode=json&APPID=78101fe068bd64da9b6810e36dbed436',
        success: showTemperature
    });

    function showTemperature(data) {

        
    var firstDateUTC = new Date(data.list[0].dt*1000);
    var secondDateUTC = new Date(data.list[1].dt*1000);
    var thirdDateUTC = new Date(data.list[2].dt*1000);
    var fourthDateUTC = new Date(data.list[3].dt*1000);
    var fifthDateUTC = new Date(data.list[4].dt*1000);

        city += '<h2>' + data.city.name + '</h2>';
        firstTemp += '<h3>' + Math.round(data.list[0].temp.day-273.15) + '</h3>';
        firstDesc += '<h3>' + data.list[0].weather[0].main + '</h3>';
        firstDate += '<h3>' + firstDateUTC + '</h3>';

        secondTemp += '<h3>' + Math.round(data.list[1].temp.day-273.15) + '</h3>';
        secondDesc += '<h3>' + data.list[1].weather[0].main + '</h3>';
        secondDate += '<h3>' + secondDateUTC + '</h3>';

        thirdTemp += '<h3>' + Math.round(data.list[2].temp.day-273.15) + '</h3>';
        thirdDesc += '<h3>' + data.list[2].weather[0].main + '</h3>';
        thirdDate += '<h3>' + thirdDateUTC + '</h3>';

        fourthTemp += '<h3>' + Math.round(data.list[3].temp.day-273.15) + '</h3>';
        fourthDesc += '<h3>' + data.list[3].weather[0].main + '</h3>';
        fourthDate += '<h3>' + fourthDateUTC + '</h3>';

        fifthTemp += '<h3>' + Math.round(data.list[4].temp.day-273.15) + '</h3>';
        fifthDesc += '<h3>' + data.list[4].weather[0].main + '</h3>';
        fifthDate += '<h3>' + fifthDateUTC + '</h3>';
        

        $('#firstDay').html(city + firstTemp + firstDesc + firstDate);
        $('#secondDay').html(city + secondTemp + secondDesc + secondDate);
        $('#thirdDay').html(city + thirdTemp + thirdDesc + thirdDate);
        $('#fourthDay').html(city + fourthTemp + fourthDesc + fourthDate);
        $('#fifthDay').html(city + fifthTemp + fifthDesc + fifthDate); 
    }
})