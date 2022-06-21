const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {


    let input = result.input; 
    let numbers = input.split(','); 
    let a = parseInt(numbers[0]); 
    let sum = 0;
    while (a > 0) {
      num = a % 10;
      sum = sum + num;
      a = parseInt(a / 10);
    }
    console.log(sum);
});
