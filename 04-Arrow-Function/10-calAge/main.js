// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

// born : 01 01 2020
// dead : 31 12 2020
// 2020 is leap year => 366 day
// born : 01 01 2020 => 365 day

// born 2015
// 2015 => 365 
// 2016 => 366 
// 2017 => 365 
// 2018 => 365 

const isLeapYear = (year) => {
    if (year % 100 == 0) {
        return year % 400 == 0;
    }
    if (year % 4 == 0) {
        return true;
    }
    return false;
};

const ageAsDate = (year) => {
    let days = 0;
    do {
        if (isLeapYear(year)) {
            days += 366;
        }
        else {
            days += 365;
        }
        year++;
    } while (year <= 2020);
    return days - 1;
}

ageAsDate(2020); //365
ageAsDate(2019); //730
ageAsDate(2018); //1095
ageAsDate(2017); //1460
ageAsDate(2016); //1826
ageAsDate(2015); //2191
ageAsDate(2014); //2556
ageAsDate(2013); //2921
ageAsDate(2012); //3287









