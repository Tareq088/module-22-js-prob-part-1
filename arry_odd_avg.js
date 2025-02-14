// function doOddAvg(arrrayNumbers){
//     let oddArray = [];
//     for(let number of arrrayNumbers){
//         if(number%2 !==0){
//             oddArray.push(number)
//         }
//     }
//     console.log(oddArray);
//     let sum = 0;
//     for ( let oddArraynumber of oddArray){
//         sum += oddArraynumber;
//     }
//     console.log("ths usm of oddnumber is:", sum);
//     let oddArrayNumberAvg = sum/oddArray.length;
//     return oddArrayNumberAvg
// }
                                             // process 2

function doOddAvg2(arrrayNumbers){
 let oddArray = [];
 for( i=0; i<arrrayNumbers.length; i++){
    if(arrrayNumbers[i]%2 !==0){
        oddArray.push(arrrayNumbers[i])
    }
 }
 console.log(oddArray);
 let sum = 0;
 for ( i=0; i<oddArray.length; i++){
    sum += oddArray[i];
 }
 console.log("ths usm of oddnumber is:", sum);
 let oddArrayNumberAvg = sum/oddArray.length;
 return oddArrayNumberAvg
}



let arrrayNumbers = [ 3,5,7,11,3,56,77,43,44,334,343];
// let output = doOddAvg(arrrayNumbers);
// console.log("the average is :", output)
let output2 = doOddAvg2(arrrayNumbers);
console.log("the average is :", output2)