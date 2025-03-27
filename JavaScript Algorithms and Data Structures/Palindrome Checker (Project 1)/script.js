let buttonCheck = document.getElementById("check-btn");
let input = document.getElementById("text-input")
let resultElement = document.getElementById("result");

function checkPalindrome() {
    let text = input.value.trim();
    if (text === "") {
        alert("Please input a value.");
        return;
    }
    let isPalindrome = validatePalindrome(text);
    if (isPalindrome) {
        resultElement.textContent = `${text} is a palindrome.`;
    } else {
        resultElement.textContent = `${text} is not a palindrome.`;
    }
}

function validatePalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedStr = cleanedStr.split("").reverse().join("");
    
    return cleanedStr === reversedStr;
}

buttonCheck.addEventListener("click", checkPalindrome);