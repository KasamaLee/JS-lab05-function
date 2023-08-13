// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

/*
// matchPoint(win) => 3 
// matchPoint(draw) => 1 
// matchPoint(lose) => 0 

const matchPoint = (a, b) => {
    if (a > b) return 3 + ' point';
    if (a == b) return 1 + ' point';
    if (a < b) return 0 + ' point';
}

matchPoint(1, 3); // 3 point
matchPoint(3, 3); // 3 point
matchPoint(3, 1); // 3 point
*/


// TEAM : Man City
// TOTAL MATCH : 38 [ignore]
// WIN : 28 => 28 * 3 = 84 [significant]
// DRAW : 5 => 5 * 1 = 5 [significant]
// LOSE : 5 => 5 * 0 = 0 [ignore]

// TOTAL : 89
// HIDING COMPLEXITY
// EASY INTERACT 

// (WIN, DRAW) => TOTAL

const calMatchPoint = (win, draw) => win * 3 + draw;
calMatchPoint(28, 5); // 89