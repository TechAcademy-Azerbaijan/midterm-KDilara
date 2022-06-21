const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  let input = result.input;
  let numbers = input.split(",");
  let a = parseInt(numbers[0]);
  let i;
for (i = 1; i <= a; i++) {

  if (a % i === 0) {
   
      if(i%2!==0){
        console.log(i)
      }
    }
  }
});
