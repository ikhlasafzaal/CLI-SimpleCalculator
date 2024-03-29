#!/usr/bin/env node

import inquirer from "inquirer";

console.log("\n \t \t CLI SIMPLE CALCULATOR: \n");

var result = await inquirer.prompt([
    {
        message: "Select One Operator to Perform Operation: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power", "Square Root"]
    }
]);

    if (result.operator === "Addition") {
        var result = await inquirer.prompt([
            { message: "Enter First Digit: ", type: "number", name: "num1" },
            { message: "Enter Second Digit: ", type: "number", name: "num2" },
        ]);
        let add = result.num1 + result.num2;
        console.log("\n \n Result of Calculation: ");
        
        console.log("\n First Digit: " +result.num1);
        console.log(" Second Digit: " +result.num2);
        console.log(" Result of Addition is: "+add);
    }
    else if (result.operator === "Subtraction") {
        var result = await inquirer.prompt([
            { message: "Enter First Digit: ", type: "number", name: "num1" },
            { message: "Enter Second Digit: ", type: "number", name: "num2" },
        ]);
        let sub =  result.num1 - result.num2;
        console.log("\n \n Result of Calculation: ");
        
        console.log("\n First Digit: " +result.num1);
        console.log(" Second Digit: " +result.num2);
        console.log(" Result of Subtraction is: "+sub);
    }
    else if (result.operator === "Multiplication") {
        var result = await inquirer.prompt([
            { message: "Enter First Digit: ", type: "number", name: "num1" },
            { message: "Enter Second Digit: ", type: "number", name: "num2" },
        ]);
        let mul = result.num1 * result.num2;
        console.log("\n \n Result of Calculation: ");
        
        console.log("\n First Digit: " +result.num1);
        console.log(" Second Digit: " +result.num2);
        console.log(" Result of Multiplication is: "+mul);
    }
    else if (result.operator === "Division") {
        var result = await inquirer.prompt([
            { message: "Enter First Digit: ", type: "number", name: "num1" },
            { message: "Enter Second Digit: ", type: "number", name: "num2" },
        ]);
        let div = result.num1 / result.num2;
        console.log("\n \n Result of Calculation: ");
        
        console.log("\n First Digit: " +result.num1);
        console.log(" Second Digit: " +result.num2);
        console.log(" Result of Division is: "+div);
    }
    else if (result.operator === "Power") {
        var result = await inquirer.prompt([
            { message: "Enter First Digit: ", type: "number", name: "num1" },
            { message: "Enter Second Digit: ", type: "number", name: "num2" },
        ]);
        let power = Math.pow(result.num1, result.num2);
        console.log("\n \n Result of Calculation: ");
        
        console.log("\n First Digit: " +result.num1);
        console.log(" Second Digit: " +result.num2);
        console.log(" Result of Power is: "+power);
        
    }
    else if (result.operator === "Square Root") {
        var result = await inquirer.prompt([
            { message: "Enter Digit: ", type: "number", name: "num1" },
        ]);
        let sqrt = Math.sqrt(result.num1);
        console.log("\n \n Result of Calculation: ");
        
        console.log("\n First Digit: " +result.num1);
        console.log(" Result of Square Root is: "+sqrt);
    }
    else {
        console.log("Invalid Operator!");
    }


