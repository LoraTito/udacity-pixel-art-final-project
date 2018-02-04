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
    var color=$('#colorPicker').val();
    // const opacity = $('#opacity').val();

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
        // var color=$('#colorPicker').val();
        $(this).css('background-color', color);
    });

    bucket.on('click', function(){
        // var color=$('#colorPicker').val();
        $(table).css('background-color', color);
    });

    pencil.on('click', function(){
        var mouseHold = false;
        table.on("mousedown", "td", function() {
            mouseHold = true;
            $(this).css("background-color", color);
        });
        table.on("mouseenter", "td", function() {
            if (mouseHold) {
                $(this).css("background-color", color);
            }
        });
        $('body').on("mouseup", function() {
            mouseHold = false;
        });
    });


// //================= Submit/Clear Button ===================//
//     $('form').submit(function(e) {
//         table.empty();
//         e.preventDefault();
//         makeGrid();
//     });

    // opacity.on('click', 'td', function(){
    //     var color= $('#colorPicker').val();
    //     var opacity = $('#opacity').val();
    //     $(this).css({ opacity: opacity })
    // });

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
