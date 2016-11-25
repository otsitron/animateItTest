if (document.createElement('canvas').getContext) {
  console.log("Success! The canvas element is supported.");
}

window.onload = function () {
    console.log("window loaded");
    //Our code here...


    (function drawFrame () {
      window.requestAnimationFrame(drawFrame, canvas);

      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");

      // Create gradient
      var grd = ctx.createLinearGradient(0,0,200,0);
      grd.addColorStop(0,"red");
      grd.addColorStop(1,"white");

      // Fill with gradient
      ctx.fillStyle = grd;
      ctx.fillRect(200,10,150,80);

      ctx.beginPath();
      ctx.arc(200,150,70,0,2*Math.PI);
      ctx.stroke();

      ctx.font = "30px Arial";
      ctx.fillText("Hello World",10,50);
      ctx.strokeText("Hello World",10,100);

    }());
  };
  