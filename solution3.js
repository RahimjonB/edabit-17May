// 1. Create a function to return the amount of potatoes there are in a string.
function potatoes(str) {
	let num = str.match(/potato/gi).length;
	if(num.length == 0){
		return 0;
	}
	return num;
}

// 2. Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
function charCount(myChar, str) {
	let sum = 0;
	for(let i = 0; i < str.length; i++){
	if(str[i] === myChar) sum++;
	}
	return sum;
}

// 3. Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.
function fixImport(s) {
    let mass = s.split(" ");
    if (mass[0] === 'import' && mass[2] === 'from') {
      return `from ${mass[3]} import ${mass[1]}`;
    }
  }

// 4. Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.
function error(n) {
	mass = ["Check the fan: e1", "Emergency stop: e2",
					"Pump Error: e3", "c: e4", "Temperature Sensor Error: e5"];
	return mass[n-1]||101;
}

// 5. Create a function that takes a string and returns a string in which each character is repeated once.
function doubleChar(str) {
	let mass = str.split("").map(elem => elem+elem).join('');
	return mass;}

// 6. Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
function emotify(str) {
	str = str.replace('smile', ':D');
	str = str.replace('grin', ':)');
	str = str.replace('sad', ':(');
	str = str.replace('mad', ':P');
	return str;
}

// 7. Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels(str) {
	let sum = 0;
	for(let i = 0; i < str.length; i++){
	if(str[i].match(/[aeiou]/gi) !== null) sum++;}
	return sum;
}

// 8. Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".
function bomb(str) {
	const lowcStr = str.toLowerCase();
	const lowcWord = "bomb";
  
	if (lowcStr.includes(lowcWord)) {
	  return "Duck!!!";
	} else {
	  return "There is no bomb, relax.";
	}
  }

// 9. Create a function that takes a string and returns a new string with all vowels removed.
function removeVowels(str) {
	let regex = /[aeuoi]/gi;
	return str.replace(regex, "");
}

// 10. Create a function that returns the index of the first vowel in a string.
function firstVowel(str) {
	const regex = /[aeiou]/i;
	const match = str.match(regex);
	if (match) return str.indexOf(match[0]);
	return -1;
  }

// 11. Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.
function checkTitle(title) {
	let words = title.split(" ");
	for (let i = 0; i < words.length; i++) {
	  let word = words[i];
	  if (word[0] !== word[0].toUpperCase()) return false;
	} return true;
  }

// 12. In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.
function sayHelloBye(name, num) {
	if (num === 1) return "Hello " + name.charAt(0).toUpperCase() + name.slice(1);
	if (num === 0) return "Bye " + name.charAt(0).toUpperCase() + name.slice(1);
	  return "Invalid input";
  }

// 13.Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.
 function asciiCapitalize(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
	  let char = str[i];
	  let asciiCode = char.charCodeAt(0);
	  if (asciiCode % 2 === 0) result += char.toUpperCase();
	  else {
		result += char.toLowerCase();
	  }
	}
	return result;
  }

//   14. Create a function that returns the number of hashes and pluses in a string.

  function hashPlusCount(str) {
	let hashCount = 0;
	let plusCount = 0;
	for (let i = 0; i < str.length; i++) {
	  if (str[i] === '#') {
		hashCount++;
	  } else if (str[i] === '+') {
		plusCount++;
	  }
	}
	return [hashCount, plusCount];
  }

//   15. Create a function that takes in an array of names and returns the name of the secret society.
function societyName(names) {
	let init = "";
	for (let i = 0; i < names.length; i++) {
	  init += names[i][0];
	}
	return init.split('').sort().join('');
  }

// 16. Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
function reverseCase(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
	  let char = str[i];
	  if (char === char.toUpperCase()) result += char.toLowerCase();
		else {
		result += char.toUpperCase();
	  }
	} return result;
  }

// 17. Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code.
function isValid(zipCode) {
	if (!/^\d+$/.test(zipCode)) return false;
	if (zipCode.length !== 5) return false;
	return true;
  }

// 18. Create a function to convert an array of percentages to their decimal equivalents.
function convertToDecimal(percentageArray) {
	return percentageArray.map(percentage => parseFloat(percentage) / 100);
  }

// 19. Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.
function convertBinary(str) {
	const transform = str.replace(/[a-m]/gi, '0').replace(/[n-z]/gi, '1');
	return transform;
  }

// 20. You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.
function minutesToSeconds(time) {
	const [minutes, seconds] = time.split(":").map(Number);
  
	if (seconds >= 60) {
	  return false;
	}
  
	return minutes * 60 + seconds;
  }