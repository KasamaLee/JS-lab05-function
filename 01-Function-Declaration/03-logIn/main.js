function login (username, password) {
    if (username === 'admin' && password === 'P@ssw0rd') alert('login สำเร็จ');
    else alert('login ไม่สำเร็จ');
}

let username = prompt('Enter Username : '); 
let password = prompt('Enter Password: '); 
login(username, password);