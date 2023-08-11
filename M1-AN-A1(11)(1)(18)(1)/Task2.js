function maxMarks(a,b,c,d){
let max=0;
if(a>b&&a>c&&a>d){
    max=a;
}
else if(b>c&&b>d){
    max=b;
}
else if(c>d){
    max=c;
}
else{
    max=d;
}
console.log("Math:"+a);
console.log("English:"+b);
console.log("Computers:"+c);
console.log("Science:"+d);
console.log("Highest Marks:"+max);
}
maxMarks(82,70,66,84);
maxMarks(55,58,71,62);
maxMarks(37,33,32,36);
maxMarks(71,85,53,39);
maxMarks(80,60,40,50);