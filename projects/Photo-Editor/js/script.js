//Canvas laden
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
let fileInput = document.querySelector('#fileloadinput');
//fileInput.addEventListener('change', loadFile, false);
//const reader = new FileReader();
let file;
let img;

// function to clear Canvas
function clear() {

    var w = canvas.width;
    var h = canvas.height;
    //Canvas wird geleert.
    ctx.clearRect(0, 0, w, h);
}

function renderImage() {
    if (img) {
        canvas.height = img.height * 0.65;
        canvas.width = img.width * 0.65;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
}

//new way to load image
fileInput.addEventListener("change", () => {
    img = new Image();
    img.addEventListener("load", () => {
        clear();
        renderImage();
    })
    img.src = URL.createObjectURL(fileInput.files[0]);
});

//old way with Filereader
/* function loadFile(e) {
    //Reader um die Datei zu lesen.
    file = e.target.files[0];

    img = new Image();

    reader.readAsDataURL(file);

    img.onload = () => {
        clear();
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    reader.onloadend = () => {
        img.src = reader.result;
    }
    reader.onerror = () => {
        console.log(reader.error);
        alert("couln't load the image");
    };

} */

function revert() {
    clear();
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

const downloadBtn = document.querySelector('#dlButton');
downloadBtn.addEventListener('click', () => {
    const dataURI = canvas.toDataURL('image/jpeg', 1.0);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = dataURI;
    a.download = "canvas-image.jpg";
    a.click();
});


const deleteImage = document.querySelector('#delete');
deleteImage.addEventListener('click', () => {
    clear();
});

/*
alte funktion zum Download
function download() {
    //Verzeichnis vom Bild und festlegung vom Bildtyp.
    var dt = canvas.toDataURL('image/jpeg', 1.0);
    this.href = dt;
}; */

//Wenn Download button geklickt wird, wird das Bild heruntergeladen.
//downloadLnk.addEventListener('click', download, false);




