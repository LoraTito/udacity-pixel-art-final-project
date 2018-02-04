// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    const table = $('#pixel_canvas');
    const bucket = $('#bucket');

    table.children().remove() ;

    for (var row = 0; row < height; row++) {
        var tr = document.createElement('tr');
        table.append(tr);

        for (var col = 0; col < width; col++) {
            var td = document.createElement('td');
            tr.append(td);
        }
    }

    table.on('click', 'td', function(){
        var color=$('#colorPicker').val();
        $(this).css('background-color', color);
    });

    bucket.on('click', function(){
        var color=$('#colorPicker').val();
        $(table).css('background-color', color);
    });

    $('td').dblclick(function(){
        $(this).css('background-color', '#f8f8ff');
    });

    $('#reset').click(function(){
        $('td').css('background-color', '#f8f8ff');
    });
}


$('#sizePicker').submit(function (event) {
    event.preventDefault();
    makeGrid();
});
