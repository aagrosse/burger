$(function () {
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        console.log('add burger listener');

        let newBurger = $('#newBurger').val().trim()

        console.log(newBurger);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: {
                burger: newBurger
            }
        }).then(function () {
            console.log('added a new burger');
            location.reload();
        })
    })

    $('.eatburger').on('click', function (event) {
        let id = $(this).data('id');
        console.log(id)

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: {
                burgerid: id
            }
        }).then(function () {
            location.reload();
        })
    })

    $('.trashburger').on('click', function (event) {
        let id = $(this).data('id');
        console.log(id)

        $.ajax('/api/burgers/' + id, {
            type: 'DELETE',
            data: {
                burgerid: id
            }
        }).then(function () {
            location.reload();
        })
    })
})
