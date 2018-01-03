/*
* Variable declaration
*/
let varDecNum = 2;

function doSomething(){
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log('Finally: '+i); //'i' out of scope
}


/*
* Variable types
*/
let varIsNum = 5; //Number
let varIsBool = true; //Boolean
let varIsString = 'abc'; //String
let varIsAny; //Any
let varIsArrayNum = [3,5,7]; //Array of number

//type annotations
let vIN: number;
vIN = 5;
let vIB: boolean;
vIB = false;
let vIS: string;
vIS = 'xyz';
let vIA: any;
vIA = 5;
vIA = true;
let vIAN: number[];
vIAN = [7,9,11];

//Enum
//Unasociated...
const RGBTomato = 'FF6347';
const RGBAqua = '00FFFF';
const RGBPurple = '800080';

//Grouped as Enum:
enum RGBColors {Tomato = 'FF6347', Aqua='00FFFF', Purple='800080'};
let backgroundColor = RGBColors.Tomato; //intellisense available


/* 
* Type Assertions 
*/
