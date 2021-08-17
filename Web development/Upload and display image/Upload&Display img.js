let orgImage;
let greyImage
function upload(){
let canvas=document.getElementById("can");
let fileInput=document.getElementById("imageUpload");
orgImage=new SimpleImage(fileInput);
greyImage=new SimpleImage(fileInput);
orgImage.drawTo(canvas);
}
function makeGrey(){
for(let pixel of greyImage.values()){
    let avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
}
let canvas2=document.getElementById("can2");
greyImage.drawTo(canvas2);
}