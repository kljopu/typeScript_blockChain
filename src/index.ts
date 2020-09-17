// const name = "Kyle",
// age =30,
// gender = "male";

const person = {
    name: "Kyle",
    gender: "male",
    age: 22
}

// parameter 뒤에 ?가 붙으면 그 파라미터는 선택적인 것이다.
// const sayHi = (name: string, age: number, gender?: string): string => {
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;  
// };

// object를 전달하고 싶을 때
// inerface로 선언 interface는 컴파일되서 js에 들어가지 않는다
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};


console.log(sayHi(lynn));
 
export {};