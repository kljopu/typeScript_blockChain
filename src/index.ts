const name = "Kyle",
age =30,
gender = "male";

// parameter 뒤에 ?가 붙으면 그 파라미터는 선택적인 것이다.
const sayHi = (name: string, age: number, gender?: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;  
};

console.log(sayHi("Kyle", 43, "male"));
 
export {};