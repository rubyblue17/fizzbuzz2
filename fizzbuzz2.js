
var userChoice = prompt("Pick a number between 1 and 100");

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


        else{
            $("#output-list").append("<li><h4>"+ i +"</h4></li>")
        }
    };

$(document).ready(function(){
userChoice();
};

