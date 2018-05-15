$(function() {

    // $('.Place-Form').submit(function(e) {
    //     e.preventDefault();
    //     $.post('http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/PostPlace', 
    //     {
    //       Place: $('.Place').val()
    //     } );
    //   });
    var place = $('.Place').val();
    var userData = ""+ place +"";
   // 'localhost:57019/service1.svc/temperatures/PostPlace',

    $('#SubmitBtn').click( function(e) {
        e.preventDefault();
        $.ajax({
            url: 'http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/PostPlace',
            type: 'post',
            dataType: 'jsonp',
            data: userData,
            success: function(data) {
       alert(data);
                     }
       });
        // $("#SubmitBtn").click(function(){        
        //     $.post("http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/PostPlace",{ 
        //    $(userData)}, 
        //     function(data) {
        //         alert(data);
        //     });
        //  });
    // $('.Place-Form').submit(function(e) {
    //     //e.preventDefault();
    //     $.post('http://pleaseworknow.azurewebsites.net/service1.svc/temperatures/PostPlace', {
    //       place: $('#Place').val()
    //     });
    // });
   });
});