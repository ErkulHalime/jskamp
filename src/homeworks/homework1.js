//homework1.1
function isPrimeNumbers(...numbers){
    let primeNumber = [], count, i, j
    for (i = 0; i < numbers.length; i++) {
      count = 0;
      for (j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j == 0) {
          count++
        }
      }
      if (count == 0) {
        primeNumber.push(numbers[i])
      }
    }
    console.log(primeNumber)
}
isPrimeNumbers(20,7,40,5)

//homework1.2
function isFriendNumber(num1,num2){
  let sum1=0,sum2=0;

  for (let index = 1; index < num1; index++) {
     if(num1 % index == 0){ 
        sum1 = sum1 + index;
     }
    
  }
  for (let index = 1; index < num2; index++) {
    if(num2 % index == 0){ 
       sum2 = sum2 + index;
    }
   
 }

 if(num1 ==sum2 && num2==sum1){
   console.log(num1 +" and "+num2+": friend numbers.")
 }else{
   console.log(num1 +" and "+num2+": not friend numbers.")
 }
}
isFriendNumber(220,284)
isFriendNumber(240,130)

//homework1.3
function findPerfectNumbers(){
  for(let i=1;i<=1000;i++){
    let sum=0;
    for (let index = 1; index <= i; index++) {
      if(i%index == 0){
         sum = sum+ index
      }
     }
     if(sum == 2*i){
      console.log(i+ ": perfect number")
    }
  }
  
}
findPerfectNumbers()

//homework1.4

function findPrimeNumbers(){
  for (let index = 2; index <= 1000; index++) {
    let count = 0;
    for (let index2 = 1; index2 <= index; index2++) {
    
      if( index % index2 == 0){
        count++;
      }
    }
    if(count ==2){
      console.log(index +" asal sayıdır")
    }
  }
}
findPrimeNumbers()