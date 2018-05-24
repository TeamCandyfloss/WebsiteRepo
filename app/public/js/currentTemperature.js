$(function() {

    var output = '';
    var x = 0;
    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://pleaseworknow.azurewebsites.net/service1.svc/currentTemp/',
        success: showTemperature
        });

        function showTemperature(data) {
          while(true)
          {
            output += data.Temperature;
            x = document.getElementById("targetTemp");

            $('.targetTemp').html(x);
          }

}
});
