/*
บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // *
console.log(sayHi(10)); // **
```
*/

// console แสดง undefined 2 ครั้ง
// ครั้งแรกมาจาก sayHi() ไม่มีการ return => คืนค่าเป็น undefined
// ครั้งที่สองมาจาก console.log คืนค่าเป็น undefined