let nums = [1,2,3,4];
let numsResultado=[];

numsResultado[0]=nums[0];
for(let cont=1; cont<nums.length; cont++){
   // console.log("Posición "+cont+":"+nums[cont])
    let valorAcumulado = numsResultado[cont-1]
    numsResultado[cont]= valorAcumulado + nums[cont];

}

console.log("Imput:"+nums)
//backtick
console.log("Output:"+numsResultado)
