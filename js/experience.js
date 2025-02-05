const startDate = new Date('2022-01-31');
const today = new Date();
const experienceInMs = today - startDate;

// Calculate total experience in days
const experienceInDays = Math.floor(experienceInMs / (1000 * 60 * 60 * 24));

// Calculate years, months, and days
const experienceInYears = Math.floor(experienceInDays / 365.25);
const remainingDaysAfterYears = experienceInDays % 365.25;
const experienceInMonths = Math.floor(remainingDaysAfterYears / 30.44);
const remainingDaysAfterMonths = Math.floor(remainingDaysAfterYears % 30.44);

const experienceElement = document.getElementById('experience');
experienceElement.textContent = `${experienceInYears} Years, ${experienceInMonths} Months, and ${remainingDaysAfterMonths} Days`;
