const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {


    let input = result.input; 
    let numbers = input.split(','); 
    let a = parseInt(numbers[0]); 
    a1=a%10;
    a2=parseInt(a/10)%10;
    a3=parseInt(a/100)%10;
    a4=parseInt(a/1000)%10;
    a5=parseInt(a/10000);
    if(a1===a2 || a2===a3 || a3===a4 || a4===a5 || a1===a3 ||a1===a4 ||a1===a5 || a2===a4 ||a2===a5|| a3===a5){
      console.log("YES")
    }else{
      console.log("NO")
    }
});
