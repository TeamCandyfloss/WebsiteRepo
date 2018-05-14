$(function() {

    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://pleaseworknow.azurewebsites.net/service1.svc/currentTemp/',
        success: showTemperature
        });

        function showTemperature(data) {
     output += '<h1>Current Temperature</h1>';
     output += '<h1>' + data.Place + '</h1>';
     output += '<h3>' + data.Temperature + '</h3>';
     output += '<h3>' + data.Time + '</h3>';
     currentTemp = data.Temperature;
    $('.currentTemperature').html(output);
}
});
