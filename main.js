$.get('http://example.com/resource.json', {category:'client', type:'premium'})
     .done(function(response) {
           alert("success");
           $("#mypar").html(response.amount);
     })
     .fail(function(error) {
           alert("error");
           $("#mypar").html(error.statusText);
     });