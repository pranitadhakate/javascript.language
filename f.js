
/*const prompt = require("prompt-sync")();
let n= prompt("Enter something")

if (n % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
*/

/*const prompt = require("prompt-sync")();
let a= prompt("Enter something");

let b= prompt("Enter something");

a = parseFloat(a);
b = parseFloat(b);
    console.log(a+b);*/
    
//1
/*Write a JavaScript function that takes two integers,


a and b. If a is greater than b, return the difference


multiplied by 2. If b is greater than a, return the sum.


If they are equal, return their product.


Test case:-  a = 8,b = 5


*/

/*const prompt =require("prompt-sync")();
let a = parseInt (prompt("enter the nu:"));
let b = parseInt (prompt("enter the nu:"));
if(a>b)
{
console.log((a-b)*2);
}
else if(a<b)
{
console.log(a+b);
}
else
{
console.log(a*b)
}*/

//2

/*Write a JavaScript function that takes three integers,


x, y, and z. If x is greater than or equal to y and y is greater


than or equal to z, return true. Otherwise, return false.


Test case-:X = 5, Y = 7, Z = 9*/

/*const prompt = require ("prompt-sync")();
let x = parseInt(prompt("enter the x:"));
let y = parseInt(prompt("enter the y:"));
let z = parseInt(prompt("enter the z:"));

if(x>=y && y>=z)
{
console.log(true);
}
else 
{
console.log(false);
}*/

//3
/*Write a JavaScript function that takes an integer n. If n is


even and greater than 10, return "Even and Greater than


10." If n is odd and less than 5, return "Odd and Less than


5." Otherwise, return "Other."


Test case-: n = 7  */
/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("enter the n:"));
if(n%2==0)
{
if(n>10)
{
console.log("Even and Greater than 10.");
}
 else
 {
console.log( "other");
}
}
else
{
 if (n<5)
{
 console.log(" Odd and Less than 5.");
 }
 else
 {
console.log( "other");
}
}*/
 //4
/*isTrue and isFalse. If both are true, return "Both are True."


If both are false, return "Both are False." Otherwise, return


"One is True and One is False."


Test case-: isTrue = true, isFalse = false  */

/*let isTrue =true;
let isFalse =false;
if(isTrue && isFalse)
{
console.log("Both are True.");
}
else if(!isTrue && !isFalse)
{
console.log("Both are False.");
}
else
{
console.log("One is True and One is False.");
}*/

//5


/*Write a JavaScript function that takes a string str. If the


string has more than 5 characters and starts with the


letter "A," return "Valid String." Otherwise, return


"Invalid String."


Test case-: str = “Apple” */


/*const prompt = require("prompt-sync")();
let str=prompt("enter the nu");
console.log(str)
if(str.length>5 && str[0]==="A")
{
console.log("Valid String")
}
else{
   console.log("Invalid String")
}*/

//6
/*Write a JavaScript function that takes an integer n and


prints a pyramid pattern with consecutive numbers.


Use a loop for the printing.


Test case-: n = 3


output -:


    1


  232


34543
*/

/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
    let row = '';
    
    // Add spaces before numbers 
    for (let k = 1; k <= n - i; k++) {
        row += ' ';
    }

    // Print increasing numbers
    for (let j = i; j <= 2 * i - 1; j++) {
        row += j;
    }

    // Print decreasing numbers for the rest of the line
    for (let l = 2 * i - 2; l >= i; l--) {
        row += l;
    }

    console.log(row);
}*/
//7
/*Write a JavaScript function that takes a positive integer n


and generates a matrix of size n x n filled with


consecutive numbers in a zigzag pattern. The numbers


should start from the top-left corner and zigzag


horizontally and vertically until the entire matrix is filled.


Implement the solution using loops.


Test case -: n = 4


Expected Output:


1 2 3 4


8 7 6 5


9 10 11 12


16 15 14 13
*/
/*const prompt = require("prompt-sync")();
let n= parseInt(prompt("enter the num:"));
let a = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      for (let j = 1; j <= n; j++) {
        process.stdout.write(a.toString() + ' ');
        a = a + 1;
      }
    } else {
      a = i * n;
      for (let k = 1; k <= n; k++) {
        process.stdout.write(a.toString() + ' ');
        a = a - 1;
      }
      a = a + (n + 1);
    }
    console.log();
  }
*/

//8
/*Write a JavaScript function that takes an integer n and


prints a pattern of asterisks in the form of a diamond.


Use a loop for the printing.


Test case-: n = 3


Output-:


   *


  ***


 *****


  ***


   *
  */
/*const prompt = require("prompt-sync")();
let n= parseInt(prompt("enter the num:"));
	for(let i=1;i<=n;i++)
	{
		for(let j=1;j<=n-i;j++)
		{
			process.stdout.write('  ')
		}
			for(let k=1;k<=i;k++)
			{
			process.stdout.write('* ')
			}
			for(let l=1;l<i;l++)
			{
			process.stdout.write('* ')
			}
			console.log()
	}
	for(let p=n-1;p>0;p--)
	{
		for(let j=1;j<=n-p;j++)
		{
			process.stdout.write('  ')
		}
		for(let k=1;k<=p;k++)
		{
			process.stdout.write('* ')
		}
		for(let l=1;l<p;l++)
		{
			process.stdout.write('* ')
		}
		console.log()
	}
*/

//9		
/*Write a JavaScript function that takes an array of integers


and rearranges the elements in a way that all even


numbers come before odd numbers. Implement the


solution using loops.


Test case-:[4, 7, 2, 9, 6, 5]
*/
/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("enter the num:"));
let arr=[];
for(let i=0;i<n;i++)
{
let v=parseInt(prompt("enter the num"));
arr.push(v);
}
let res=[]
for(let i=0;i<n;i++)
{
if(arr[i]%2==0)
{
res.push(arr[i])
}
}
for(let i=0;i<n;i++)
{
if(arr[i]%2!=0)
{
res.push(arr[i])
}}
console.log(res);*/
//10
/*Write a JavaScript function that takes an array of integers


and returns the sum of the numbers at even indices


minus the sum of the numbers at odd indices.


Implement the solution using loops.


Test case-:[1, 4, 2, 7, 3, 6]
*/

/*const prompt = require('prompt-sync')();
let n = parseInt(prompt("enter the num"))
let arr=[];
for(let i=0;i<n;i++)
{
let v=parseInt(prompt("enter the num"))
arr.push(v)
}
i=0
e=0
o=0
for(let i=0;i<n;i++)
{
if(i%2==0)
{
e=e+arr[i]
}
else
{
o=o+arr[i]
}
}
console.log(e-o)
*/
/*(const prompt = require('prompt-sync')();
let n=parseInt(prompt("enter the num"))
let a;
if(n>=1000)
{
a=n/1000;
a=n%1000;
console.log(a);
}

else if(n>=500)
{
a=n/500;
a=n%500;
console.log(a);
}

else if(n>=100)
{
a=n/100;
a=n%100;
console.log(a);
}

else if(n>=20)
{
a=n/20;
a=n%20;
console.log(a);
}

else if(n>=10)
{
a=n/10;
a=n%10;
console.log(a);
}

else if(n>=5)
{
a=n/5;
a=n%5;
console.log(a);
}

else if(n>=2)
{
a=n/2;
a=n%2;
console.log(a);
}

else if(n>=1)
{
a=n/1;
a=n%1;
console.log(a);
}
*/

/*const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the num: "));
let a;

if (n >= 2000) {
    a = Math.floor(n / 2000);
    n = n % 2000;
    console.log("2000 ");
}

if (n >= 1000) {
    a = Math.floor(n / 1000);
    n = n % 1000;
    console.log("1000 " );
}

if (n >= 500) {
    a = Math.floor(n / 500);
    n = n % 500;
    console.log("500 " );
}

if (n >= 200) {
    a = Math.floor(n / 200);
    n = n % 200;
    console.log("200 " );
}

if (n >= 100) {
    a = Math.floor(n / 100);
    n = n % 100;
    console.log("100 " );
}
if (n >= 20) {
    a = Math.floor(n / 20);
    n = n % 20;
    console.log("20 " );
}

if (n >= 10) {
    a = Math.floor(n / 10);
    n = n % 10;
    console.log("10 ");
}

if (n >= 5) {
    a = Math.floor(n / 5);
    n = n % 5;
    console.log("5 " );
}

if (n >= 2) {
    a = Math.floor(n / 2);
    n = n % 2;
    console.log("2 " );
}
if (n >= 1) {
    a = Math.floor(n / 1);
    n = n % 1;
    console.log("1 " );

*/





