const addition = (a: number, b: number): number => {
  return a + b;
};

const x: number = 5;
const y: number = 10;
const result: number = addition(x, y);

console.log(`The application name is ${process.env.APP_NAME}`);
console.log(`The result is ${result}`);