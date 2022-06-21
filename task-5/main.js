const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  let input = result.input;
  let numbers = input.split(",");
  let a = parseInt(numbers[0]);
  let b = parseInt(numbers[1]);
  let sum=0;
  for (i = a; i <= b; i++) {
  
        if(i%2!==0){
          sum=sum+i;
        }
      
    }
    console.log(sum)
});
