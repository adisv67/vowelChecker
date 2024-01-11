const text = document.querySelector('textarea');
const button = document.querySelector('button');
const result = document.getElementById('result');


function countVowels(){
    let vowelCount = 0;
    let typedText = text.value.toLowerCase();
    for(let i = 0; i< typedText.length; i++){
        let char = typedText.charAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    }
    result.textContent = "Total Vowels "+ vowelCount;
}

function isVowel(char){
    const vowel = ["a","e","i","o","u"];
    return vowel.includes(char);
}