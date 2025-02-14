// const golap = 70;
// const taposhi = 50;
// console.log(golap, taposhi)

// if(golap > taposhi){
//     console.log("golap is a great")
// }
// else{
//     console.log("tapos is a great girl")
// }

function maxNumber (num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return "he is tha big boss"
    }

    else if(num2 > num1 && num2 > num3){
        return "mediul boss"

    }

    else{
        return "boss"
    }

}
const golap = 100 ;
const raj = 62;
const boy = 76
const output = maxNumber(golap, raj,boy);
console.log(output)