const arr:string[] = [" Ali", "Butt", "Hammad"];
arr.forEach(A => console.log(`${A} Come tonight at Dinner`));
const Gname = arr.pop();

console.log(`${Gname} Not Coming`);

const A:string = "Tayyab";

arr.push(A);


console.log("I found bigger dinner table");
arr.unshift("Moiz");
arr.splice(1,0,"Abdul Basit");
arr.push("Dr. Zia");

arr.forEach(A => console.log(`${A} Come tonight at Dinner`));
