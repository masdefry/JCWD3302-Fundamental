// > DECLARE VARIABLE
let text: string = 'abc';
let point: number = 1000;
let isMarried: boolean = false;
let empty: undefined;

let address: string | number | boolean | undefined | null = 'Bogor';
address = 12345;

// > ARRAY
// Array dengan Tipe Data Seragam
const fruits: string[] = ['Apple', 'Orange', 'Banana'];
const points: number[] = [1000, 10, 1];

// Array dengan Tipe Data Berbeda (Tupple Array)
const randomArr: [number, string, boolean] = [123, 'abc', true];

// > OBJECT
// Type
// Interface

const objUser: { username: string; password: string; phoneNumber: number } = {
  username: 'defryan',
  password: 'abc12345',
  phoneNumber: 6281212492192,
};

type TUser = {
  username: string;
  password: string;
  phoneNumber: number;
};

interface IUser {
  password: string;
  username: string;
  phoneNumber?: number; // phoneNumber is optional
}

const objUser1: IUser = {
  username: 'ryan',
  password: 'bebas',
  phoneNumber: 62821219212,
};

// ➡️ Type vs Interface
//                              Type vs Interface
//  Object                  :    OK         OK
//  Merge                   :    x          OK
//  Intersection & Union    :    OK         x
//  Extend                  :    x          OK

// ▪️Object: Sama-sama bisa digunakan untuk mendefinisikan struktur data object

// ▪️Merge
// Type: Apabila memiliki type yang sama, maka akan menyebabkan error
// type TSong = {
//   album: string;
//   release: number;
// };

// type TSong = {};

// Interface: Apabila memiliki interface yang sama dengan struktur yang berbeda,
//            maka akan otomatis di merge.
//            Apabila memiliki interface yang sama dengan struktur yang sama,
//            maka akan menyebabkan error

interface ISong {
  album: string;
}

interface ISong {
  album: string;
  release: number;
}

const song01: ISong = {
  album: 'Dewa',
  release: 2024,
};

// ▪️Intersection : Strict
type TSongA = {
  artistName: string;
};

type TSongB = {
  album: string;
};

type TSongC = {
  release: number;
};

const song02: TSongA & TSongB = {
  artistName: 'Dewa',
  album: 'Dewa',
};
console.log(song02);

// ▪️Union        : Customable
const song03: TSongA | TSongB | TSongC = {
  album: 'Dewa',
};

console.log(song03);

// ▪️Extend

import INewUser01 from './types';

const userNew: INewUser01 = {
  username: 'ryan',
  password: 'abc',
  phoneNumber: 6281,
  birthDate: '2020-10-10',
};

// CLEAN CODE
// Export & Import Module

// > FUNCTION
function Greet(username: string) {
  return username;
}

Greet('Abc');

const Hello = (username: string) => {
  return username;
};

Hello('ryandefryan');

interface IGreetingUserParams{
  username: string, 
  email: string, 
  password: string
}

// Parameter 1: Parameter Biasa
function Bebas(name: string){

}

// Parameter > 1: Parameter Object
function GreetingUser({username, email, password}: IGreetingUserParams){

}

GreetingUser({
  email: '',
  username: '', 
  password: ''
})