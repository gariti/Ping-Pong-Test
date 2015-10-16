jQuery(document).ready(function() {
  //user click on 'Let's Play!' button
  $("form").submit(function(event) {
    event.preventDefault(); //prevent default form submit
    var userNumber = $("#input-field").val(); //get value from input-field
    $("#input-field").val(""); //clear value from input-field;
    $("#video").hide(); //hide the video
    $("ul").empty(); //remove any existing list items

    //error check: make sure the number is valid
    if (userNumber <= 0) {
      alert("Error! You must enter a positive number (greater than zero).");
    } else {
      console.log("You entered: " + userNumber);
      //loop from 1 to the number the user entered
      for (var i = 1; i <= userNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          $("ul").append("<li>ping-pong</li>"); //if divisible by 3 and 5 insert 'ping-pong'
        } else if (i % 3 === 0) {
          $("ul").append("<li>ping</li>"); //if divisible by 3 insert 'ping'
        } else if (i % 5 === 0) {
          $("ul").append("<li>pong</li>"); //if divisible by 5 insert 'pong'  
        } else {
          $("ul").append("<li>" + i + "</li>"); //else insert current number  
        }
      };
      $("#video").fadeIn(); //show the epic ping pong video! Just because I love ping pong :)
    }
  });
});