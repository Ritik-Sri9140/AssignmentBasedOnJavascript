function equality(str1,str2){
   let count=0;
   if(str1.length>str2.length){
       console.log(str1);
   
   }
   else if(str1.length<str2.length){
       console.log(str2);
   }
   else{
      for(let i = 0; i<str1.length; i++)
      {
        if(str1[i]>str2[i]){
           count++;
           break;
        }
        else if(str1[i]<str2[i]){
           count--;
          break;
        }
        else{
           count=0;
        } 
       }
       if(count>0){
           console.log(str1);
   
        }
       else if(count<0){
           console.log(str2);
   
        }
        else{
           console.log('Equal');
       }
   }
   }
   equality('456789456789456','456780009899765');
   equality('987654321987654321','1234567890123456789');
   equality('987654321987654321','987654321987654321')
   equality('1234','1235')
   equality('22334455667788','22334455667788')
   equality('198765432198765','2987654321987')
   equality('999888777666555000','999888777666555000');