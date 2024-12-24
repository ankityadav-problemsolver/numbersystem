const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];


  oddNumber=numbers.filter((num)=> num %2 !=0)
  evenNumber=numbers.filter((num)=> num %2 ==0)
  console.log("Odd Numbers in the array : ",oddNumber)
  console.log("Even Number in the array : ",evenNumber)