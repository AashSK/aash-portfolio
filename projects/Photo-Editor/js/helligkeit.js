function helligkeit() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;
    //Helligkeitsfaktor wird festgelegt.
    var a = 5;

    for (var i = 0, l = data.length; i < l; i += 4) {
        //Helligkeitsfaktor wird den RGB Werten draufaddiert.  
        data[i] += a;
        data[i + 1] += a;
        data[i + 2] += a;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}
function helligkeitSenken() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imageData.data;
    var helligkeit = -5;

    for (var i = 0, l = data.length; i < l; i += 4) {
        //Helligkeitsfaktor wird den RGB Werten subtrahiert.  
        data[i] += helligkeit;
        data[i + 1] += helligkeit;
        data[i + 2] += helligkeit;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);

}