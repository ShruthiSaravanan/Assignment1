/*

Changes made (
    variable type changed to const,
    Functions included,
    Used Objects instead of dictionary or sets which is not an inbuilt one in javascript.
)

*/ 

function commonElements() {
    const num1 = [1, 2, 3, 4, 5];
    const num2 = [3, 4, 5];

    const num1Dict = {};
    const res = [];

 
    for (let i = 0; i < num1.length; i++) {
        num1Dict[num1[i]] = true;
    }


    for (let j = 0; j < num2.length; j++) {
        if (num1Dict[num2[j]]) {
            res.push(num2[j]);
        }
    }

    console.log("Common elements:", res);
}


commonElements();