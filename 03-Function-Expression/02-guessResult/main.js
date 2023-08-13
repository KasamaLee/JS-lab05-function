// บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร


const showModal = alert;
showModal("Execute modal"); // *
// alert แสดง Execute modal
// return undefined เพราะไม่มีการคืนค่า


const showModal = alert();
showModal("Execute modal"); // **
// alert ไม่แสดงข้อความ
// Uncaught TypeError: showModal is not a function


// the alert() function is not suitable for assigning to a variable and calling later as a function. 
// It's designed to display messages in a modal dialog 
// and doesn't have a return value that can be stored or reused like a function.