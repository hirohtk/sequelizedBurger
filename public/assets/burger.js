
// BIGGEST QUESTION:  WHY DID WE DO THIS ANONYMOUS JQUERY FUNCTION?  EXPLANATION WAS 
// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {

$(".devour").on("click", function () {
    var id = $(this).data("id");
    //var newSleep = $(this).data("newsleep");

    // Maybe don't need data for this PUT request?  

    //var changeDevoured = {
    //    devoured: true
    //};

    // Send the PUT request.  PUT REQUEST:  add id onto the api route 
    // req.params.id is here
    $.ajax("/api/burger/" + id, {
        type: "PUT"
        //data: changeDevoured
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
        }
    );

});


$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("add burger clicked")
    var newBurger = {
        name: $("#burger").val().trim(),
        // don't need devoured status since MySQL has a default of false on the devoured column
    };

    // Send the POST request.
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("added a new Burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

});
