const calendarDays = document.querySelector('.calendar-days');
const monthYear = document.getElementById('month-year');
const prevButton = document.getElementById('prev-month');
const nextButton = document.getElementById('next-month');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let currentDay = currentDate.getDate();

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar(month, year) {
    calendarDays.innerHTML = '';
    monthYear.textContent = `${months[month]} ${year}`;
}

renderCalendar(currentMonth, currentYear);