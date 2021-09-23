const yargs = require('yargs')
const checkFizzBuzz = require("./fizbuzz.function");

const command = yargs.argv._[0];
const params = yargs.argv;

if(command === 'fizzbuzz'){
    if(params.amount){

        if(isNaN(params.amount)){
            console.log(params.amount + ' is not a number \n Please enter a numbered amount!')
            return;
        }

        const amount = params.amount;
        for (let i = 0; i < amount; i++) { // Runs i times, with values of amount
            const value = checkFizzBuzz(i);
            console.log(value);
        }
    }else{
        console.log('Please enter the param --amount only');
    }
}
