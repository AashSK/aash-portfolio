/* 
function verdoppelung() {

    var ctx = document.getElementById('canvas').getContext('2d');

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    var img = ctx.getImageData(0, 0, w, h);
    //Neues Bild wird erstellt mit neuer Breite und Höhe.
    var img2 = ctx.createImageData(w * 2, h * 2);
    var data = img.data;

    var f = 2; //faktor 2

    //Funktion um auf die pixel zuzugreifen.
    function pixel(x, y) {
        var out = (y * w + x) * 4;
        return (out);
    }
    //Image 2 bekommt die daten von Image 1.
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {

            img2.data[(pixel(x, y))] = img.data[(pixel(x / f, y / f))];
            img2.data[(pixel(x, y))] = img.data[(pixel(x / f, y / f))];
            img2.data[(pixel(x, y))] = img.data[(pixel(x / f, y / f))];
            img2.data[(pixel(x, y))] = img.data[(pixel(x / f, y / f))];

        }
    }
    ctx.canvas.width = w * 2;
    ctx.canvas.height = h * 2;


    ctx.putImageData(img2, 0, 0);

} */
/* function verdoppelung() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var w = canvas.width;
    var h = canvas.height;


    var imgData = ctx.getImageData(0, 0, w, h); // Erfassen Sie die Bilddaten des Canvas
    ctx.clearRect(0, 0, w, h);
    canvas.width = w * 2;
    canvas.height = h * 2;

    ctx.drawImage(img, 0, 0, w * 2, h * 2); // Setzen Sie die ursprünglichen Bilddaten auf das vergrößerte Canvas
} */

function verdoppelung() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var w = canvas.width;
    var h = canvas.height;

    var img = ctx.getImageData(0, 0, w, h);

    var img2 = ctx.createImageData(w * 2, h * 2);
    var data = img.data;

    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            var pixel = (y * w + x) * 4;
            var pixel2 = (y * 2 * w * 2 + x * 2) * 4;

            for (var i = 0; i < 4; i++) {
                img2.data[pixel2 + i] = img.data[pixel + i];
                img2.data[pixel2 + 4 + i] = img.data[pixel + i];
                img2.data[pixel2 + (w * 2 * 4) + i] = img.data[pixel + i];
                img2.data[pixel2 + (w * 2 * 4) + 4 + i] = img.data[pixel + i];
            }
        }
    }

    canvas.width = w * 2;
    canvas.height = h * 2;

    ctx.putImageData(img2, 0, 0);
}


/* function halbieren() {

    var ctx = document.getElementById('canvas').getContext('2d');

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;

    var img = ctx.getImageData(0, 0, w, h);
    var img2 = ctx.createImageData(w / 2, h / 2);
    var data = img.data;

    var f = 2;

    function pixel(x, y) {
        var out = (y * w + x) * 4;
        return (out);
    }

    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {

            img2.data[(pixel(x, y))] = img.data[(pixel(x * f, y * f))];
            img2.data[(pixel(x, y))] = img.data[(pixel(x * f, y * f))];
            img2.data[(pixel(x, y))] = img.data[(pixel(x * f, y * f))];
            img2.data[(pixel(x, y))] = img.data[(pixel(x * f, y * f))];

        }
    }
    ctx.canvas.width = w / 2;
    ctx.canvas.height = h / 2;


    ctx.putImageData(img2, 0, 0);

}
 */

function halbieren() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var w = canvas.width;
    var h = canvas.height;

    var img = ctx.getImageData(0, 0, w, h);

    var img2 = ctx.createImageData(w / 2, h / 2);
    var data = img.data;

    for (var y = 0; y < h / 2; y++) {
        for (var x = 0; x < w / 2; x++) {
            var pixel = (y * 2 * w + x * 2) * 4;
            var pixel2 = (y * w / 2 + x) * 4;

            for (var i = 0; i < 4; i++) {
                img2.data[pixel2 + i] = img.data[pixel + i];
            }
        }
    }

    canvas.width = w / 2;
    canvas.height = h / 2;

    ctx.putImageData(img2, 0, 0);
}
