//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent("plane-rotation", {
  schema: {
    speedOfRotation: {type: "number", default: 0},
    speedOfPosChange: {type: "number", default: 0}
  },
  init: function(){
    window.addEventListener("keydown", (e) =>{
      var planeRotation = this.el.getAttribute("rotation")
      var planePosition = this.el.getAttribute("position")
      if(e.key == "ArrowRight"){
        if(this.data.speedOfRotation < 5){
        this.data.speedOfRotation += 0.8
        planeRotation.x += this.data.speedOfRotation
        this.el.setAttribute("rotation", planeRotation)
        }
      }
      if(e.key == "ArrowDown"){
        if(this.data.speedOfPosChange > -3){
          this.data.speedOfPosChange -= 0.0005
          planePosition.y += this.data.speedOfPosChange
          this.el.setAttribute("postion", planePosition)
        }
        /*if(this.data.speedOfRotation.z > -10){
          this.data.speedOfRotation.z -= 0.5
          planeRotation.z += this.data.speedOfRotation.z
          this.el.setAttribute("rotation", planeRotation)
        }*/
      }
    })
  },
})




