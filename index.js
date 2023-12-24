// Code your solutions in this file
function writeCards(array,name){
    const newArray = [];
    for(let m = 0; m < array.length; m++){
    var message = (`Thank you, ${array[m]}, for the wonderful ${name} gift!`);
    newArray.push(message);
    }
    return newArray;

}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
function countDown(){
    let num = 10 ;
    while (num >= 0){
        console.log(num--);
    }
}
countDown();