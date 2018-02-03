// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    const table = $('#pixel_canvas');

    for (var row = 0; row < height; row++) {
        var tr = document.createElement('tr');
        table.append(tr);

        for (var col = 0; col < width; col++) {
            var td = document.createElement('td');
            tr.append(td);
        }
    }
}

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    makeGrid();
});
