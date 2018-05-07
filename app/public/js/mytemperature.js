$(function() {

    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:57019/Service1.svc/Temperatures/',
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
