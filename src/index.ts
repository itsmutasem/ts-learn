// const name: string = 'Mutasem';
// enum Role {
//     ADMIN = 1,
//     USER = 2
// }
// console.log(name);
// console.log(Role.ADMIN);

// Core types & type inference
let name = 'Mutasem';
let age: number = 21;
let isAdmin: boolean = true;
let hobbies: string[] = ['Reading', 'Coding'];
hobbies.push('Traveling');
// objects
let student: { name:string, age:number, isStudent:boolean} = {name: 'Mutasem', age: 21, isStudent: true};
// array of objects
let students: { name:string, age:number, isStudent:boolean}[];
students = [
    {name: 'Mutasem', age: 21, isStudent: true},
    {name: 'Ali', age: 22, isStudent: false},
    {name: 'Mohammad', age: 23, isStudent: true}
];
console.log(students);
// null
let user: { name:string, age?:number} | null = null;
console.log("user before assignment", user);
user = {name: 'Mutasem', age: 21};
console.log("user after assignment", user);
user = null;
console.log("user after assignment to null", user);
// json
let json: { name:string, age:number} | unknown = JSON.parse('{"name": "Mutasem json", "age": "21"}');
console.log(json);
if(typeof json === 'object' && json !== null && "name" in json){
    console.log("its object", json);
    console.log(json.name);
} else {
    console.log('json is not an object', json);
}