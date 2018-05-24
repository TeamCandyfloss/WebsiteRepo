$(function () {

    var output = '';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/',
        success: showMeasurements
    });


    function showMeasurements(data) {

        output += '<tr>';
        output += '<th>ID</th>';
        output += '<th>Temperature</th>';
        output += '<th>Location</th>';
        output += '<th>Date</th>';
        output += '<td></td>';
        output += '</tr>';

        $.each(data, function (key, item) {


            output += '<tr>';
            output += '<th>' + item.ID + '</th>';
            output += '<td>' + item.Temperature + '</td>';
            output += '<td>' + item.Place + '</td>';
            output += '<td>' + item.Date + '</td>';
            output += `<td> <div class="media-left"><button id='${item.ID}' class="feedback-delete btn btn-xs btn-danger"><span id="' + item.Id + '" class="glyphicon glyphicon-remove"></span></button></div> </td>`;
            output += '</tr>';


        });

        $('#temperatures').html(output);
    };

    $(document).on("click", '.feedback-delete', function (e) {
        var deleteurl = 'http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/' + e.target.id;

        $.ajax({
            type: 'delete',
            url: deleteurl,
            success: updatemeasurment,
            dataType: 'jsonp',
            crossDomain: true
        });

        function updatemeasurment(data) {
            // window.location.reload();


        };
    });

});