function kontrast() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;
    var kontrast = 10;


    for (var i = 0, l = data.length; i < l; i += 4) {

        var s = Math.round((data[i] + data[i + 1] + data[i + 2]) / 3);

        data[i] += (data[i] / s) * kontrast;
        data[i + 1] += (data[i + 1] / s) * kontrast;
        data[i + 2] += (data[i + 2] / s) * kontrast;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}

function kontrastSenken() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;
    var kontrast = 10;


    for (var i = 0, l = data.length; i < l; i += 4) {

        var s = Math.round((data[i] + data[i + 1] + data[i + 2]) / 3);

        data[i] -= (data[i] / s) * kontrast;
        data[i + 1] -= (data[i + 1] / s) * kontrast;
        data[i + 2] -= (data[i + 2] / s) * kontrast;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}