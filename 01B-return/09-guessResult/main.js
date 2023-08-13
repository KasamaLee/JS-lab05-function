บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * => ƒ sayHi()
console.log(sayHi(10)); // ** => alert => 'Hi kid'  // return undefined
```


function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** // alert => Hi John  // return undefined 
console.log(sayHi()); // ****  // console.log แสดง Who are you // return undefined


