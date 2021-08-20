let image = null, canvas = null;
function loadImage() {
    let imageFile = document.getElementById("imageFile");
    image = new SimpleImage(imageFile);
    canvas = document.getElementById("can");
    canvas.style.filter = "blur(0px)";
    image.drawTo(canvas);
}
function redFilter() {
    if (image !== null) {
        let RedImage = new SimpleImage(image);
        for (let pix of RedImage.values()) {
            let avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;
            pix.setRed(2 * avg);
            pix.setGreen(0);
            pix.setBlue(0);
        }
        RedImage.drawTo(canvas);
    }
    else {
        errorMsg();
    }

}
function greyScaleFilter() {
    if (image !== null) {
        let greyImage = new SimpleImage(image);
        for (let pix of greyImage.values()) {
            let avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;
            pix.setRed(avg);
            pix.setGreen(avg);
            pix.setBlue(avg);
        }
        greyImage.drawTo(canvas);
    }
    else {
        errorMsg();
    }
}

function WindowFilter() {
    if (image !== null) {
        let windowImage = new SimpleImage(image);
        let width = windowImage.getWidth();
        let height = windowImage.getHeight();
        let setWidth = width / 20;
        let setHeight = height / 20;
        let halfWidth = width / 2;
        for (let pix of windowImage.values()) {
            if (pix.getX() < (setWidth)) {
                pix.setRed(193);
                pix.setGreen(111);
                pix.setBlue(237);
            }
            if (pix.getX() > (width - setWidth)) {
                pix.setRed(193);
                pix.setGreen(111);
                pix.setBlue(237);
            }
            if (pix.getY() < setHeight) {
                pix.setRed(193);
                pix.setGreen(111);
                pix.setBlue(237);
            }
            if (pix.getY() > (height - setHeight)) {
                pix.setRed(193);
                pix.setGreen(111);
                pix.setBlue(237);
            }
            if (pix.getY() > (height / 2) - 20 && pix.getY() < (height / 2) + 20) {
                pix.setRed(193);
                pix.setGreen(111);
                pix.setBlue(237);
            }
            if (pix.getX() > (halfWidth) - 20 && pix.getX() < (halfWidth) + 20) {
                pix.setRed(193);
                pix.setGreen(111);
                pix.setBlue(237);
            }
            if (pix.getX() > (halfWidth / 2) - 20 && pix.getX() < (halfWidth / 2) + 20) {
                pix.setRed(193);
                pix.setGreen(111);
                pix.setBlue(237);
            }
            if (pix.getX() > (halfWidth * 1.50) - 20 && pix.getX() < (halfWidth * 1.50) + 20) {
                pix.setRed(193);
                pix.setGreen(111);
                pix.setBlue(237);
            }
        } windowImage.drawTo(canvas);
    }
    else {
        errorMsg();
    }
}
function rainbowFilter() {
    if (image !== null) {
        let rainbowImage = new SimpleImage(image);
        let height=rainbowImage.getHeight();
        let heightParts=height/7;
        for(let pix of rainbowImage.values()){
            let avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
            if(pix.getY()<=heightParts){
                if(avg<128){
                    pix.setRed(2*avg);
                    pix.setGreen(0);
                    pix.setBlue(0);
                }
                else if(avg>=128){
                    pix.setRed(255);
                    pix.setGreen(2*avg-255);
                    pix.setBlue(2*avg-255);
                }
            }
            if(pix.getY()>heightParts && pix.getY()<=2*heightParts){
                if(avg<128){
                    pix.setRed(2*avg);
                    pix.setGreen(0.8*avg);
                    pix.setBlue(0);
                }
                else if(avg>=128){
                    pix.setRed(255);
                    pix.setGreen(1.2*avg-51);
                    pix.setBlue(2*avg-255);
                }
            }
            if(pix.getY()>2*heightParts && pix.getY()<=3*heightParts){
                if(avg<128){
                    pix.setRed(2*avg);
                    pix.setGreen(2*avg);
                    pix.setBlue(0);
                }
                else if(avg>=128){
                    pix.setRed(255);
                    pix.setGreen(255);
                    pix.setBlue(2*avg-255);
                }
            }
            if(pix.getY()>3*heightParts && pix.getY()<=4*heightParts){
                if(avg<128){
                    pix.setRed(0);
                    pix.setGreen(2*avg);
                    pix.setBlue(0);
                }
                else if(avg>=128){
                    pix.setRed(2*avg-255);
                    pix.setGreen(255);
                    pix.setBlue(2*avg-255);
                }
            }
            if(pix.getY()>4*heightParts && pix.getY()<=5*heightParts){
                if(avg<128){
                    pix.setRed(0);
                    pix.setGreen(0);
                    pix.setBlue(2*avg);
                }
                else if(avg>=128){
                    pix.setRed(2*avg-255);
                    pix.setGreen(2*avg-255);
                    pix.setBlue(255);
                }
            }
            if(pix.getY()>5*heightParts && pix.getY()<=6*heightParts){
                if(avg<128){
                    pix.setRed(0.8*avg);
                    pix.setGreen(0);
                    pix.setBlue(2*avg);
                }
                else if(avg>=128){
                    pix.setRed(1.2*avg-51);
                    pix.setGreen(2*avg-255);
                    pix.setBlue(255);
                }
            }
            if(pix.getY()>6*heightParts && pix.getY()<=7*heightParts){
                if(avg<128){
                    pix.setRed(1.6*avg);
                    pix.setGreen(0);
                    pix.setBlue(1.6*avg);
                }
                else if(avg>=128){
                    pix.setRed(0.4*avg+153);
                    pix.setGreen(2*avg-255);
                    pix.setBlue(0.4*avg+153);
                }
            }
        }
        rainbowImage.drawTo(canvas);
    }
    else {
        errorMsg();
    } 
}
function blurFilter() {
    if (image !== null) {
        canvas.style.filter = "blur(1px)";
    }
    else {
        errorMsg();
    } 
}
function clearFilter() {
    if (image !== null) {
        canvas.style.filter = "blur(0px)";
        image.drawTo(canvas);
    }
    else {
        errorMsg();
    }
}

function errorMsg() {
    alert("Select an image");
}