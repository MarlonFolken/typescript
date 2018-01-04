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
//No intellisense if using variable of type -any-
let aMessage;
aMessage = 'abc';
//let endsWithC = aMessage.endsWith('c'); <-- sugestion not available right away
let endsWithC = (<string>aMessage).endsWith('c'); //suggestion available, (<type>myVariable)
let alternativeWay = (aMessage as string).endsWith('b'); //suggestion available, (myVariable as type)

/*
* Arrow Functions
*/

//common function
let showLog = function(aMessage){
    console.log(aMessage);
}

//arrow function
let showArrowLog = (aMessage) => {
    console.log(aMessage);
    console.log(aMessage + '...repeated');
}
//single line arrow function a.k.a. lambda expression
let singleLineArrowLog = (aMessage) => console.log(aMessage);
let noArgsArrowLog = () => console.log();

/*
* Interfaces
*/
interface Coordinates {
    x: number,
    y: number
}

let aCoordinate = (point: Coordinates) => {
    // ...
}
let getDistance = (pointA: Coordinates, pointB: Coordinates) => {
    // ...    
}


/*
* Class
*/
class Point {
    //fields
    x: number;
    y: number;
    //Methods.
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    //A method that gets the distance between this point and another point
    getDistance(another: Point){
        //...
    }
}


/*
* Objects
*/
//Using previous class
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();


/*
* Constructor
*/
class Point2 {
    x: number;
    y: number;

    // Using a constructor to initialize with values.
    // Values are set to optional -x?- to allow calling a Point2 without knowing x,y values
    constructor (x?: number, y?: number){
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

// If we dont know the values of x and y:
let point2 = new Point2();
point2.draw();
// If we knew the values of x and y:
// let point2 = new Point2(5, 6);


/*
* Access Modifiers
* public, private, protected
*/
class Point3 {
    // constructor declares itself variables implicitly
    // private access modifier will be given to each value
    constructor (private x?: number, private y?: number){
        // self assignment not required
        //this.x = x;
        //this.y = y;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
let point3 = new Point3(5,6);
point3.draw;
