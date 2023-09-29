dow.onload = function(){
    let inpt = confirm("hello")
    console.log(inpt)
    if(inpt){
        document.getElementById("status").innerHTML="confirmed";
        document.getElementById("bar").classList.add("confirmed")
        document.getElementById("bar").classList.remove("pending");
 }else{
    document.getElementById("status").innerHTML = "canelled";
    document.getElementById("bar").classList.add("cancelled");
    document.getElementById("bar").classList.remove("pending");
 }
}