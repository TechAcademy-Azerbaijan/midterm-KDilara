const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  let input = result.input;
  let numbers = input.split(",");
  let a = parseInt(numbers[0]);
  let d;
  a1=a%10;
  a2=parseInt(a/10)%10
  a3=parseInt(a/100)
if(a1>a2 && a2>a3){
d= a1*100+a2*10+a3;
}else if( a2>a1 && a1>a3){
  d= a2*100+a1*10+a3;
}else if(a3>a1&&a1>a2){
  d= a3*100+a2*10+a1;
}else if(a3>a2&&a2>a1){
  d= a3*100+a1*10+a2;
}else if(a1>a2&&a3>a2){
  d= a1*100+a3*10+a2;
}else if(a2>a1&&a3>a1){
  d= a2*100+a1*10+a3;
}


console.log(d**2)
});
