function solveEquation(equationString) {
    const regex = /(\d+)y[+-](\d+)=(\d+)/;
    const match = equationString.match(regex);
    if (!match) {
      throw new Error("Invalid equation string");
    }
    const [_, c, d, m] = match;
    if (c === "0") {
      throw new Error("Invalid equation: c cannot be 0");
    }
    const y = (m - d) / c;
   console.log("y = " + y);
}
 solveEquation("5y+10=40");
 solveEquation("25y-30=1070");
 solveEquation("3y+7=1");
 solveEquation("100y-101=2399");
 solveEquation("6y+20=20");
 solveEquation("7y-250=9");
 solveEquation("1234y+1000=2234");
 solveEquation("2y-3=1");

//  function solveEquation(string) {
//   let y = 0;
//   for(i=0; i<string.length; i++){
//       if(string[i]=='+'){
//   let a=string.indexOf('+');
//   let b=string.indexOf('=');
//     let c=string.substring(0,a-1);
//    let m=string.substring(a+1,b);
//    let n=string.substring(b+1);
//   y=(n-m)/c;
//   }
//   if(string[i]=='-'){
//   a=string.indexOf('-');
//    b=string.indexOf('=');
//      c=string.substring(0,a-1);
//     m=string.substring(a+1,b);
//     n=string.substring(b+1);
//   y=(n-(-m))/c;
//   }
//   }
//  console.log(y);
// }
// solveEquation("5y+10=40");
// solveEquation("25y-30=1070");
// solveEquation("3y+7=1");
// solveEquation("100y-101=2399");
// solveEquation("6y+20=20");
// solveEquation("7y-250=9");
// solveEquation("1234y+1000=2234");
// solveEquation("2y-3=1");