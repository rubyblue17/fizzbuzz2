$(document).ready(function(){

var userChoice = prompt("Pick a number between 1 and 1,000");

    if(userChoice <=1000 && userChoice >=1 && userChoice % 1 == 0) {  

    for (var i = 1; i <= userChoice; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            $("#output-list").append("<li><h1> FizzBuzz! </h1></li>")
        }

        else if (i % 3 === 0){
            $("#output-list").append("<li><h2> Fizz </h2></li>")
        }

        else if (i % 5 === 0){
            $("#output-list").append("<li><h3> Buzz </h3></li>")
        }

        else {
            $("#output-list").append("<li><h4>"+ i +"</h4></li>")
        }
    }
	}

  else {
        var userChoice = prompt("Whoops! Please enter a whole number between 1 and 1,000 (no decimals)"); 


    if(userChoice <=1000 && userChoice >=1 && userChoice % 1 == 0) {  

    for (var i = 1; i <= userChoice; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            $("#output-list").append("<li><h1> FizzBuzz! </h1></li>")
        }

        else if (i % 3 === 0){
            $("#output-list").append("<li><h2> Fizz </h2></li>")
        }

        else if (i % 5 === 0){
            $("#output-list").append("<li><h3> Buzz </h3></li>")
        }

        else {
            $("#output-list").append("<li><h4>"+ i +"</h4></li>")
        }
    }
	}

  else {
        alert("Try again!"); 
        location.reload();
        
      };


      };


});
