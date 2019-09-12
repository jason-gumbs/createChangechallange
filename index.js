
function change(cash) {
    let num, num5, num10;
    let arr =[] // Your code goes here
    let remainderFromFive;
    let remainderFromTen;
     let divisibleFromTen
     let divisibleFromFive

    if(cash >= 10){
       divisibleFromTem = cash / 10
      console.log("number of 10 dollar bills: ", divisibleFromTem.toString().split(".")[0])
      remainderFromTen = cash % 10

      if (remainderFromTen >=5) {
         divisibleFromFive = remainderFromTen / 5
        console.log("number of 5 dollar bills: ", divisibleFromFive.toString().split(".")[0])
        remainderFromFive = remainderFromTen % 5
      }

      if (remainderFromFive) {
        // its all single dollar bills
        console.log("number of 1 dollars bills: ", remainderFromFive);
      }
    }
    return {
      one:remainderFromFive,
      five: parseInt(divisibleFromFive.toString().split(".")[0]),
      ten: parseInt(divisibleFromTem.toString().split(".")[0])

    }
}

