
function rot() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;

    for (var i = 0, l = data.length; i < l; i += 4) {

        data[i] *= 2.0;
        data[i + 1] *= 1.0;
        data[i + 2] *= 1.0;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}
function rotminus() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;


    for (var i = 0, l = data.length; i < l; i += 4) {

        data[i] /= 2.0;
        data[i + 1] *= 1.0;
        data[i + 2] *= 1.0;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}

function grün() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;


    for (var i = 0, l = data.length; i < l; i += 4) {

        data[i] *= 1.0;
        data[i + 1] *= 2.0;
        data[i + 2] *= 1.0;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}
function grünminus() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;


    for (var i = 0, l = data.length; i < l; i += 4) {

        data[i] *= 1.0;
        data[i + 1] /= 2.0;
        data[i + 2] *= 1.0;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}
function blau() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;


    for (var i = 0, l = data.length; i < l; i += 4) {

        data[i] *= 1.0;
        data[i + 1] *= 1.0;
        data[i + 2] *= 2.0;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}
function blauminus() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;


    for (var i = 0, l = data.length; i < l; i += 4) {

        data[i] *= 1.0;
        data[i + 1] *= 1.0;
        data[i + 2] /= 2.0;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}