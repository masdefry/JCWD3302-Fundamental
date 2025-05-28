// 05 - Convert days to be years, months, and days
const totalDays = 400; //
let daysLeft; //

const years = Math.floor(totalDays / 365);
daysLeft = totalDays % 365;

const months = Math.floor(daysLeft / 30);
daysLeft = daysLeft % 30;

const days = daysLeft;

console.log(
  `Total Days ${totalDays} = ${years} Years, ${months} Months, ${days} Days`
);

// 06 - Difference days between 2 dates
const date1 = '2025-05-01';
const date2 = '2025-05-28';

const date1Now = new Date(date1).getTime() / (1000 * 60 * 60 * 24);
const date2Now = new Date(date2).getTime() / (1000 * 60 * 60 * 24);

console.log(date2Now - date1Now);
