let text = `
`
let j = text.indexOf("분/");
console.log(j)
let sum = 0;
while(j != -1){
 j = text.indexOf("분/",j+2);
 if(j != -1){
 let k = text.indexOf("분",j+2)
 let i =text.slice(j+2,k-1)
 sum += i*1
}
}


for(let i = 0; i< 11 ; i++){
    let date = new Date();

    let b = 10+i
    b = b/10;
    let q = sum /b 
    q = q.toFixed(0);
    q = q*1
    date.setMinutes(date.getMinutes() + q);
    console.log("======================================");
    console.log(`${b}배수 : ${q}`);
    console.log(`예상 끝나는 시간 : ${date}`)
    
}

