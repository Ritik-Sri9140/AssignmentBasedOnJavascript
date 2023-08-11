let str='AbC';
function addx(str){
let addSign='';
let result='';
for(let i=0; i<str.length; i++)
{
    addSign=addSign+'x';
    result=result+str[i]+addSign;
}
return result;
}
console.log(addx("Abc"));
console.log(addx("HUMAN"));
console.log(addx("R"));
console.log(addx("MNOP"));
console.log(addx("DDDDD"));
console.log(addx("X"));
console.log(addx("123456"));