const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === 'Final';
}); 
console.log('here i am');
console.log(finals2014);
//(a) Home Team name for 2014 world cup final
console.log('task 1a', finals2014[0]['Home Team Name']);
//b) Away Team name for 2014 world cup final
console.log('task 2a', finals2014[0]['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
console.log('task 3a', finals2014[0]['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
console.log('task 4a', finals2014[0]['Away Team Goals']);
//(e) Winner of 2014 world cup final */
console.log('task5b', finals2014[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/
// const madeIt = fifaData.filter(function(item) {
//     return item.Stage === 'Final'
// });
// const madeIt = fifaData.filter(function(data) {
//     return data.Stage === 'Final'
//});
 function getFinals(data) {
    const madeIt = data.filter(function(item) {
        return item.Stage === 'Final'
 })
 return madeIt;
 }
console.log('Tak 2', getFinals(fifaData));
// }
// console.log(' task2,', getFinals())


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(data, getFinalsCb) {
    return getFinalsCb(data).map(item => item.Year);
}
console.log('task 3AAA', getYears(fifaData, getFinals))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(data, gfcb) {
    return gfcb(data).map(item => item['Home Team Goals'] > item['Away Team Goals'] ? 
     item['Home Team Name'] : item['Away Team Name']); 
}

console.log('task 4', getWinners(fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getFinalsCb, getYearsCb, getWinnersCb){
   const winners = getWinnersCb(array, getFinalsCb);
   const years = getYearsCb(array, getFinalsCb); 
   
    return winners.map((item, index) => `In ${years[index]}, ${item} won the world cup!`)
}
console.log('task 5!!!!!', getWinnersByYear(fifaData, getFinals, getYears, getWinners)); 


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(array, getFinalsCb) {
   const aveNumHomeGoals = array.reduce(function(acc, item){
       return acc + item['Home Team Goals'] + item['Away Team Goals'];
   }, 0)
   return(aveNumHomeGoals / array.length).toFixed(2);
};


console.log('task 6!!!', getAverageGoals(fifaData, getFinals));




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */
// function winnerInitals(data, gfcb) {
//     return gfcb(data).map(item => item['Home Team Goals'] > item['Away Team Goals'] ? 
//     item['Home Team Initals'] : item['Away Team Initals']); 
//     }
function getCountryWins(data, winnerInitalsCb, gfcb){}
    // const hwManyWinw = getWinners(data, getFinals).map(function(item){
    //     return item['Home Team Initals'] + item["Away Team Initals"]
    // }, 0)
    // return teamIn;

    

//    return winnersCountry.map((item, index) => item['Team Initals']
// )}

    //}

    console.log('tag', getCountryWins(fifaData,'GER'))
    //ata, teamIn, getWinnersCb) {
// return getWinnersCb(items).reduce()




/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function winnerInitals(data, gfcb) {
return gfcb(data).map(item => item['Home Team Goals'] > item['Away Team Goals'] ? 
item['Home Team Initals'] : item['Away Team Initals']); 
}
function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
