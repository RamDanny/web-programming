const fs = require('fs');
const readline = require('readline');

const inputfile = 'greetings.txt';
let greetings = [];

readline.createInterface({
    input: fs.createReadStream(inputfile),
    crlfDelay: Infinity
}).on("line",(line)=>{
    greetings.push(line);
});

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What is your name? ', (name) => {
	rl.close(); // closes input stream after getting name
	let i = 0;
	console.log("\n")
	setInterval(() => {    
		const greeting = greetings[Math.floor(Math.random() * greetings.length)];
		console.log(`${greeting}, ${name}`);
		i++;
		if (i === greetings.length) process.exit();
	}, 2000);
});