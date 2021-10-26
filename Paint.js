
window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = 900;
    canvas.width = 1600;
    let painting = false;
    
    
    
    console.log("Loaded JS");

    function startPosition(){
        painting = true;
        console.log("startPosition");
    
    }
    
    function finishedPosition(){
        painting = false;
        console.log("finishedPosition");
    }
    
    function draw(e)
    {
        console.log("draw");
        if (!painting)
        {
            console.log("ending");
            return;
        }
        ctx.strokeStyle = "#3C0";
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        
    
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
      
         
        
        
    
    }
    

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    
});




   



