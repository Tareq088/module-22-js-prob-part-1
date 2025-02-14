let duplicaateArray = ["a","b","c","a"];
let unique = [];
for (let array of duplicaateArray){
    if(!unique.includes(array)){
        unique.push(array)
        console.log(unique)
    }
}
console.log(unique)
Math.