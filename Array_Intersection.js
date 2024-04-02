const prompt = require('prompt-sync')({sigint: true});

let num1 = [];
let length1 = prompt("Enter length");

for (let i = 0; i < length1; i++) {
    let value1 = prompt("Enter value for index " + i + ":");
    num1.push(value1);
}
let num2 = [];
let length2 = prompt("Enter length");

for (let j = 0; j < length2; j++) {
    let value2 = prompt("Enter value for index " + j + ":");
    num2.push(value2);
}

let res=[];
for( k=0;k<num1.length;k++)
{
    for(j=0;j<num2.length;j++)
    {
        if(num1[k]==num2[j])
        {
        res.push(num1[k]);
           
}
    }
}
 console.log(res);