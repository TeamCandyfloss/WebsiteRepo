function tempByDate(){
$(function() {

    var output = '';

    var date = $('.datepicker').val();

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/specificdate/' + date,
        success: showTemperatures
        });

        function showTemperatures(data) {
     output += '<tr>';
     output += '<th> Location </th>';
     output += '<th> Temperatur </th>';
     output += '<th> Klokkeslæt </th>';
     output += '</tr>';
    $.each(data,function(key, item) {
        output += '<tr>';
        output += '<td> '+ item.Place +' </td>';
        output += '<td> '+ item.Temperature +' </td>';
        output += '<td> '+ item.Time +' </td>';
        output += '</tr>';

    });
    $('.temperatures').html(output);
}
});
}