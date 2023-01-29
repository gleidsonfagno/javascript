for(var  i =10; i > 0; i--){
    console.log(i)

    if(i ===5){
        break
    }
}
  
console.log('deu break')

let x = 10

while(x < 100){
    // 10 + 10: ( x + 10)
    x += 10;

    if(x === 60 || x ===90 || x === 30){
        console.log('continue')
        continue;
    }

    console.log('Testando continue ' + x);
}