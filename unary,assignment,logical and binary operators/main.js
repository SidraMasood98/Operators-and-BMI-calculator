//unary operators:
var a = 5;
var b = 2;
var c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
//assignment o perators(=):
var D = 8;
D += 1;
console.log(D);
//comparasion operators:
//(==):
var pens = 3;
var erasers = 2;
var result = pens == erasers;
console.log(result);
//(!=):
var num1 = 3;
var num2 = 3;
var result1 = num1 != num2;
console.log(result1);
//(>,<):
var Num1 = 4;
var Num2 = 2;
var Result2 = 4 > 2;
console.log(Result2);
var Numb1 = 4;
var Numb2 = 2;
var result2 = 4 < 2;
console.log(result2);
//logical operator:
//(&&):
var e = 4;
var f = 7;
//if both conditions are true:
var logicalAnd = (e > 0) && (f > 0);
console.log(logicalAnd);
//if one condition is false and other is true:
var logicalAnd1 = (e < 0) && (f > 0);
console.log(logicalAnd1);
//if both condition are false:
var logicalAnd2 = (e < 0) && (f < 0);
console.log(logicalAnd2);
//(||):
//if both conditions are true:
var logicalOr = (e > 0) || (f > 0);
console.log(logicalOr);
//if one condition is false and other is true:
var logicalOr1 = (e < 0) || (f > 0);
console.log(logicalOr1);
//if both condition are false:
var logicalOr2 = (e < 0) || (f < 0);
console.log(logicalOr2);
//(!):
//when condition is true:
var logicalNot = !(e > 0);
console.log(logicalNot);
//when condition is false:
var logicalNot1 = !(e < 0);
console.log(logicalNot1);
