$(function() {

    $(`.delete-burger`).on(`click`, function(event) {


        var id = $(this).data(`id`);

        $.ajax(`/api/burgers/${id}`, {
            type: `DELETE`
        }).then(() => {
            location.reload();
        });

    });

    $(`.change-devoured`).on(`click`, function(event) {
        event.preventDefault();

        var devoured = $(this).data(`newdevour`);

        var newDevour = true;

        if (devoured) newDevour = false;

        var newDevouredState = {
            id: $(this).data(`id`),
            devoured: newDevour
        };


        // Put request
        $.ajax(`/api/burgers`, {
            type: `PUT`,
            data: newDevouredState
        }).then(() => {
            // console.log(`changed to ${newDevoured}`);
            location.reload();
        });
    });


    $(`.create-form`).on(`submit`, function(event) {
        event.preventDefault();

        var newBurger = {
            name: $(`#new-burger-name`).val().trim(),
            devoured: $(`[name=new-devoured]:checked`).val().trim()
        };

        $.ajax(`/api/burgers`, {
            type: `POST`,
            data: newBurger
        }).then(() => {
            location.reload();
        });

    });

});