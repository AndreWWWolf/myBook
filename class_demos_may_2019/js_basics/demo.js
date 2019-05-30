// Triangle Information
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);

if (5 > 2 && 0 > 2) {
  console.log('A')
} else {
  console.log('B')
}

if (s0 <= 0 || s1 <= 0 || s2 <= 0 || s0 + s1 <= s2 || s0 + s2 <= s1 || s1 + s2 <= s0) {
  console.log('This can not be');
}
const perimeter = a + b + c;
const halfP = perimeter / 2;
const area = Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));

console.log(perimeter);
console.log('Perimeter is: ' + perimeter);
console.log('Area is: ' + area);