module.exports = [
    {
        title: 'What\'s a string?',
        background: 'In JavaScript, we call a sentence or word a string. Strings need to have quote marks around them.',
        example: '"I am a string."\n\'I am also a string.\'\nBut I am not a string. ',
        question: 'Find the string!',
        answers: ['"Ninjas"', 34, 'true', 'name'],
        correct: '"Ninjas"',
        level: 0,
        questionNumber: 0
    },
    {
        title: 'What\'s an integer?',
        background: 'In JavaScript, we call whole numbers integers.',
        example: ' 10\n27\n403\n64\n3845 ',
        question: 'Find the number!',
        answers: ['"Ninjas"', 34, 'true', 'name'],
        correct: 34,
        level: 0,
        questionNumber: 1
    },
    {
        title: 'What\'s a boolean?',
        background: 'In JavaScript, a boolean is like a switch. It can be either true or false, nothing else.',
        example: 'If the switch is on, is true. If it\'s off, it is false.',
        question: 'Find the boolean!',
        answers: ['"Ninjas"', 34, 'true', 'name'],
        correct: 'true',
        level: 0,
        questionNumber: 2

    },
    {
        title: 'What\'s a comment?',
        background: 'In JavaScript, comments are notes you can write to tell other people what is going on in your code. We write comments with single line comments with //, and multi line comments like this: /* The comment you have written goes here. */ ',
        example: '// This is a one-line comment.\n/* This is a comment on\nmore than one line. */',
        question: 'Find the one-line comment!',
        answers: ['// karate chop', '/* high\nkick */', '/ dojo', '/ Kung Fu/'],
        correct: '// karate chop',
        level: 0,
        questionNumber: 3
    },
    {
        title: 'What\'s camel case?',
        background: 'In JavaScript, we have to give names to things sometimes. When names are made up of more than one word, we write the name in camel case. This means that the first word is all in lowercase, and the first letter of the next word is a capital letter.',
        example: 'karateChop\nmyBirthday\nmasterOfInvisibility',
        question: 'Find the name written in camel case!',
        answers: ['Shadowhunter', 'ShadowWarrior', 'nightWarrior', 'mastersamurai'],
        correct: 'nightWarrior',
        level: 0,
        questionNumber: 4
    },
    {
        title: 'What\'s a variable?',
        background: 'In JavaScript, as a program runs, it needs to hold information in its memory. A variable is like a box, that allows us to store information. Every variable needs three parts: a keyword to tell us what kind of variable it is, a name, and a value.',
        example: 'To create a variable called \'dog\' with the value \'Spot\', we write \'let dog\' = \'Spot\'.',
        question: 'How would you declare a variable called \'samurai\'?',
        answers: ['let samurai', 'let = samurai', 'let pet', 'let horse'],
        correct: 'let samurai',
        level: 1,
        questionNumber: 0
    },
    {
        title: 'Giving a variable information',
        background: 'In Academy level, we learned how to create a variable. Remember how variables are like boxes to store things in? Let\'s put something in the variable, using \'=\' .',
        example: '\'let dogs = 2\' creates a variable called \'dogs\' with a value of 2.',
        question: 'Which variable is called \'samurai\', and has a value of 3?',
        answers: ['let samurai = 9', 'let monkeys = 3', 'let samurai = 3', '3 = let samurai'],
        correct: 'let samurai = 3',
        level: 1,
        questionNumber: 1
    },
    {
        title: 'What\'s a prompt?',
        background: 'In JavaScript, when we need information from the person using our program, we give the person a prompt. The prompt takes the information that the user gives us, and puts it into a variable.',
        example: 'let samuraiChoice = prompt("Do you choose Katana, Daisho or Tanto?")',
        question: 'Which line of code will prompt the ninja to choose a weapon?',
        answers: ['let ninjaChoice = prompt("Do you choose Nunchucks, Shuriken or Origami?")','let prompt = ("Do you choose Nunchucks, Shuriken or Origami?")','let ninjaChoice = Nunchucks, Shuriken or Origami','ninjaChoice = prom("Do you choose Nunchucks, Shuriken or Origami?")'],
        correct: 'let ninjaChoice = prompt("Do you choose Nunchucks, Shuriken or Origami?")',
        level: 1,
        questionNumber: 2
    },
    {
        title: 'Maths in JavaScript',
        background: 'In JavaScript, we can do maths in our programs. We use + to add, and - to subtract, just like we normally do in maths. But we can\'t use x to multiply! We use * to multiply instead, and to divide, we use / .',
        example: 'let answer = 22 - 12; // answer === 10\nlet answer2 = 16 + 18; // answer2 === 34.\nlet answer3 = 5 * 4; // answer3 === 20.\nlet answer4 = 15 / 3; // answer4 === 5.',
        question: 'Which variable has a value of 18?',
        answers: ['let answer = 28 + 14', 'let answer = 33 - 25', 'let answer = 9 * 2', 'let answer = 20 / 5'],
        correct: 'let answer = 9 * 2',
        level: 1,
        questionNumber: 3
    },
    {
        title: 'Random numbers',
        background: 'As well as doing maths for us, JavaScript can also create random numbers!',
        example: 'To give a variable a random number, we write \'let answer = Math.random()\'.',
        question: 'Which line of code would make the enemy choose a random number?',
        answers: ['let enemyChoice = random()', 'let enemyChoice = random(number)', 'let random = enemyChoice', 'let enemyChoice = Math.random()'],
        correct: 'let enemyChoice = Math.random()',
        level: 1,
        questionNumber: 4
    },
    {
        title: 'Less than',
        background: 'In JavaScript, we can use the less than sign - < - to show that a variable is less than another number.',
        example: 'nunchucks < 3',
        question: 'Which statement would show that there are fewer than 10 stars?',
        answers: ['let stars = Math.random()', 'stars > 10', 'stars = 10', 'stars < 10'],
        correct: 'stars < 10',
        level: 2,
        questionNumber: 0
    },
    {
        title: 'Greater than',
        background: 'In JavaScript, we can use the greater than sign - > - to show that a variable is more than another number.',
        example: 'sensei > 7',
        question: 'Which statement would show that there are more than 7 shuriken?',
        answers: ['let shuriken = 2 > 5', 'shuriken > 10', 'shuriken > 7', 'shuriken = 8'],
        correct: 'shuriken > 7',
        level: 2,
        questionNumber: 1
    },
    {
        title: '...or equal to',
        background: 'In JavaScript, we can use <= to show that a variable is either less than or equal to another number. Also, we can use >= to show that a variable is either greater than or equal to another number.',
        example: 'lotusFlowers >= 6\nkatana <= 12',
        question: 'Select the answer that shows that a is greater than or equal to b?',
        answers: ['a >= b', 'a < b', 'a <= b', 'a > b'],
        correct: 'a >= b',
        level: 2,
        questionNumber: 2
    },
    {
        title: 'Equality Sign',
        background: 'In JavaScript, if we want to find out whether two variables or values are equal, we use three equals signs in a row like this: \'===\'. ',
        example: '\'3 === 3\' is true, but \'3 === \'3\'\' is false.\n// Remember anything in quote marks is a string, and strings are not the same as numbers.',
        question: 'Which line of code shows that 7 is equal to 7?',
        answers: ['7 equals 7', '7 === 7', '7 = 7', '7 === \'7\''],
        correct: '7 === 7',
        level: 2,
        questionNumber: 3
    },
    {
        title: 'AND and OR signs',
        background: 'In JavaScript, we use the AND sign && if both pieces of information are correct. We also use the OR sign || if just one of the two pieces of information is correct.',
        example: 'Using the AND sign in (12 > 10 && (10 / 2) === 5) is correct, because both maths sentences in this line of code are correct. Using the OR sign in (7 === 5 || (5 * 2) === 10) is correct, because only one of these maths sentences is correct.',
        question: 'Which line of code shows that either ninjas or sensei is equal to 20?',
        answers: ['(ninjas === 20 && sensei === 20)','(ninjas === 25 || sensei === 20)', '(ninjas === 20 || sensei === 20)', '(ninjas === 20 || sensei === 25)'],
        correct: '(ninjas === 20 || sensei === 20)',
        level: 2,
        questionNumber: 4
    },
    {
        title: 'If statements',
        background: 'In JavaScript, we can choose to make a line of code work only if the first part of the line is correct. The first part of the line is what we call an if statement.',
        example: 'if (choice < 3) {\nenemyChoice = nunchucks\n}\n\n// \'enemyChoice\' will only be \'nunchucks\' if \'choice\' is smaller than 3.',
        question: 'Which statement would make \'enemyChoice\' a star when \'choice\' is less than 10?',
        answers: ['if (choice > 10) {\nenemyChoice = star\n}', 'if (choice < 10) {\nenemyChoice = nunchucks\n}', 'if (choice < 20) {\nenemyChoice = star\n}', 'if (choice < 10) {\nenemyChoice = star\n}'],
        correct: 'if (choice < 10) {\nenemyChoice = star\n}',
        level: 3,
        questionNumber: 0
    },
    {
        title: 'If-Else statements',
        background: 'We have just learned how to use if statements to make a line of code work only when the first part is true. But what if the first part isn\'t true, and we want to run another line of code instead? We use an else statement straight after the if statement.',
        example: 'if (choice < 3) {\nenemyChoice = nunchucks\n} else {\nenemyChoice = origami\n}\n\n//  enemyChoice will be \'origami\' if \'choice\' is 3 or higher.',
        question: 'Which statement would make \'enemyChoice\' a shuriken when \'choice\' is 16?',
        answers: ['if (choice < 3) {\nenemyChoice = shuriken\n} else {\nenemyChoice = origami\n}', 'if (choice > 9) {\nenemyChoice = nunchucks\n} else {\nenemyChoice = shuriken\n}',
        'if (choice < 15) {\nenemyChoice = nunchucks\n} else {\nenemyChoice = shuriken\n}', 'if (choice <= 15) {\nenemyChoice = shuriken\n} else {\nenemyChoice = origami\n}'],
        correct: 'if (choice < 15) {\nenemyChoice = nunchucks\n} else {\nenemyChoice = shuriken\n}',
        level: 3,
        questionNumber: 1
    },
    {
        title: 'More If-Else statements',
        background: 'Let\'s try another if-else statement.',
        example: 'if (choice > 6) { enemyChoice = nunchucks } else { enemyChoice = origami }',
        question: 'Which statement would make the enemy choose origami when they have a value of 4?',
        answers: ['if (choice > 5) { enemyChoice = shuriken } else { enemyChoice = origami }', 'if (choice > 9) { enemyChoice = nunchucks } else { enemyChoice = shuriken }',
                'if (choice < 15) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 'if (choice <= 15) { enemyChoice = shuriken } else { enemyChoice = origami }'],
        correct: 'if (choice > 5) { enemyChoice = shuriken } else { enemyChoice = origami }',
        level: 3,
        questionNumber: 2
    },
    {
        title: 'Even more If-Else statements',
        background: 'Let\'s try another if-else statement.',
        example: 'if (choice = true) {\nenemyChoice = nunchucks\n} else {\nenemyChoice = origami\n}',
        question: 'Which statement would make you a ninja?',
        answers: ['if (ninjaLevel = true) { status = ninja } else { status = ninjaInTraining }', 'if (ninjaLevel = false) { status = ninja } else { status = ninjaInTraining }',
                'if (ninjaLevel = true) { status = ninjaInTraining } else { status = ninja }', 'if (ninjaLevel = false) { status is ninja } else { status is not a ninja }'],
        correct: 'if (ninjaLevel = true) { status = ninja } else { status = ninjaInTraining }',
        level: 3,
        questionNumber: 3
    },
    {
        title: 'And even more If-Else statements!',
        background: 'If-Else statements can be linked together, so that you can give your program more outcomes, by using \'else if\' instead of just \'else\'.',
        example: 'if (ninjaLevel = "Academy") { colour = "white" } else if ( ninjaLevel = "Gennin" ) { colour = "Yellow" } else if ( ninjaLevel = "Chunnin" ) { colour = "Orange" } else { colour = "Working towards black belt" }',
        question: 'How would we get a tiny clan if there are fewer than 5 ninjas, a small clan if there are less than 10 ninjas, a medium clan if there are fewer than 15 ninjas and a large clan if there are more?',
        answers: ['if (ninjaNum < 5) { clan = "tiny" } else if ( ninjaNum < 10 ) { clan = "small" } else if ( ninjaNum < 15 ) { clan = "medium" } else { clan = "large" }',
        'if (ninjaNum = 2) { clan = "tiny" } else if ( ninjaNum < 8 ) { clan = "small" } else if ( ninjaNum < 12 ) { clan = "medium" } else { clan = "large" }',
        'if (ninjaNum > 10) { clan = "tiny" } else if ( ninjaNum < 18 ) { clan = "small" } else if ( ninjaNum < 12 ) { clan = "medium" } else { clan = "massive" }',
        'if (ninjaNum = 12) { clan = "tiny" } else if ( ninjaNum < 10 ) { clan = "small" } else if ( ninjaNum < 19 ) { clan = "medium" } else { clan = "large" }',],
        correct: 'if (ninjaNum < 5) { clan = "tiny" } else if ( ninjaNum < 10 ) { clan = "small" } else if ( ninjaNum < 15 ) { clan = "medium" } else { clan = "large" }',
        level: 3,
        questionNumber: 4
    },
    {
        title: 'Arrays',
        background: 'In JavaScript, we call a list an array. We start an array with [, end it with ], and separate the items inside the array with commas.',
        example: 'let myArray = ["stars", 4, "nunchucks", false]',
        question: 'How would you make an array with Academy, 15 and true?',
        answers: ['let myArray = "Academy", 4, "nunchuck", false', 'let myArray = ["Academy", 4, "nunchuck", false]', 'let myArray = ["Academy" 4 "nunchuck" false]', 'let myArray = "Academy" 4 "nunchuck" false'],
        correct: 'let myArray = ["Academy", 4, "nunchuck", false]',
        level: 4,
        questionNumber: 0
    },
    {
        title: 'Array indexes',
        background: 'We have learned that an array is a list. The order of our list is important. We can find each item in our array by asking for the number of the item, but be careful! JavaScript doesn\'t start counting at 1 - it starts counting at 0. Instead of 1, 2, 3, 4, 5, we say 0, 1, 2, 3, 4.',
        example: 'let myArray = ["stars", 4, "nunchucks", false], myArray[0] is stars, myArray[1] is 4, myArray[2] is nunchucks, and myArray[3] is false.',
        question: 'let yourArray = ["stealth", "invisible", 20] How would you get the word "invisible" from yourArray?',
        answers: ['yourArray[0]', 'yourArray[1]', 'yourArray[2]', 'yourArray[invisible]'],
        correct: 'yourArray[1]',
        level: 4,
        questionNumber: 1
    },
    {
        title: 'Changing data by using array indexes',
        background: 'We have learned that JavaScript starts counting from 0, and that we can find items in arrays by asking the array for the number of the item. We can use this to change the items in our arrays too.',
        example: 'Look at this array: \'let myInfo = [1, 2, 3, 4, 5]\'. If we wanted to change 1 to 21, we would write myInfo[0] = 21. Now we have \'myInfo = [21, 2, 3, 4, 5]\'.',
        question: 'let training = ["camouflage yourself", "practice jumping", "learn sparring", "eat healthily"] How would you change the word "eat healthily" to "climb trees"?',
        answers: ['training[0] = "climb trees"', 'training[1] = "climb trees"', 'training[2] = "climb trees"', 'training[3] = "climb trees"'],
        correct: 'training[3] = "climb trees"',
        level: 4,
        questionNumber: 2
    },
    {
        title: 'Array length',
        background: 'In JavaScript, we can see how many items there are inside an array by using \'.length\'.',
        example: 'let myArray = ["stars", 4, "nunchucks", false]. To see how long the myArray array is we can use myArray.length which would give us 4.',
        question: 'let ninjas = ["Harry", "Larry", "Curly", "Mo", "Sophie"]. How would you find the length of this array?',
        answers: ['ninjaslength', 'let ninjas.length', 'ninjas.length', 'length.ninjas'],
        correct: 'ninjas.length',
        level: 4,
        questionNumber: 3
    },
    {
        title: 'Adding items to an array',
        background: 'In JavaScript, we can add items to the end of an array by using \'.push()\'. Whatever we want to add to the array will go inside ().',
        example: '\'let myArray = ["stars", 4, "nunchucks", false]\' To add "ninjas" to myArray, we write \'myArray.push("ninjas")\'.',
        question: 'let ninjas = ["Harry", "Larry", "Curly", "Mo", "Sophie"]. How would you add "Hazel" to the ninjas array?',
        answers: ['push("Hazel").ninjas', 'ninjapush("Hazel")', '"Hazel" = ninjas', 'ninjas.push("Hazel")'],
        correct: 'ninjas.push("Hazel")',
        level: 4,
        questionNumber: 4
    },
    {
        title: 'Removing items from an array',
        background: 'We have learned how to add items to the end of an array by using \'.push()\'. Now we are going to remove the last item from the array, using \'.pop()\'. Nothing needs to go inside () this time. \'.pop()\' knows it just needs to remove whatever the last item of the array is.',
        example: '\'let myArray = ["stars", 4, "nunchucks", false]\' To remove false from myArray, we would write \'myArray.pop()\'.',
        question: 'let ninjas = ["Harry", "Larry", "Curly", "Mo", "Sophie"]. How would you remove "Sophie" from the ninjas array?',
        answers: ['push("Sophie").ninjas', 'ninjapop("Sophie")', '"Sophie" = ninjas', 'ninjas.pop()'],
        correct: 'ninjas.pop()',
        level: 5,
        questionNumber: 0
    },
    {
        title: 'Console.log',
        background: 'In JavaScript, we use \'console.log\' to send messages to our browser\'s console. This can be a really useful tool for code ninjas!',
        example: 'console.log("Well done Ninja") would write the message "Well done Ninja" in the console.',
        question: 'How would you output "Keep Training"?',
        answers: ['consoleLog("Keep Training")', 'console.bog("Keep Training")', 'console.log("Keep Training")', 'console.dog("Keep Training")'],
        correct: 'console.log("Keep Training")',
        level: 5,
        questionNumber: 1
    },
    {
        title: 'Return',
        background: 'In JavaScript, a return statement is used to end a block of code and give the result to the program.',
        example: '\'return 1 + 3\' would return 4 to the program.',
        question: 'What would \'return 5 * 2\' return to the program?',
        answers: ['5', '2', '7', '10'],
        correct: '10',
        level: 5,
        questionNumber: 2
    },
    {
        title: 'Fun with functions',
        background: 'In JavaScript, a function is a block of code that makes something happen. Imagine that you ask your pet dog to sit, and she sits on the floor when you ask. But you don\'t need dog treats to make your code perform! You just give it a function to do instead.',
        example: 'function myFunction() { console.log("this is a function") } This function writes the string "this is a function" in the console.',
        question: 'How would you create a function called welcomeNinja that puts "Hello Ninja" on the console?',
        answers: ['function() {console.log("Hello Ninja")}', 'function welcomeNinja() {console.log("Hello Ninja")}', 'welcomeNinja() {console.log("Hello Ninja")}', 'function(welcomeNinja) {console.log("Hello Ninja")}'],
        correct: 'function welcomeNinja() {console.log("Hello Ninja")}',
        level: 5,
        questionNumber: 3
    },
    {
        title: 'More fun with functions',
        background: 'There are many ways to use functions, but here we are going to practice using a return statement in a function.',
        example: 'function myFunction() { return "this is a function" } This function will return the string "this is a function".',
        question: 'How would you create a function called enemyApproaching that returns "Ninja attack"?',
        answers: ['function() {return("Hello Ninja")}', 'function enemyApproaching() {return "Ninja attack"}', 'welcomeNinja() {return "Hello Ninja"}', 'function(enemyApproaching) {console.log "Ninja Attack"}'],
        correct: 'function enemyApproaching() {return "Ninja attack"}',
        level: 5,
        questionNumber: 4
    },
    {
        title: 'Parameters',
        background: 'Do you see how we have () brackets after a function\'s name? That is where we place a function\'s parameters. Parameters are variables that we can give to the function.',
        example: 'function myFunction(parameter1, parameter2) { console.log(parameter1, parameter2) } This function would console log the values of parameter1 and parameter2.',
        question: 'Which function would return "Hello" and "Ninja"?',
        answers: ['function("Hello", "Ninja") {return("Hello Ninja")}', 'function welcomeNinja() {return "Hello""Ninja"}', 'function welcomeNinja("Hello", "Ninja") {return "Hello" "Ninja"}', 'function(enemyApproaching) {console.log "Hello" "Ninja"}'],
        correct: 'function welcomeNinja("Hello", "Ninja") {return "Hello" "Ninja"}',
        level: 6,
        questionNumber: 0
    },
    {
        title: 'Invoking a function',
        background: 'In JavaScript, to get a result from a function, we first need to call the function, or ask it to work. We write the function\'s name, then we put our arguments in the () bracket after the function\'s name.',
        example: 'function myName(name) {console.log(name)} myName("loneninja") would print out "loneninja"',
        question: 'function myNinja(name) {console.log(name)}. How would we invoke myNinja function with the name "Kai"?',
        answers: ['myNinja=Kai', 'myNinja[kai]', 'myNinja("Kai")', 'Kai is myNinja'],
        correct: 'myNinja("Kai")',
        level: 6,
        questionNumber: 1
    },
    {
        title: 'Functions with maths',
        background: 'In JavaScript, we can use function to do maths too.',
        example: 'function myAddition(a, b) {console.log(a + b)} When we call this function, we give it two numbers inside the () brackets, like this: myAddition(12, 5). The function will add the numbers together for us, and return the number 17.',
        question: 'function myAddingFunction(a, b) {console.log(a + b)} How would we call myAddingFunction to return 20?',
        answers: ['myAddingFunction=(10, 10)', 'myAddingFunction[20]', '20 is myAddingFunction', 'myAddingFunction(15, 5)'],
        correct: 'myAddingFunction(15, 5)',
        level: 6,
        questionNumber: 2
    },
    {
        title: 'More functions with maths',
        background: 'Let\'s practice writing JavaScript functions with maths.',
        example: 'function myDivision(a, b) {console.log(a / b)} myDivision(12, 3) would return the number 4.',
        question: 'function myMultiplication(a, b) {console.log(a * b)} How would we call myMultiplication to return 36?',
        answers: ['myMultiplication(9, 4)', 'myMultiplication=(9, 4)', 'myMultiplication[36]', '36 is myMultiplication'],
        correct: 'myMultiplication(9, 4)',
        level: 6,
        questionNumber: 3
    },
    {
        title: 'Even more functions with maths',
        background: 'Let\'s look at more JavaScript functions with maths.',
        example: 'function mySubtraction(a, b) {console.log(a - b)} myRemainder(12, 5) would return 7.',
        question: 'function mySubtraction(a, b) {console.log(a * b)} How would we call mySubtraction to return 10?',
        answers: ['mySubtraction(12, 2)', 'mySubtraction=(12, 4)', 'mySubtraction[10]', '10 is mySubtraction'],
        correct: 'mySubtraction(12, 2)',
        level: 6,
        questionNumber: 4
    },
    {
        title: 'Going loopy for For loops',
        background: 'In JavaScript, a loop can repeat a section of your code, however many times you like. There are different for loops and while loops, but the easiest kind of loop is a For loop.',
        example: 'for(let start = 0; start < 10; start + 1){console.log(start);} This For loop starts at 0, and writes every number up to 9 in the console. Before it gets to 10, it stops running.',
        question: 'How would you go up in steps of 2?',
        answers: ['start +1', 'start2+', 'start + 2', 'start++'],
        correct: 'start + 2',
        level: 7,
        questionNumber: 0
    },
    {
        title: 'Backwards For loops',
        background: 'In Javascript, we can also use For loops to go backwards',
        example: 'for(let end = 10; end > 0; end - 1){console.log(end);} This For loop starts at 10, and writes every number down to 1 in the console. Before it gets to 0, it stops.',
        question: 'How would you go down in steps of 2?',
        answers: ['end-1', 'end2-', 'end - 2', 'end++'],
        correct: 'end - 2',
        level: 7,
        questionNumber: 1
    },
    {
        title: 'More For loops',
        background: 'In JavaScript, we can use a For loop to change every item in an array.',
        example: 'let myArray = [1, 2, 3, 4, 5] for(let i = 0; i < myArray.length; i++){console.log(myArray[i] + 2)} This for loop adds 2 to every number in myArray. We end up with an array that looks like this: [3, 4, 5, 6, 7]',
        question: 'let myArray = [1, 2, 3, 4, 5] How would we multiply each number by 2?',
        answers: ['for(let i = 0; i < myArray.length; i++){console.log(myArray[i] * 2)}', 'for(let i = 0; i < myArray.length; i++){console.log(myArray[i] x 2)}', 'for(let i = 0; i < myArray.length; i++){console.log(myArray[i] + 2)}', 'for(let i = 0; i < myArray.length; i++){console.log(myArray[i] - 2)}'],
        correct: 'for(let i = 0; i < myArray.length; i++){console.log(myArray[i] * 2)}',
        level: 7,
        questionNumber: 2
    },
    {
        title: 'While loops',
        background: 'In JavaScript, the While loop loops through a block of code as long as a specified condition is true.',
        example: 'while (true) {console.log(\'Hello, world!\');}, this would print out "Hello World" if whatever is inside the brackets is true',
        question: 'How would you make a While loop print the numbers 1 to 5?',
        answers: ['i = 0; while(i < 5) {i++; console.log(i);}', 'i = 0; while(i < 4) {i++; console.log(i);}', 'i = 0; while(i < 6) {i++; console.log(i);}', 'i = 1; while(i < 5) {i++; console.log(i);}'],
        correct: 'i = 0; while(i < 5) {i++; console.log(i);}',
        level: 7,
        questionNumber: 3
    },
    {
        title: 'Do-While loops',
        background: 'In JavaScript, the Do-While loop is a lot like the While loop. The difference is that the Do-While loop will run at least once, but the While loop might not run at all.',
        example: 'let result = \'\'; let i = 0; do{i +=1; result += i + \' \';} while (i < 5); This returns the numbers 1 2 3 4 5',
        question: 'What would this do while loop print out? do {text += "The number is " + i; i++} while( i < 3);',
        answers: ['The number is 0, The number is 1, The number is 2', 'The number is 1, The number is 2, The number is 3', 'The number is 0, The number is 1', 'The number is 1, The number is 2'],
        correct: 'The number is 0, The number is 1, The number is 2',
        level: 7,
        questionNumber: 4
    },
    {
        title: 'Recap Round 1',
        background: 'Now you have almost completed your Code Ninja training. It\'s time to look at everything we\'ve learned so far.',
        example: 'Think back to your Academy training!',
        question: 'Identify the integer!',
        answers: ['"true"','"integer"', '"Ninjas"', 25],
        correct: 25,
        level: 8,
        questionNumber: 0
    },
    {
        title: 'Recap Round 2',
        background: 'Now it\'s time to look back at variables.',
        example: 'Remember your Gennin training!',
        question: 'Select the variable called codeNinja that has the string value of master',
        answers: ['let codeninja = master', 'Codeninja = "master"', 'master = "codeNinja"', 'let codeNinja = "master"'],
        correct: 'let codeNinja = "master"',
        level: 8,
        questionNumber: 1
    },
    {
        title: 'Recap Round 3',
        background: 'Do you remember the less than operator?',
        example: 'Remember your Chuunin training!',
        question: 'Which statement would show that there are less than 7 nunchucks?',
        answers: ['let nunchucks = Math.random()', 'nunchucks > 10', 'nunchucks = 7', 'nunchucks < 7'],
        correct: 'nunchucks < 7',
        level: 8,
        questionNumber: 2
    },
    {
        title: 'Recap Round 4',
        background: 'Can you cast your mind back to If Else Statements?',
        example: 'Remember your Jounin training!',
        question: 'Which statement would make ninjaChoice be shuriken when they have a value of 7?',
        answers: ['if (choice > 5) { ninjaChoice = shuriken } else { enemyChoice = origami }', 'if (choice > 9) { ninjaChoice = nunchucks } else { ninjaChoice = shuriken }',
                'if (choice < 15) { ninjaChoice = nunchucks } else { ninjaChoice = shuriken }', 'if (choice <= 15) { ninjaChoice = nunchucks } else { ninjaChoice = origami }'],
        correct: 'if (choice > 9) { ninjaChoice = nunchucks } else { ninjaChoice = shuriken }',
        level: 8,
        questionNumber: 3
    },
    {
        title: 'Recap Round 5',
        background: 'What do you remember about arrays?',
        example: 'Remember your Special Jounin training!',
        question: 'How would you make an array with Ninja, 5 and false?',
        answers: ['let myArray = "Ninja", 5, false', 'let myArray = ["Ninja", 5, false]', 'let myArray = ["Ninja" 5 false]', 'let myArray = "Ninja" 5 false'],
        correct: 'let myArray = ["Ninja", 5, false]',
        level: 8,
        questionNumber: 4
    },
];
