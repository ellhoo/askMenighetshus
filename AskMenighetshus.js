//function draw() {
//    var canvas = document.getElementById('canvas');
//    if (canvas.getContext) {
//        var ctx = canvas.getContext('2d');
//
//            ctx.beginPath();
//            ctx.moveTo(, );
//            ctx.lineTo(, );
//            ctx.lineTo(, );
//    }
//}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.strokeText("Hello World",10,50);