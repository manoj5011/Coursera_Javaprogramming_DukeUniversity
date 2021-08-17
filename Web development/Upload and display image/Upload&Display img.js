function upload(){
let canvas=document.getElementById("can");
let fileInput=document.getElementById("imageUpload");
let image=new SimpleImage(fileInput);
image.drawTo(canvas);
}