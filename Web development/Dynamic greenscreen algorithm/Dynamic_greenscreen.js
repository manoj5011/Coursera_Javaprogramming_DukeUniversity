let fgImage = null, bgImage = null, canvas1 = null, canvas2 = null,image,image1;
function loadForegroundImage() {
    fgImage = document.getElementById("fgImage");
    canvas1 = document.getElementById("can1");
    image = new SimpleImage(fgImage);
    image.drawTo(canvas1);
}
function loadBackgroundImage() {
    bgImage = document.getElementById("bgImage");
    canvas2 = document.getElementById("can2");
    image1 = new SimpleImage(bgImage);
    image1.drawTo(canvas2);
}
function doGreenScreen() {
    //check that images are loaded
    if (fgImage === null || bgImage === null) {
        alert("images not loaded");
    }
    else {
        let output=new SimpleImage(image.getWidth(),image.getHeight());
        for(let pix of image.values()){
                if(pix.getGreen() > pix.getRed()+pix.getBlue()){
                    let x=pix.getX();
                    let y=pix.getY();
                  var pixel= image1.getPixel(x,y);
                  output.setPixel(x,y,pixel);
                }
                else{
                    output.setPixel(pix.getX(),pix.getY(),pix);
                }
            }
            clearCanvas();
            output.drawTo(canvas1);
    }
}

function clearCanvas() {
    if (canvas1 !== null) {
        let ctx = canvas1.getContext("2d");
        ctx.clearRect(0, 0, canvas1.width, canvas1.height);
        fgImage = null;
        document.getElementById('fgImage').value = null;
    }
    if (canvas2 !== null) {
        let ctx1 = canvas2.getContext("2d");
        ctx1.clearRect(0, 0, canvas2.width, canvas2.height);
        bgImage = null;
        document.getElementById('bgImage').value = null;
    }
}