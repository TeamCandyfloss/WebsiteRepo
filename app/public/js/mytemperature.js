$(function() {

    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/',
        success: showTemperatures
        });

        function showTemperatures(data) {
     output += '<h1>Previous Temperatures</h1>';
    $.each(data,function(key, item) {
        output += '<h1> ' + item.Place +'  </h1>';
          output += '<h3> ' + item.Temperature + '°' + '</h3>';

    });
    $('.temperatures').html(output);
}
});
