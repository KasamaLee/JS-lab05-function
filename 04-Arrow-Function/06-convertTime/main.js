// ให้เขียนฟังก์ชัน Convert day to second

// 1 day = 24 hr
// 1 hr = 60 min
// 1 min = 60 sec

const dayToSec = (day) => day * 24 * 60 * 60;

dayToSec(1); // 86400
dayToSec(30) // 2592000

// const HOUR_IN_DAY = 24;
// const MIN_IN_HOUR = 60;
// const SEC_IN_MIN = 60;

// const dayToSec = (day) => day * HOUR_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN;