const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  primeArray=[]
for(i=0;i<numbers.length;i++){
    num=numbers[i]
    for(j=2;j<numbers;j++){
        if(num % j==0){
            
            break
        }
    }
}
console.log(primeArray)

