// const name: string = 'Mutasem';
// enum Role {
//     ADMIN = 1,
//     USER = 2
// }
// console.log(name);
// console.log(Role.ADMIN);

// // Core types & type inference
// let name = 'Mutasem';
// let age: number = 21;
// let isAdmin: boolean = true;
// let hobbies: string[] = ['Reading', 'Coding'];
// hobbies.push('Traveling');
// // objects
// let student: { name:string, age:number, isStudent:boolean} = {name: 'Mutasem', age: 21, isStudent: true};
// // array of objects
// let students: { name:string, age:number, isStudent:boolean}[];
// students = [
//     {name: 'Mutasem', age: 21, isStudent: true},
//     {name: 'Ali', age: 22, isStudent: false},
//     {name: 'Mohammad', age: 23, isStudent: true}
// ];
// console.log(students);
// // null
// let user: { name:string, age?:number} | null = null;
// console.log("user before assignment", user);
// user = {name: 'Mutasem', age: 21};
// console.log("user after assignment", user);
// user = null;
// console.log("user after assignment to null", user);
// // json
// let json: { name:string, age:number} | unknown = JSON.parse('{"name": "Mutasem json", "age": "21"}');
// console.log(json);
// if(typeof json === 'object' && json !== null && "name" in json){
//     console.log("its object", json);
//     console.log(json.name);
// } else {
//     console.log('json is not an object', json);
// }

// // functions
// function add(a: number, b: number): number {
//     return a + b;
// }
// const result = add(1, 2);
// console.log(result);
// // type
// type User = { name: string, age: number};
// function isValidUser(user: User): User | never {
//     if (user.name === 'Mutasem') {
//         return user;
//     }
//     throw new Error('User is not valid');
// }
// const user = isValidUser({name: 'Mutasem', age: 21});
// console.log(user);

// // union types and type narrowing
// type User ={ name: string, age: number };
// type StatusCode = 200 | 400;
// type ApiResponse = { data: User | null, status: StatusCode };
// function handleApiResponse(response: ApiResponse): void {
//     if(response.status === 200){
//         console.log('success', response.data);
//     } else {
//         console.log('error', response.status);
//     }
// }

// // interfaces and type aliases
// interface User {
//     name: string;
//     age: number;
// } /* & { role: "admin" | "user" }; */
//
// interface User {
//     role: "admin" | "user";
// }
//
// type UserResponse = {
//     data: User;
//     status: 200 | 400;
// }
//
// function getUser(name: string): UserResponse {
//     return {
//         data: {
//             name: "Mutasem",
//             age: 21,
//             role: "admin"
//         },
//         status: 200
//     }
// }


// // Tuples and enums
// enum Role {
//     ADMIN = "admin",
//     USER = "user",
// }
// type User = {
//     name: string;
//     age: number;
//     role: Role;
// }
// function getUser(name: string): User {
//     return {
//         name: name,
//         age: 21,
//         role: Role.ADMIN
//     }
// }
//
// // type Coordinates = [number[], () => void];
// // const coordinates: Coordinates = [[10, 20, 234], () => {
// //     console.log('hello');
// // }];
//
// type Coordinates = {
//     x: number;
//     y: number;
//     z: number;
//     print: (coordinates: Coordinates) => void;
// }

// classes and abstraction
class User {
    public name: string;
    public age: number;
    private readonly major: string;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.major = 'Computer Science';
    }
    public getUser(): string {
        return this.name;
    }
}

class Admin extends User {
    constructor(name: string, age: number, role: string) {
        super(name, age);
    }
    getAdmin(): string {
        return this.name;
    }
}

const user = new User('Mutasem', 21);
const admin = new Admin('Ali', 22, 'admin');
console.log(user.getUser());