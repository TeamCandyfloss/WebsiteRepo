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
     output += '<br>';
     output += '<h3 id="place">' + data.Place + '</h3>';
     output += '<h3>' + data.Temperature + '</h3>';
     output += '<h3>' + data.Time + '</h3>';
    $('.currentTemperature').html(output);
    }
});

function celsius(){
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
    $('.currentTemperature').html(output);
    }
});
}

function kelvin(){
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
         output += '<h3>' + (data.Temperature+273.15) + '</h3>';
         output += '<h3>' + data.Time + '</h3>';
        $('.currentTemperature').html(output);
    }
    });
}

function fahrenheit(){
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
         output += '<h3>' + ((data.Temperature*1.8)+32) + '</h3>';
         output += '<h3>' + data.Time + '</h3>';
        $('.currentTemperature').html(output);
    }
    });
}
