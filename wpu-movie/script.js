$('#search-button').on('click', function () {

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '627f7a12',
            's': $('#search-input').val()
        },
        success: function (result) {
            console.log(result);
        }
    });
});