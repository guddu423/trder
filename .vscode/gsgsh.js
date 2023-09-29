let x = 175;
let y = 175;
function move (t,1){
    x = x+(t*5);
    y = y+(1*5);
    document.getElementById("ball").style='top:${x}px;left:${y}px'
}