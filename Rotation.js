//Terrain Rotation
AFRAME.registerComponent("island-rotation-reader", {
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
  AFRAME.registerComponent("driver-rotation-reader",{
    schema:{
      speedofRotation:{type:"number", default: 0 },
      speedofPosition:{type:"number", default: 0 }
    },
    init: function() {
      window.addEventListener("keydown", (e)=>{
        this.data.speedOfRotation=this.el.getAttribute("rotation")
        this.data.speedofPosition=this.el.getAttribute("position")
        var driverRotation=this.data.speedofRotation
        var driverPosition=this.data.speedofPosition
        if(e.key === "ArrowRight"){
          if(driverRotation.x<10){
            driverRotation.x+=0.5
            this.el.setAttribute("rotation",planeRotation)
          }
        }
        if(e.key === "ArrowLeft"){
          if(driverRotation.x>-10){
            driverRotation.x-=0.5
            this.el.setAttribute("rotation",planeRotation)
          }
        }
        if(e.key === "ArrowUp"){
          if(driverRotation.z<20){
            driverRotation.z+=0.5
            this.el.setAttribute("rotation",planeRotation)
          }
          if(driverPosition.y<2){
            driverPosition.y+=0.01
            this.el.setAttribute("position",planePosition)
          }
        }
        if(e.key === "ArrowDown"){
          if(driverRotation.z>-10){
            driverRotation.z-=0.5
            this.el.setAttribute("rotation",planeRotation)
          }
          if(driverPosition.y>-2){
            driverPosition.y-=0.01
            this.el.setAttribute("position",planePosition)
          }
        }
  
  
      })
  
  
      
    }
    
  })
  
  
  
  