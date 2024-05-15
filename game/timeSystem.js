const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const seasonsOfYear = ["Spring", "Summer", "Autumn", "Winter"];
let currentDayIndex = 1;
let currentSeasonIndex = 0;
let currentHour = 6;
export let weekNumber = 1;
let amPm = 'AM';
let dayTimeStart = 6;
let dayTimeEnd = 9;
let currentWeekDay = daysOfWeek[currentDayIndex];
let currentSeason = seasonsOfYear[currentSeasonIndex];
let currentYear = 1;

// Logic for time system
export function incrementHour() {
  if (currentHour === dayTimeEnd && amPm === 'PM') {
    currentHour = dayTimeStart;
    amPm = 'AM';
    incrementDay();
  } else if (currentHour === 11 && amPm === 'AM') {
    currentHour = 12;
    amPm = 'PM';
  } else if (currentHour === 11 && amPm === 'PM') {
    currentHour = 12;
    amPm = 'AM';
  } else if (currentHour === 12) {
    currentHour = 1;
  } else {
    currentHour++;
  }
  console.log(`The current time is now ${currentHour} ${amPm}.`);
}

function incrementDay() {
  currentDayIndex++;
  if (currentDayIndex >= daysOfWeek.length) {
    currentDayIndex = 0;
    incrementWeek();
  }
  currentWeekDay = daysOfWeek[currentDayIndex];
  console.log('It is now ${currentWeekDay}.');
}

function incrementWeek() {
  weekNumber++;
  if (weekNumber > 4) {
    weekNumber = 1;
    incrementSeason();
  }
}

function incrementSeason() {
  currentSeasonIndex++;
  if (currentSeasonIndex >= seasonsOfYear.length) {
    currentSeasonIndex = 1;
    incrementYear();
  }
}

function incrementYear() {
  currentYear++;
  console.log(`Welcome to Year ${currentYear}!`);
}

// Function called in game.js for time display
export function getCurrentTime() {
    return { currentHour, amPm, weekNumber, currentWeekDay, currentSeason, currentYear };
}