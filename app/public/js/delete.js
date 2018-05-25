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
        output += '<th>Delete</th>';
        output += '</tr>';

        $.each(data, function (key, item) {


            output += '<tr>';
            output += '<th>' + item.ID + '</th>';
            output += '<td>' + item.Temperature + '°</td>';
            output += '<td>' + item.Place + '</td>';
            output += '<td>' + item.Date + '</td>';
            output += `<td> <div class="media-left"><button id='${item.ID}' class="delete-btn btn btn-xs btn-danger">Delete<span id="' + item.Id + '" class="glyphicon glyphicon-remove"></span></button></div> </td>`;
            output += '</tr>';


        });

        $('#temperatures').html(output);
    };

    $(document).on("click", '.delete-btn', function (e) {
        var deleteurl = 'http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/';
        var deleteData = {'ID':e.target.id};
        $.ajax({
            type: 'delete',
            url: deleteurl,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(deleteData),
            success: updatemeasurment
        });

        function updatemeasurment(data) {
            window.location.reload();


        };
    });

});