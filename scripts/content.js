const pp = 0;
const playtime = 0;

// Compute expected playtime and the ratio
const expectedPlaytime = 1.16e-3 * Math.pow(pp, 1.17);
const ii = expectedPlaytime / playtime;

console.log('PP:', pp);
console.log('Playtime:', playtime);
console.log('Expected Playtime:', expectedPlaytime);
console.log('ii:', ii);
