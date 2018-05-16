$(function() {

    var output = '';

    var date = $('#datepicker').text();

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/specifics/' + date,
        success: showTemperatures
        });

        function showTemperatures(data) {
     output += '<h1>Specific Temperatures </h1>';
    $.each(data,function(key, item) {
          output += '<h1> ' + item.Place +'  </h1>';
          output += '<h3> ' + item.Temperature + '°' + '</h3>';

    });
    $('.temperatures').html(output);
}
});
