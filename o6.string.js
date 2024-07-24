const name = "Nandita"
const gitRepo = 8
console.log(name + " " + gitRepo)
console.log(`Hello My Name is ${name} and my repocount is ${gitRepo}`);

const gameName =new String('nandita')
console.log(gameName.length)
console.log(gameName)

const newGameName = new String('nandita.Asphalt.9')
console.log(newGameName.__proto__);

console.log(newGameName.length);
console.log(newGameName.toUpperCase());
console.log(newGameName.charAt(1));
console.log(newGameName.repeat(2));
console.log(newGameName.indexOf('t'));

const newString =newGameName.substring(0, 4)
console.log(newString);

const anotherString = newGameName.slice(-8, 4)
console.log(anotherString)

const newOneString = "           Nandita    "
console.log(newOneString)
console.log(newOneString.trim());

const url ="https:nanditasharma.com"
console.log(url.replace('com', 'in'))
console.log(url.includes('coder'))
console.log(newGameName.split('---'));

