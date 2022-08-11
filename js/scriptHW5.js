// Задание-1
function array (Power,Shell){
    const m = []
    console.log(Power,Shell);
    for (let i=0;i < Shell;i++ ){
        m.push(Power)
    }
    console.log(m)
}
array('x',5)

//Задание-2
function isNumberInRange (number) {
    return number > 0 && number <= 10;
}
console.log(isNumberInRange(10))

//Задание-3
function isEven(num){
    return num % 2 == 0;
}
console.log(isEven(4))

//Задание-4
let arr = [0,3,5,6,7,4,5,8,9,6,7,3,2];
let newArr = [];
for (let i = 0; i <arr.length;i++){
if (isEven(i)){
    newArr.push(i);

}
}
console.log(newArr);

//Задание-5
const result = 3 ** 4;
console.log(result);



































    
