$(document).ready(function(){

    var carName = ["Mercedes", "Toyota", "Honda", "BMW"];

    function displayCarsInfo() {
    
      var carName = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ carName +"&api_key=n2D1WMfVG1Zgk04ZO01fYuSTUXx2eGmw&limit=10";
    

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
    
        console.log(response);
       
 
        for (var i = 0; i < response.data.length; i++) {
    

        var rating = response.data[i].rating;
        var source = response.data[i].source;
    
        var ratingData = $('<p>').text('Rating: ' + rating);
        var sourceInfo = $('<p>').text('source: ' + source);
    
        $("#cars").prepend(ratingData);
        $("#cars").prepend(sourceInfo);
    
        var imageURL = response.data[i].images.fixed_height.url;
        var gif = $('<img class="column">').attr('src', imageURL);
    
    
        $("#cars").prepend(gif);
    
      }});
    
    }
    
    

    function renderButtons() {
    

      $("#button").empty();
    
      for (var i = 0; i < carName.length; i++) {
    
        var car = $("<button>");
    
        car.addClass("cars-button btn btn-info");
    
        car.attr("data-name", carName[i]);
    
        car.text(carName[i]);
    
        $("#button").append(car);
      }
    }
    
    $("#addCars").on("click", function(event) {
      event.preventDefault();
    
      var newCars = $("#cars-input").val().trim();
    
      carName.push(newCars);
    
      renderButtons();
    });
    
    $(document).on("click", ".cars-button", displayCarsInfo);
    
    renderButtons();
    
    });