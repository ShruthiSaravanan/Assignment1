function validParenthesis(s) {
    let countParenthesis = 0;
    let countBraces = 0;
    let countBrackets = 0;

for (let i = 0; i < s.length; i++) {
    const char = s[i];
    switch (char) {
        case '(':
          countParenthesis++;
          break;
          
        case ')':
         countParenthesis--;
         break;
         
        case '{':
         countBraces++;
         break;
         
        case '}':
         countBraces--;
         break;
         
        case '[':
          countBrackets++;
          break;
          
         case ']':
          countBrackets--;
          break;
        }
   }
    if( countParenthesis === 0 && countBraces === 0 && countBrackets === 0)
        {
        return true;
         }
    else{
        return false;
        }
}
 

const s = "(){";
console.log(validParenthesis(s));