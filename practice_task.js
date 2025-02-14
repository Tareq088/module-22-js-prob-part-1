
                // ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

// function celToFaren(celsius){
//     let farenhite = celsius*1.8+32;
//     return farenhite;
// }
// let celsius =  45;
// console.log(celsius, "degree Celsius to Farenhite is", celToFaren(celsius), "degree Farenhite")

// ---
                                    // ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// function countRepeatition(){
//     let findNumber = 25;
//     let count = 0;
//     for (let number of numbers){
//         if(findNumber === number){
//             count += 1;
//         }
//     }
//     return count;
// }
// findNumber = 5;
// let numbers = [5,6,11,12,98, 5];
// console.log("number", findNumber, "is in the array", countRepeatition(numbers), "times")

// findNumber1= 25;
// console.log("number", findNumber1, "is in the array", countRepeatition(numbers), "times")

// ----// --------------------------------
                                                // ### Task-3: 
// Write a function to count the number of vowels in a string.


// function countVowel(vowels,string){

//     let stringSplitletters = string.split('');
//     let i = 0;
//     // console.log(stringSplitletters[i])
//     let stringLowercase = stringSplitletters[i].toLowerCase();
//     // console.log(stringLowercase)
//     stringSplitletters = stringLowercase + stringSplitletters.slice(1)
//     // console.log(stringSplitletters);
//     let count =0;
//     for(let stringSplitLetter of stringSplitletters){
//         for(let vowel of vowels){
//             if(vowel === stringSplitLetter){
//                 count +=1;
//              }
//         }
//     }
//     // console.log(count);
//     return count;
// }
// let vowels = ["a","e","i","o","u"]
// let string = "I love my country"
// console.log("Number of vowel in the String(", string, ")is", countVowel(vowels,string));
                        // --------------------------------

//                                                  ### Task-4: 
// Write a function to find the longest word in a given string.

// function doLargeString(sampleInput){
//     let sampleInputArray = sampleInput.split(" ");
//     console.log(sampleInputArray)
//     let LongestWord = "";
//     for(let sampleInput of sampleInputArray){
//         // console.log(sampleInput, sampleInput.length)
//         if(sampleInput.length > LongestWord.length){
//             LongestWord = sampleInput;
//         }  
//     }
//     return LongestWord;
// }
// let sampleInput = "I am learning Programming to become a programmer";
// console.log("The Largest word in the string(", sampleInput, ") is" ,doLargeString(sampleInput))

// --------
// ### Task-5: 
// Generate a random number between 10 to 20.
function getRandomNumber() {
    let value= Math.random()*10
    return Math.floor(value) + 10;
}

console.log(getRandomNumber()); // Output: Random number between 10 and 20




