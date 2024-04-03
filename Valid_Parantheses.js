// Changes : Modified code with Stack Concept

function isValid(str) {
  const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      }
      else {
          const top = stack.pop();
          if (char !== map[top]) {
              return false;
          }
      }
  }
  return stack.length === 0;
}



const str = "(((";
console.log(isValid(str));