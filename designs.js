// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    const table = $('#pixel_canvas');
    const bucket = $('#bucket');
    const pencil = $('#pencil');
    const single = $('#single');
    var mouseHold = false;
    const tool = $('.tool');
    // var color = $('#colorPicker').val();
    // const opacity = $('#opacity').val();

    table.children().remove();

    for (var row = 0; row < height; row++) {
        var tr = document.createElement('tr');
        table.append(tr);

        for (var col = 0; col < width; col++) {
            var td = document.createElement('td');
            tr.append(td);
        }
    }

    table.on('click', 'td', function () {
        var color=$('#colorPicker').val();
        $(this).css('background-color', color);
    });

    bucket.on('click', function () {
        $("#used-tool").append('<p>You are using Bucket tool</p>');
        var color=$('#colorPicker').val();
        $(table).css('background-color', color);
    });

    pencil.on('click', function () {
        $("#used-tool").append('<p>You are using Pencil tool</p>');
        var color=$('#colorPicker').val();
        mouseHold = false;
        table.on("mousedown", "td", function () {
            mouseHold = true;
            $(this).css("background-color", color);
        });
        table.on("mouseenter", "td", function () {
            if (mouseHold) {
                $(this).css("background-color", color);
            }
        });
        $('body').on("mouseup", function () {
            mouseHold = false;
        });

    });

    single.on('click', (function () {
        $("#used-tool").append('<p>You are using Single pixel tool</p>');
        table.on("mousedown", "td", function () {

            mouseHold = false;
        });
    }));

    // opacity.on('click', 'td', function(){
    //     var color= $('#colorPicker').val();
    //     var opacity = $('#opacity').val();
    //     $(this).css({ opacity: opacity })
    // });

    $('td').dblclick(function () {
        $(this).css('background-color', '#f8f8ff');
    });

    $('#reset').on('click', function () {
        $('td').css('background-color', '#f8f8ff');
    });
}


$('#sizePicker').submit(function (event) {
    event.preventDefault();
    makeGrid();
});
