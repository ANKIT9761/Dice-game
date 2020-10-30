var x1=Math.random()*5+1;
x1=Math.round(x1);
var x2=Math.random()*5+1;
x2=Math.round(x2);
document.querySelector(".dice .img1").setAttribute("src","images/dice"+x1+".png");
document.querySelector(".dice .img2").setAttribute("src","images/dice"+x2+".png");
if (x1>x2){
document.querySelector(".container h1").innerHTML ="🚩Player 1 Wins";
}
else if (x1<x2) {
  document.querySelector(".container h1").innerHTML ="Player 2 Wins🚩";
}
else {
  document.querySelector(".container h1").innerHTML ="It is A Draw";
}
