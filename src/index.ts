// const name = "Kyle",
// age =30,
// gender = "male";

// const person = {
//     name: "Kyle",
//     gender: "male",
//     age: 22
// }

// // parameter 뒤에 ?가 붙으면 그 파라미터는 선택적인 것이다.
// // const sayHi = (name: string, age: number, gender?: string): string => {
// //     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// // };

// // object를 전달하고 싶을 때
// // inerface로 선언 interface는 컴파일되서 js에 들어가지 않는다
// class Human {
//     public name: string;
//     public age: number;
//     public gender: string;
//     constructor(name: string, age:number, gender?:string){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// const lynn = new Human("Lynn", 18, "female");

// const sayHi = (person: Human): string => {
//     return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
// };

// console.log(sayHi(lynn));

//--------------------------------------//
import * as CryptoJS from 'crypto-js';

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string,
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.previousHash === 'string' &&
    typeof aBlock.timestamp === 'number' &&
    typeof aBlock.data === 'string';

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number,
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '234354234', '', 'Hello', 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlcok: Block = getLatestBlock();
  const newIndex: number = previousBlcok.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlcok.hash,
    newTimestamp,
    data,
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlcok.hash,
    data,
    newTimestamp,
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data,
  );

const isBlockValid = (candidateBlock: Block, previousBlcok: Block): boolean => {
  if (Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlcok.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlcok.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockChain.push(candidateBlock);
  }
};

createNewBlock('second block');
createNewBlock('third block');
createNewBlock('fourth block');
createNewBlock('fifth block');

console.log(blockChain);

export {};
