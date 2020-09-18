import { fifaData } from "./fifa.js";
console.log(fifaData);

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
/*


/*
(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const teamInformation = fifaData.filter((item) => {
  if (item.Year == 2014 && item.Stage === "Final") {
    console.log(
      `Home Team: ${item["Home Team Name"]} ${item.Year} ${item.Stage}`
    );
    console.log(
      `Away Team: ${item["Away Team Name"]} ${item.Year} ${item.Stage}`
    );
    console.log(
      `Home Team goals: ${item["Home Team Goals"]}, ${item.Year} ${item.Stage} `
    );
    console.log(
      `Home Team goals: ${item["Away Team Goals"]}, ${item.Year} ${item.Stage} `
    );
    console.log(` ${item["Win conditions"]} ${item.Year} ${item.Stage} `);
  }
});
console.log(teamInformation);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const getFinals = fifaData.filter((data) => {
  if (data.Stage === "Final") {
    return `${data.Year}`;
  }
});

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

const getYears = (getFinals) => {
  const years = getFinals.map((item) => {
    return `${item.Year}`;
  });
  return years;
};
console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

const getWinners = (getFinals) => {
  const winners = getFinals.map((winningCountries) => {
    if (
      winningCountries["Home Team Name"] > winningCountries["Away Team Name"]
    ) {
      return `${winningCountries["Home Team Name"]} `;
    } else {
      return `${winningCountries["Away Team Name"]} `;
    }
  });
  return winners;
};
console.log(getWinners(getFinals));
/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
  for (let i = 0; i < getWinners.length; i++) {
    return `In ${getYears[i]}, ${getWinners[i]} won the world cup!`;
  }
}
console.log(getWinnersByYear(getWinners(getFinals), getYears(getFinals)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

const getAverageGoals = (data) => {
  const homeAverage = data.reduce((total, currentValue) => {
    return total + currentValue["Home Team Goals"];
  }, 0);

  const awayAverage = data.reduce((total, currentValue) => {
    return total + currentValue["Away Team Goals"];
  }, 0);

  return `Away: ${awayAverage / data.length}, Home: ${ homeAverage / data.length }`;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
