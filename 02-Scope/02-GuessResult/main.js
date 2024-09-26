/*
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // *
```
*/

// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็น undefined
// เพราะ sayHi() อยู่ใน block scope