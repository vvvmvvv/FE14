console.log('JS TASK1 : ЧИСЛА ФИБОНАЧЧИ');
  function* numbers_fibonacci2(){
      let f1 = 1;
      let f2 = 1;
        for(;true;){
            let curr = f2;
            f2 =  f1;
            f1 = f1 + curr;
            let res = yield curr;
            if (res){
                f1 = 1;
                f2 = 1;
            }
        }
    }




var fib = numbers_fibonacci2();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

