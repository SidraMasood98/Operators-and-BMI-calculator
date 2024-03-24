//unary operators:
let a: number = 5;
let b: number = 2;
let c: number ;
c= ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);

//assignment o perators(=):
let D :number = 8;
D += 1;
console.log(D);

//comparasion operators:
//(==):
let pens : number = 3;
let erasers : number = 2;
let result = pens == erasers
console.log(result);

//(!=):
let num1 = 3;
let num2 = 3;
let result1 = num1 != num2
console.log(result1);

//(>,<):
let Num1 = 4;
let Num2 = 2;
let Result2 = 4>2
console.log(Result2);

let Numb1 = 4;
let Numb2 = 2;
let result2 = 4<2
console.log(result2);


//////logical operator:

////(&&):
let e : number = 4
let f : number = 7
//if both conditions are true:
let logicalAnd = (e>0) && (f>0);
console.log(logicalAnd);

//if one condition is false and other is true:
let logicalAnd1 = (e<0) && (f>0);
console.log(logicalAnd1);

//if both condition are false:
let logicalAnd2 = (e<0) && (f<0);
console.log(logicalAnd2);

////(||):
//if both conditions are true:
let logicalOr = (e>0) || (f>0);
console.log(logicalOr);

//if one condition is false and other is true:
let logicalOr1 = (e<0) || (f>0);
console.log(logicalOr1);

//if both condition are false:
let logicalOr2 = (e<0) || (f<0);
console.log(logicalOr2);

////(!):
//when condition is true:
let logicalNot= !(e>0);
console.log(logicalNot);

//when condition is false:
let logicalNot1= !(e<0);
console.log(logicalNot1);