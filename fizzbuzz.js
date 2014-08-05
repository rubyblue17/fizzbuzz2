$(document).ready(function(){
    $("#add_number").submit(handleAddItem);

function handleAddItem() {

		var txtbox = document.getElementById('number_input');
		var itemtext = txtbox.value;
		event.preventDefault();

			$('<li></li>').appendTo('#results').html(' + itemtext + );
		txtbox.value = '';
	}

    $('.number_input').keydown(function(event) {
        if (event.keyCode === 13) {
     
                $('#results').show();
                $('#results').contents().remove();
                count(number);
            }
        } );
        



// var numberEntered = function()


// for (var i = 0 ; i < 120; i+= 12) {
//	console.log(i);
// }


    });
