function removeDuplicate(str){
    let count=0;
    let i;
    let j;
    for(i=0;i<str.length;i++){
        for(j=0;j<i;j++){
            if(str[i]==str[j]){
                break;
            }
        }
        if(j==i){
            count++;
        }
    }
    return count;
}
console.log(removeDuplicate("Abc"));
console.log(removeDuplicate("heshethemthey"));
console.log(removeDuplicate("12341234123411223344"));
console.log(removeDuplicate("AAAAAAAAA"));
console.log(removeDuplicate("Abcdefgh"));
console.log(removeDuplicate("AAABBBABAB"));
console.log(removeDuplicate("X"));
console.log(removeDuplicate("a+b+c+d+e"));