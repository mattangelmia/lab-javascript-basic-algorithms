// Iteration 1: Names and Input
let hacker1 = 'Jada';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Fabian';
console.log(`The navigator's names is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length}`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems ${hacker2} has the longest name, it has ${hacker2.length} letters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}, ${hacker2.length} characters`)
  }

// Iteration 3: Loops
console.log(`${hacker1.split("").join(" ").toUpperCase()}`);
 {
  hacker2.split("").reverse().join("")
}
if(hacker1.localeCompare(hacker2) === -1){
  console.log(`The driver's name goes first`)
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

const text = "Contrary to et et popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
console.log(text.split(" ").length);

console.log(text.split("et").length );

/*Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/
// for (const element of array1)
