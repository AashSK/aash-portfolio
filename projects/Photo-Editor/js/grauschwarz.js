function getGraustufe() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;

    for (var i = 0, l = data.length; i < l; i += 4) {
        //Schwellwert von Rgb
        var rgb = Math.round((data[i] + data[i + 1] + data[i + 2]) / 3);
        //RGB farben werden durch den Schwellwert ersetzt
        data[i] = rgb;
        data[i + 1] = rgb;
        data[i + 2] = rgb;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}

function getSchwarzWeiss() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;

    //Schwellwert festlegen
    var s = Math.round(255 / 2);
    //Ausgabe für Überprufung
    console.log(s);

    for (var i = 0, l = data.length; i < l; i += 4) {

        //Schwellwert von allen Pixeln werden überprüft.
        var rgb = Math.round((data[i] + data[i + 1] + data[i + 2]) / 3);
        //Wenn Schwellwert größer als der festgelegten Schwellwert ist werden die Pixel weiß ansonsten Schwarz.
        if (rgb > s) {
            rgb = 255;
        }
        else {
            rgb = 0;
        }
        data[i] = rgb;
        data[i + 1] = rgb;
        data[i + 2] = rgb;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}
function negativ() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;


    for (var i = 0, l = data.length; i < l; i += 4) {
        //RGB werte werden herausgenommen.
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}