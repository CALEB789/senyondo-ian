window.onload = function(){
alert(" Happy Birthday Ssenyondo Ian");
const canvas = document.getElementById("cnv");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let drawing = false;

const edge = 50;
const mouse = {
    x: null,
    y: null
}
var down = document.getElementById("download");
down.onclick = function(){
image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream"); var link = document.createElement('a'); link.download = "senyondo.png"; link.href = image; link.click();
}
bty = document.getElementById("bty");
bty.ontouchstart = function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
bty.ontouchend = function(){
    return false;
}
window.addEventListener("touchmove",function(e){
    mouse.x =e.touches[0].clientX;
    mouse.y=e.touches[0].clientY;
    //console.log(mouse.x,mouse.y)
})
window.addEventListener("mousemove",function(e){
    mouse.x = e.x;
    mouse.y=e.y;
    //console.log(mouse.x,mouse.y)
})
class Root{
constructor(x,y,color,centerx,centery){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedx = 0;
    this.speedy = 0;
    this.centerx = centerx;
    this.centery = centery;
    }
    draw(){
        this.speedx += (Math.random()- 0.5)/2;
        this.speedy += (Math.random()- 0.5)/2;
        this.x += this.speedx;
        this.y += this.speedy;
        
        const distancex = this.x - this.centerx;
        const distancey = this.y- this.centery;
        const distance =Math.sqrt(distancex * distancex + distancey *distancey);
        const raduis = (-distance/edge+1)*edge+1*edge/10;
        if (raduis > 0){requestAnimationFrame(this.draw.bind(this));
            ctx.beginPath();
            ctx.arc(this.x,this.y,raduis,0,2*Math.PI)
            ctx.fillStyle= this.color;
            ctx.fill();
            ctx.strokeStyle ="red";
            ctx.stroke()
            }
        }
    }
    function branch(){
    if (drawing){
        const centerx = mouse.x;
        const centery = mouse.y;
        for (let i = 0; i < 3; i++){
            const root = new Root(mouse.x,mouse.y,"black",centerx,centery);
            root.draw()
        }
    }
    } window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

window.addEventListener("touchmove",function(){
ctx.fillStyle = 'rgba(255,255,255,0.03)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    branch();
})
window.addEventListener("touchmove",function(){
ctx.fillStyle = 'rgba(255,255,255,0.03)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    branch();
})
window.addEventListener("touchmove",function(e){
    drawing= true;
})
window.addEventListener("touchend",function(e){
    drawing= false;
})

}
