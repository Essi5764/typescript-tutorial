// Declaring Types
    //1        //2          //3   
let username: string = "instructor";
let password: string = "Letmein1234";
let instructorId: number = 5;

// Declaring a value and type without initialization:
let passwordII: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

//Numbered 
let age: number = 40;
let currentYear: number = 2018;

//EO6 octal literals
let decimal: number = 6;
let hex: number = 0xff00d;
let binary: number = 0b10101;

// Strings
let companyName: string;
companyName = "Eleven Fifty"

let appName: string = 'Twitter';
appName = "Instagram";

// Boolean
let isLoggedIn: boolean = false;
let isGoldLevelUser: boolean = false;

// Array
let studentList: string[] = ['Tom','Tracy','Nikaya']
let allScores: Array<number> = [100,92,95,96];

// Any
let dataFromThirdParty: any ='12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);


dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

// Void

function sayHelloToAll(): void{
    console.log("Hello to all")
}

// Null and Undefined
let undefinedVariable:undefined=undefined;
let nullVariable:null = null;

//Tuple
let usernameAndId: [number,string];
usernameAndId = [1, "kennisreally40"];

// Enum
enum WeaponType {Sword,Saber, Spear}
let weapon: WeaponType = WeaponType.Sword

//Union Types
let x: number | string;
let y: number | null;

// This means that x can either be '12345' or 12345