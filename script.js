const inputText = document.getElementById('text-input');
const buttonCheck = document.getElementById("check-btn");
const result = document.getElementById("result");


/*const removeNonAplhaNumeric = (text) => {
return text.replace(/[\W_]/g,"").toLowerCase();
};*/

const checkPalindrome = (input) => {
  //const cleanedStr = removeNonAplhaNumeric(input);
  //the line below this comment is replacement of upper function which I just commented out
  const cleanedStr = inputText.value.replace(/[\W_]/g,"").toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

buttonCheck.addEventListener('click',()=> {
  const userInput =  inputText.value;
  if (userInput.length===0){
    alert("Please input a value");
  }
  const isPalindrome = checkPalindrome(userInput);
  if(isPalindrome){
    result.textContent=`${userInput} is a palindrome`;
  }
  else{
    result.textContent=`${userInput} is not a palindrome `;
  }
 });