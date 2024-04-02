let num1 = [];
let length = prompt("Enter length");

for (let i = 0; i < length; i++) {
    let value1 = prompt("Enter value for index " + i + ":");
    num1.push(value1);
}
num2=num1.sort();
console.log("Missing Value :",missingnum(num2))

function missingnum(num2) {
    const n = num2.length; 
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = num2.reduce((acc, num) => acc + parseInt(num), 0);

    return expectedSum-actualSum;
}