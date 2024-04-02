// changes made >> changed the variable types to const and gave sample input instead of getting it from user.

const num1 = [2,0,1];
num2=num1.sort();
console.log("Missing Value :",missingnum(num2))

function missingnum(num2) {
    const n = num2.length; 
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = num2.reduce((acc, num) => acc + parseInt(num), 0);

    return expectedSum-actualSum;
}