let x = 175;
let y = 175;
function move(t,1){
    x = (x+(t*5))0?((x+(t*5)<350)?(x+(t*5))):350):0;
    y = (y+(t*5))>0?((y+(1*5)<350)?(y+(1*5)):350):0;
    document.getElementById("ball").style='top:${x}px;left'
}