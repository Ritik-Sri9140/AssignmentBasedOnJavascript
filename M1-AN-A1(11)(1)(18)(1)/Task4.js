let string='hello@gmail.com';
function check(string){
let index1=string.indexOf('@');
let index2=string.indexOf('.');
let s1='';
let s2='';
let s3='';

     s1=string.substring(0,index1);
     s2=string.substring(index1+1,index2);
     s3=string.substring(index2+1,string.length)
if(s1==0||s2==0||s3!='com'){
    console.log('Not proper');
}
else{
    console.log('Proper');
}
}
check('hello@gmail.com');
check('a1234@q.com');
check('231@8.com');
check('@wer.com');
check('asdf@.com');
check('m2@m3.xyz');
check('hello.gmail.com');
check('jack@gmail.com');
check('hello@gmailcom');