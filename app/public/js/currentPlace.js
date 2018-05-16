$(function() {

    // $('.Place-Form').submit(function(e) {
    //     e.preventDefault();
    //     $.post('http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/PostPlace', 
    //     {
    //       Place: $('.Place').val()
    //     } );
    //   });
    
   // 'localhost:57019/service1.svc/temperatures/PostPlace',

    $('#SubmitBtn').click( function(e) {
        var place = $('#placex').val();
    var userData = {"Place":place};
        e.preventDefault();
        $.ajax({
            url: 'http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/PostPlace',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            //encoding: 'Encoding.UTF8',
            data: JSON.stringify(userData), //'"virknu"',
            
    //    });
        // $("#SubmitBtn").click(function(){        
        //     $.post("http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/PostPlace",JSON.stringify(userData), 
        //     function(data) {
        //         alert(data);
        //     });
        //  });
    // $('.Place-Form').submit(function(e) {
    //     e.preventDefault();
    //     $.post('http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/PostPlace', {
    //       place: $('.Place').val()
    //     });
     });
   });
});