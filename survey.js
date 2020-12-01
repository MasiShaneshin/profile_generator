const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What your name:', (answer1) => {
    r2.question('What is an activity you like doing:', (answer2) => {
        
        console.log(`your name is: ${answer1}`);
        console.log(`and your fvorite activity is ${answer2}`);
    });
    rl.close();
});