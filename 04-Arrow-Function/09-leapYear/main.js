// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year 
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว 
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว


// หาร 4 ลงตัว => true
// 1800 => false
// 1900 => false

// หาร 100 ลงตัวไม่เป็น Leap Year ***ยกเว้นหาร 400 ลงตัวเป็น Leap Year
// ที่เหลือหาร 4 ลงตัว เป็น Leap Year

// isLeapYear : YEAR => BOOLEAN

// #1
// const isLeapYear = (year) => {
//     if (year % 400 == 0) {
//         return true;
//     } else if (year % 100 == 0) {
//         return false;
//     } else if (year % 4 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// #2
// const isLeapYear = (year) => {
//     if (year % 400 == 0) {
//         return true;
//     }
//     if (year % 100 == 0) {
//         return false;
//     }
//     if (year % 4 == 0) {
//         return true;
//     }
//     return false;
// };

// #3
// const isLeapYear = (year) => {
//     if (year % 100 == 0) {
//         return year % 400 == 0;
//     }
//     if (year % 4 == 0) {
//         return true;
//     }
//     return false; 
// };

// #4
// const isLeapYear = (year) => {
//     if (year % 100 == 0) {
//         return year % 400 == 0;
//     }
//     return year % 4 == 0;
// }

// #5
// const isLeapYear = (year) => {
//     // ternary
//     return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }

// #6
const isLeapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);


isLeapYear(1700); // false
isLeapYear(2024); // true
isLeapYear(2023); // false
isLeapYear(1600); // true


