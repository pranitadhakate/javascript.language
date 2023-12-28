//19
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[]
for(let i=0;i<n;i++)
{
let m= parseInt(prompt("enter the n:"))
arr[i]=m
}
let e=0,o=0
for(let i=1;i<n;i++)
{
if(arr[i]%2===0)
{
e=e+1
}
else
{
o++
}
}
console.log(e )
console.log(o)
*/

//20
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[]
for(let i=0;i<n;i++)
{
let m= parseInt(prompt("enter the n:"))
arr[i]=m
}
let s=0,s1=0
for(let i=0;i<n;i++)
{
if(arr[i]%2==0)
{
s=s+arr[i]
}
else
{
s1=s1+arr[i]
}
}
console.log("even:" + s)
console.log("odd:" + s1)
*/

//21

/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n: "));
let arr = [];
let t = 0;

for (let i = 1; i <= n; i++) {
    let p = i;
    let a = i;
    let arm = 0;
    let c = 0;

    while (p > 0) {
        c++;
        p = Math.floor(p / 10);
    }

    while (a > 0) {
        let r = a % 10;
        let k = Math.pow(r, c);
        arm = arm + k;
        a = Math.floor(a / 10);
    }

    if (i === arm) {
        console.log(arm);
        arr[t] = i;
        t++;
    }
}
*/
//22
/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n: "));
let arr = [];
for(let i=1;i<=n;i++)
{
arr[i]=prompt("enter the num:")
}
for(let j=n;j>0;j--)
{
console.log(arr[j])
}*/

//23

/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n: "));
let arr = [];
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the num:")
}
for(let a=n-1;a>=0;a--)
{
console.log(arr[a])
}*/
//24
/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n: "));
let arr = [];
let max=Number.MIN_VALUE
for(let i=0;i<n;i++)
{
let e = parseInt(prompt("Enter the value of n: "));
arr[i]=e
}
for(let j=0;j<=n;j++)
{
if(arr[j]>max)
{
max=arr[j]
}
}

console.log(max)
*/

//25

/*const SIZE = 100;
let arr = [];

for (let i = 0; i < SIZE; i++) {
    arr[i] = i + 1;
}

for (let i = SIZE - 1; i >= 0; i--) {
    console.log(arr[i]);
}
*/

//26
/*
const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the value of n: "));
let i = parseInt(prompt("Enter the value of i: "));
let arr = [];

for (let j = 0; j < n; j++) {
    arr[j] = parseInt(prompt("Enter element :"));
}

for (let a = n - 1; a >= 0; a--) {
    if (arr[a] === i) {
        console.log(arr[a]);
        break; // Stop searching after the first occurrence
    }
}
*/

//27
/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n: "));
let arr = []
let max,min,mean,s=0
for(let i=0;i<n;i++)
{
let w = parseInt(prompt("Enter the value of w: "));
	arr.push(w)
	s=s+w
}

mean=s/n
max=arr[0]
for(let i=1;i<n;i++)
{
if(arr[i]>max)
{
max=arr[i]
}
}
min=arr[0]
for(let i=0;i<n;i++)
{

if(arr[i]<min)
{
min=arr[i]
}
}
console.log("mean:" + mean)
console.log("max:" + max)
console.log("min:" + min)

*/

//28

/*const prompt = require("prompt-sync")();


let n = parseInt(prompt("Enter the value of n: "));
let maxt = [];
let mint = [];
let sumMax = 0, sumMin = 0;
let mMaxT, mMinT;
let highT = -1000, lowT = 1000;
let hd, cd;


for (let i = 0; i < n; i++) {
    console.log(i + 1); 

    
    maxt[i]=prompt("enter the i:")
    sumMax += maxt[i];

    
    if (maxt[i] > highT) {
        highT = maxt[i];
        hd = i + 1;
    }

    console.log(i + 1);

    
    mint[i]=prompt("enter the n:")
    sumMin += mint[i];

   
    if (mint[i] < lowT) {
        lowT = mint[i];
        cd = i + 1;
    }
}

mMaxT=sumMax/n
mMinT=sumMin/n
console.log(mMaxT)
console.log(mMinT)
console.log(highT)
console.log(lowT)
console.log(hd)
console.log(cd)


*/
//29
/*
	const prompt = require("prompt-sync")();

// Input: Enter the value of rows and cols
let rows = parseInt(prompt("Enter the value of rows: "));
let cols = parseInt(prompt("Enter the value of cols: "));
let a = [];
let b = [];
let c = [];
let s = [];

// Input matrix A
console.log("Enter elements for Matrix A:");
for (let i = 0; i < rows; i++) {
    a[i] = [];
    for (let j = 0; j < cols; j++) {
        a[i][j]=prompt("enter the A[i][j]:")
    }
}

// Input matrix B
console.log("\nEnter elements for Matrix B:");
for (let i = 0; i < rows; i++) {
    b[i] = [];
    for (let j = 0; j < cols; j++) {
       b[i][j]=prompt("enter the B[i][j]:")
    }
}

// Matrix Addition
console.log("\nMatrix Addition:");
for (let m = 0; m < rows; m++) {
    c[m] = [];
    for (let n = 0; n < cols; n++) {
        c[m][n] = a[m][n] + b[m][n];
        console.log(c[m][n] + "\t");
    }
    console.log();
}

// Matrix Subtraction
console.log("\nMatrix Subtraction:");
for (let m = 0; m < rows; m++) {
    s[m] = [];
    for (let n = 0; n < cols; n++) {
        s[m][n] = a[m][n] - b[m][n];
        console.log(s[m][n] + "\t");
    }
    console.log();
}

*/
//30
/*const prompt = require('readline-sync');

let n = prompt.question('Enter the Roman numeral: ');
let k = [];
const romanNum = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
const decimal = [1000, 500, 100, 50, 10, 5, 1];
let m = 0;

// Convert Roman numeral to decimal equivalents
for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < 7; j++) {
        if (romanNum[j] === n[i]) {
            k[m] = decimal[j];
            m++;
        }
    }
}

// Output decimal equivalents
console.log("Decimal equivalents:");
for (let l = 0; l < m; l++) {
    console.log(k[l]);
}

// Calculate decimal representation
let sum = 0;
for (let h = 0; h < m; h++) {
    if (h + 1 < m && k[h] < k[h + 1]) {
        sum -= k[h];
    } else {
        sum += k[h];
    }
}

// Output decimal representation
console.log("Decimal representation: " + sum);
*/

//31

/*const prompt = require('readline-sync');

let n = prompt.question('Enter the Roman numeral: ');
let arr1 = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
let arr2 = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

let s = "";
for (let i = 12; i >= 0; i--) {
    let d = Math.floor(n / arr1[i]);
    if (d !== 0) {
        for (let j = 0; j < d; j++) {
            s += arr2[i];
        }
    }
    n = n % arr1[i];
}

console.log(s);
*/

//32
/*const prompt = require('prompt-sync')();

let n = parseInt(prompt('Enter the decimal number:'));
let binaryString = '';

while (n > 0) {
    let r = n % 2;
    binaryString = r.toString() + binaryString;
    n = Math.floor(n / 2);
}

// Reverse the binaryString
binaryString = binaryString.split('').reverse().join('');

console.log('Binary: ' + binaryString);
*/

//2D Array
//1
/*const prompt= require("prompt-sync")()
let r = parseInt(prompt("enter the r:"))
let c = parseInt(prompt("enter the c:"))
let arr= new Array(r) 
for(let i=0;i<r;i++)
{
arr[i]=new Array(c)
}
for(let i=0;i<r;i++)
{
for(let j=0;j<c;j++)
{
arr[i][j]=prompt("enter the num:")
}
}
for(let i=0;i<r;i++)
{
for(let j=0;j<c;j++)
{
console.log(arr[i][j])
}
}
*/


//2
/*const prompt= require("prompt-sync")()
let arr=[]
for(let i=0;i<5;i++)
{
arr[i]=[]
for(let j=0;j<5;j++)
{
arr[i][j]=prompt("enter the num:")
}
}

for(let i=0;i<5;i++)
{
for(let j=0;j<5;j++)
{
console.log(arr[i][j])
}
console.log()
}*/

//4
/*
const prompt = require("prompt-sync")();
let r = parseInt(prompt("Enter the number of rows: "));
let c = parseInt(prompt("Enter the number of columns: "));
let arr = new Array(r);

// Initialize the 2D array
for (let i = 0; i < r; i++) {
  arr[i] = new Array(c);
}

// Input values into the 2D array
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    arr[i][j] = prompt("Enter the element for row:")
  }
}

// Print the 2D array
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    console.log(arr[i][j]);
  }
  console.log(); // Add a newline after each row
}

// Calculate and print the sum
let s = 0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    s = s + parseInt(arr[i][j], 10);
  }
}
console.log(s);s
*/
//5

/*const prompt = require("prompt-sync")();
let arr = [
		[1,0,1,1] , 
		[0,1,0,1] ,
		[1,1,1,1]
	  ]
let maxC=0
let idx=-1
for(let i=0;i<3;i++)
{
let c=0
for(let j=0;j<4;j++)
{
if(arr[i][j]===1)
{
c++
}
}
if(maxC<c)
{
maxC=c
idx=i
}
console.log()
}
console.log(idx)

*/
//6

/*const prompt = require("prompt-sync")();

// User input for the number of rows and columns
let r = parseInt(prompt("Enter the number of rows: "));
let c = parseInt(prompt("Enter the number of columns: "));
let arr = [];

// Input values into the 2D array
for (let i = 0; i < r; i++) {
  arr[i] = [];
  for (let j = 0; j < c; j++) {
    arr[i][j] =prompt("Enter the element for row :");
  }
}

// Print the transposed matrix
console.log("Transposed Matrix:");
for (let i = 0; i < c; i++) {
  for (let j = 0; j < r; j++) {
    process.stdout.write(arr[j][i]);
  }
  console.log(); // Add a newline after each row
}
*/
//8
/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number of rows: "));
let arr=[]

for(let i=0;i<n;i++)
{
arr[i]=[]
for(let j=0;j<n;j++)
{
arr[i][j]=prompt("enter the num:")
}
}
for(let i=0;i<n;i++)
{
for(let j=i;j<n;j++)
{
let temp=arr[i][j]
arr[i][j]=arr[j][i]
arr[j][i]=temp
}
}
for(let i=0;i<n;i++)
{
for(let j=0;j<n;j++)
{
process.stdout.write(arr[i][j])
}
console.log()
}
*/

//9
/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number of rows: "));
let arr=[]
for(let i=0;i<n;i++)
{
arr[i]=[]
for(let j=0;j<n;j++)
{
arr[i][j]=prompt("enter the num:")
}
}
for(let i=0;i<n;i++)
	{
		for(let j=0;j<i;j++)
		{
		let temp=arr[i][j];
		arr[i][j]=arr[j][i];
		arr[j][i]=temp;
		}
	}
	for(let i=0;i<n;i++)
	{
		for(let j=0;j<n;j++)
	{
	process.stdout.write(arr[i][j]+" ");
	}
	console.log()
	}
	for(let i=0;i<n;i++)
	{
		let j=0;
		let k=n-1;
		while(j<k)
		{
			let temp=arr[i][j];
			arr[i][j]=arr[i][k];
			arr[i][k]=temp;
			j++;
			k--;
		}
	}
	console.log()
	//output
	for(let i=0;i<n;i++)
	{
		for(let j=0;j<n;j++)
	{
	process.stdout.write(arr[i][j]+" ");
	}
	console.log()
	}
	*/
//10
/*const prompt = require("prompt-sync")();

// User input for the number of rows and columns
let m = parseInt(prompt("Enter the number of rows: "));
let n = parseInt(prompt("Enter the number of columns: "));
let a = [];
for(let i=0;i<m;i++)
	{
	a[i]=[]
		for(let j=0;j<n;j++)
		{
		a[i][j]=prompt("enter the row:")
		}
	}
	console.log("First Matrix:");
	for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        console.log(a[i][j]);
    }
}
	//2nd matrix
	let p = parseInt(prompt("Enter the number of rows: "));
	let q = parseInt(prompt("Enter the number of columns: "));
	let b=[];
		for (let i = 0; i < p; i++) {
    		b[i] = [];
		for(let j=0;j<q;j++)
		{
		b[i][j]=prompt("enter the row:")
		}
	}
	console.log("Second Matrix:");
for (let i = 0; i < p; i++) {
    for (let j = 0; j < q; j++) {
        console.log(b[i][j]);
    }
}
	//check
	if(n!==p)
	{
		console.log("the matrix cannot be multiply");
	}
	else
	{
	let res=[];
	for(let i=0;i<m;i++)
	{
	res[i]=[]
		for(let j=0;j<q;j++)
		{
		res[i][j]=0;
		//i row of a, j column of b
		for(let k=0;k<n;k++)
		{
		res[i][j]=res[i][j]+a[i][k]*b[k][j];
		}
		}
	}
	console.log("the resultant matrix is:\n");
	for(let i=0;i<m;i++)
	{
		for(let j=0;j<q;j++)
		{
			console.log(res[i][j]);
		}
		console.log()
	}
	
	}

*/
//11
/*
const prompt = require("prompt-sync")();

// User input for the number of rows and columns
let m = parseInt(prompt("Enter the number of rows: "));
let n = parseInt(prompt("Enter the number of columns: "));
let a = [];
for(let i=0;i<m;i++)
	{
	a[i]=[]
	for(let j=0;j<n;j++)
		{
		a[i][j]=prompt("enter the row:")
		}
	}
	for(let i=0;i<m;i++)
	{
		if(i%2===0)
		{
			for(let j=0;j<n;j++)
			{
		process.stdout.write(a[i][j]);
			}
		}
		else
		{
		for(let j=n-1;j>=0;j--)
		{
			process.stdout.write(a[i][j]);
		}
	       }
	console.log()
	} 
	
*/
//13
/*const prompt = require("prompt-sync")();

// User input for the number of rows and columns
let m = parseInt(prompt("Enter the number of rows: "));
let n = parseInt(prompt("Enter the number of columns: "));
let a = [];
for(let i=0;i<m;i++)
	{
	a[i]=[]
	for(let j=0;j<n;j++)
		{
		a[i][j]=prompt("enter the row:")
		}
	}
	//2nd matrix
	let p = parseInt(prompt("Enter the number of rows: "));
	let q = parseInt(prompt("Enter the number of columns: "));
	if (m != p || n != q) {
        console.log("Matrices cannot be subtracted :");
        }
        else
        {
        let b=[]
	for(let i=0;i<p;i++)
	{
	b[i]=[]
		for(let j=0;j<q;j++)
			{
			b[i][j]=prompt("enter the row:");
			}
	}
	let res=[];
	for(let i=0;i<m;i++)
	{
	res[i]=[]
		for(let j=0;j<n;j++)
		{
		res[i][j]= a[i][j] - b[i][j];
		process.stdout.write(res[i][j]+" ");
		}
		console.log()
	}
	}	

*/
//1
/*const prompt = require("prompt-sync")();
let arr=[
		[1,2],
		[3,4]
	]
let brr=[
	 	[5,6],
		[7,8]
	]
let res=[]
for(let i=0;i<arr.length;i++)
{
res[i]=[]
for(let j=0;j<arr[i].length;j++)
{
res[i][j]=arr[i][j]+brr[i][j]
}
}
for(let i=0;i<res.length;i++)
{
for(let j=0;j<res[i].length;j++)
{
process.stdout.write(res[i][j]+" ")
}
console.log()
}
*/

//2

/*
//5
const prompt = require("prompt-sync")();
let a = prompt("enter the s:")
let k=3
let d=""
for (let i = 0, s = 0; i < 12; i++) {
    if (i === 3 || i === 7) {
        d += '-';
    } else {
        d += a[s];
        s++;
    }
}

console.log(d);
*/

//6
/*const prompt = require("prompt-sync")();
// User input for the number of rows and columns

let n = parseInt(prompt("Enter the number of columns: "));
let arr = [];
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the row:")
}
for(let i=0;i<Math.floor(n/2);i++)
	{
	let temp=arr[i];
	arr[i]=arr[n-1-i];
	arr[n-1-i]=temp;

	}
	for(let i=0;i<n;i++)
	{
	console.log(arr[i])
	}
	console.log()
	
	let size = prompt("Enter the size: ");
        let list = [];
	
	for(let i=0;i<size;i++)
	{
	list[i]=prompt("enter the n:")
	}
	for(let i=0;i<size;i++)
	{
	console.log(list[i]);
	}
	console.log()
	*/

//7
/*
const prompt = require("prompt-sync")();

// User input for the number of rows and columns
let n = parseInt(prompt("Enter the number of columns: "));
let arr = [];

// Input elements for the matrix
for (let i = 0; i < n; i++) {
  arr[i] = [];
  for (let j = 0; j < n; j++) {
    arr[i][j] = parseInt(prompt(`Enter the element at position (${i + 1},${j + 1}): `));
  }
}

let c = 0;

// Check if it is an identity matrix
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === j && arr[i][j] !== 1) {
      c = 1;
    } else if (i !== j && arr[i][j] !== 0) {
      c = 1;
    }
  }
}

if (c === 0) {
  console.log("It is an identity matrix");
} else {
  console.log("It is not an identity matrix");
}
	
*/	
//8
/*const prompt = require("prompt-sync")();
// User input for the number of rows and columns
let n = parseInt(prompt("Enter the number of columns: "));
let arr = [];

// Input elements for the matrix
for (let i = 0; i < n; i++) {
  arr[i] = [];
  }
for(let i=0;i<n;i++)
	{
		for(let j=0;j<n;j++)
		{
			arr[i][j]=prompt("enter the num:");

		}
	}
	let c=0;
	for(let i=0;i<n;i++)
	{
		for(let j=0;j<n;j++)
		{
			if(i==j && arr[i][j]==0)
			{
				c=1;
			}
			else if (i!=j && arr[i][j]!=0)
			{
				c=1;
			}
			
		}
	}  
	if(c==0)
	{
		console.log("It is a diagonal matrix");
	}
	else
	{
		console.log("It is not a diagonal matrix");
	}
*/
//9
/*
	const prompt = require("prompt-sync")();

// User input for the value of n
let n = prompt("Enter the value of n: ");
let arr = [];

// Input elements for the matrix
for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
        arr[i][j] = parseInt(prompt("Enter the element at position : "));
    }
}

let s = 0;

// Sum the diagonal elements
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j) {
            s = s + arr[i][j];
        }
    }
}

console.log(s);

	*/
	
//10
/*const prompt = require("prompt-sync")();

// User input for the number of rows and columns
let row = parseInt(prompt("Enter the number of rows: "));
let col = parseInt(prompt("Enter the number of columns: "));
let matrix1= new Array(row);
let matrix2= new Array(col);
let min= Number.MAX_SAFE_INTEGER
let matrix=new Array(row)
for(let i=0;i<row;i++)
	{
	matrix[i]=new Array(col)
	for(let j=0;j<col;j++)
	{
	matrix[i][j]=prompt("enter the pos:")
	if(matrix[i][j]<min)
	{
	min=matrix[i][j]
	}
	}
	}
	console.log("Minimum element is " + min);
	
	
*/
//11
/*const prompt = require("prompt-sync")();

// User input for the number of rows and columns
let r = parseInt(prompt("Enter the number of rows: "));
let c = parseInt(prompt("Enter the number of columns: "));
let arr=[]
for(let i=0;i<r;i++)
	{ arr[i]=[]
	}
	for(let i=0;i<r;i++)
	{
		for(let j=0;j<c;j++)
		{
			arr[i][j]=prompt("enter the n:");
		}
	}
	let tar;
	console.log("enter of the ele find:");
	tar=prompt("enter the t:");
	let fr=-1,fc=-1;
	for(let i=0;i<r;i++)
	{
		for(let j=0;j<c;j++)
		{
			if(arr[i][j] == tar)
			{
			fr=i;
			fc=j;
			break;
			}
		}
	}
	if(fc!=-1 &&fc!=-1)
	{
	console.log(tar,fr,fc);
	}
	else
	{
	console.log(tar);
	}
	
*/
//12
/*	
	const grid = [
    ['.', '.', '.', '.', '.', '.'],
    ['.', 'O', 'O', '.', '.', '.'],
    ['O', 'O', 'O', 'O', '.', '.'],
    ['O', 'O', 'O', 'O', 'O', '.'],
    ['.', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', '.'],
    ['O', 'O', 'O', 'O', '.', '.'],
    ['.', 'O', 'O', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.']
];

const num_rows = 9;
const num_cols = 6;

// Loop through the grid and print the image
for (let y = 0; y < num_cols; y++) {
    for (let x = 0; x < num_rows; x++) {
        process.stdout.write(grid[x][y]); // Using process.stdout.write to print without newline
    }
    console.log();  // Move to the next line after each row is printed
}

*/
//13

/*const prompt = require("prompt-sync")();

// User input for the number of rows and columns
let m = parseInt(prompt("Enter the number of rows: "));
let n = parseInt(prompt("Enter the number of columns: "));
let a = [];
for(let i=0;i<m;i++)
	{
	a[i]=[]
	for(let j=0;j<n;j++)
		{
		a[i][j]=prompt("enter the row:")
		}
	}	
	//spiral
	console.log();
	let minr=0;
	let maxr=m-1;
	let minc=0;
	let maxc=n-1;
	let tnu=m*n;
	let c=0;
	while(c<tnu)
	{
	//min row
	for(let j=minc;j<=maxc && c<tnu;j++)
	{
		process.stdout.write(a[minr][j]);
		c++;
	}
	minr++;
	//print max coloum
	for(let i=minr;i<=maxr && c<tnu;i++)
	{
	process.stdout.write(a[i][maxc]);
	c++;
	}
	maxc--;	
	//print max row
	for(let j=maxc;j>=minc && c<tnu;j--)
	{
	process.stdout.write(a[maxr][j]);
	c++;
	}
	maxr--;
	//print min coloum
	for(let i=maxr;i>=minr && c<tnu;i--)
	{
	process.stdout.write(a[i][minc]);
	c++;
	}
	minc++;
	}
	
*/



//	c_hire
//1
/*const prompt = require("prompt-sync")()
let n = prompt("enter the n:")
let arr=[]
let i
for( i=0;i<n;i++)
{
arr[i]=prompt("enter the row:")
}
for(let j=i;j>=1;j--)
{
if(arr[j-1]>arr[j])
{
let temp=arr[j-1]
arr[j-1]=arr[j]
arr[j]=temp
}
}
for(let i=0;i<n;i++)
{
console.log(arr[i])
}
*/

//2	
/*const prompt = require("prompt-sync")()	
const arr ="55556789"
const index ='5'
let low = 0;
let high = arr.length-2
let last = -1
while(low<=high)
{
const mid =low+Math.floor((high-low)/2)
if(arr[mid]===index)
{
last=mid
low=mid+1
}
else if(arr[mid]<index)
{
low=mid+1
}
else
{
high=mid-1
}
}
console.log( index, last);

*/

//2

/*const prompt = require("prompt-sync")()	
let n = parseInt(prompt("Enter the number of columns: "));
let l=[]
let s=0
let m = new Array(100).fill(0)
let temp,mean,median,mode
for(let i=0;i<n;i++)
{
let a=prompt("enter the n:")
l[i]=a
s=s+l[i]
}
mean= s/n
console.log(mean)
for(let i=0;i<n;i++)
	{
		for(let j=i+1;j<n;j++)
		{
			if(l[j]<l[i])
			{
				temp=l[j];
				l[j]=l[i];
				l[i]=temp;
			}
	       }
	}

let mid=Math.floor(n/2);
			if(n%2===0)
			{
			median=(l[mid-1]+l[mid])/2;
			}
			else
			{
			 median=l[mid];
			}
			console.log(median);
			//cal the mode
		        let max=0;
			for(let i=0;i<n;i++)
			{
			m[l[i]]++;
			if(m[l[i]]>max)
			{
			max=m[l[i]];
			mode=l[i];
			}
			}
			console.log(mode);

*/




/*function rotateWithGap(arr, n, k) {
    let temp = new Array(n);
    for (let i = 0; i < n; i++) {
        temp[(i + k) % n] = arr[i];
    }
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}
function main()
{
const prompt = require("prompt-sync")()	
let n = parseInt(prompt("Enter the number of columns: "));
let arr=new Array(n)
for(let i=0;i<n;i++)
	{
	arr[i]=prompt("enter the n:")
	}

	k=prompt("enter the value of k:");
	 rotateWithGap(arr, n, k);
	
	console.log()
}
main()

*/

/*function rotateWithGap(arr, n, k) {
    let temp = new Array(n);
    for (let i = 0; i < n; i++) {
        temp[(i + k) % n] = arr[i];
    }
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}

function main() {
    const prompt = require("prompt-sync")();
    let n = parseInt(prompt("Enter the number of columns: "));
    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Enter element ${i + 1}: `));
    }

    let k = parseInt(prompt("Enter the value of k: "));
    rotateWithGap(arr, n, k);

    console.log(`Array rotated ${k}: ${arr.join(' ')}`);
}

main();
*/
//5
/*
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number of columns: "));

let a = new Array(n);
let b = new Array(n);

for (let i = 0; i < n; i++) {
    a[i] = parseInt(prompt(`Enter element for array 'a': `));
}

for (let i = 0; i < n; i++) {
    b[i] = parseInt(prompt(`Enter element for array 'b': `));
}

let c = new Array(2 * n);
let i = 0, j = 0, k = 0;

while (i < n && j < n) {
    if (a[i] <= b[j]) {
        c[k] = b[j];
        j++;
    } else {
        c[k] = a[i];
        i++;
    }
    k++;
}

while (i < n) {
    c[k] = a[i];
    i++;
    k++;
}

while (j < n) {
    c[k] = b[j];
    j++;
    k++;
}

for (let m = 0; m < 2 * n; m++) {
    console.log(c[m]);
}
*/
//6

/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number of columns: "));

let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(prompt("Enter the array: "));
}

let targetsum = parseInt(prompt("Enter the target sum: "));

let start = 0;
let end = 0;
let currentsum = arr[start];

while (start < n) {
  if (currentsum === targetsum) {
    console.log(start, end);
    return 0;
  }

  if (currentsum < targetsum && end < n - 1) {
    end++;
    currentsum = currentsum + arr[end];
  } else {
    currentsum = currentsum - arr[start];
    start++;
  }
}

console.log("No subarray found.");
*/

//7

/*const prompt = require("prompt-sync")();

// Input for array a
let m = parseInt(prompt("Enter the number of elements for array a: "));
let a = new Array(m);
for (let i = 0; i < m; i++) {
    a[i] = parseInt(prompt("Enter an element for array a: "));
}

// Input for array b
let n = parseInt(prompt("Enter the number of elements for array b: "));
let b = new Array(n);
for (let i = 0; i < n; i++) {
    b[i] = parseInt(prompt("Enter an element for array b: "));
}

let c = new Array(m + n);
let k = 0;
let i = 0, j = 0;

// Merging arrays a and b into c
while (i < m && j < n) {
    if (a[i] < b[j]) {
        c[k] = a[i];
        k++;
        i++;
    } else if (a[i] > b[j]) {
        c[k] = b[j];
        k++;
        j++;
    } else {
        c[k] = a[i];
        k++;
        i++;
        j++;
    }
}

// Handle remaining elements in arrays a and b
while (i < m) {
    c[k] = a[i];
    k++;
    i++;
}

while (j < n) {
    c[k] = b[j];
    k++;
    j++;
}

// Print the merged array
for (let i = 0; i < k; i++) {
    console.log(c[i]);
}

*/
//8
/*
const prompt = require("prompt-sync")();

// Input for the first array
console.log("Enter the number of elements for the first array:");
let n = parseInt(prompt());
let arr1 = new Array(n);
for (let i = 0; i < n; i++) {
    console.log(`Enter element ${i + 1}:`);
    arr1[i] = parseInt(prompt());
}

// Input for the second array
console.log("Enter the number of elements for the second array:");
let m = parseInt(prompt());
let arr2 = new Array(m);
for (let i = 0; i < m; i++) {
    console.log(`Enter element ${i + 1}:`);
    arr2[i] = parseInt(prompt());
}

let merged = new Array(n + m);
let i = 0, j = 0, k = 0;

// Merging arrays arr1 and arr2 into merged
while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
        merged[k] = arr1[i];
        i++;
    } else {
        merged[k] = arr2[j];
        j++;
    }
    k++;
}

// Handle remaining elements in arrays arr1 and arr2
while (i < n) {
    merged[k] = arr1[i];
    i++;
    k++;
}

while (j < m) {
    merged[k] = arr2[j];
    j++;
    k++;
}

let totalSize = n + m;
let median;

if (totalSize % 2 === 0) {
    let middle1 = merged[totalSize / 2 - 1];
    let middle2 = merged[totalSize / 2];
    median = (middle1 + middle2) / 2.0;
} else {
    median = merged[Math.floor(totalSize / 2)];
}

console.log(`Median: ${median.toFixed(2)}`);
*/




//9
/*const prompt = require("prompt-sync")();

// Input for array a
let n = parseInt(prompt("Enter the number of elements for array a: "));
let arr = new Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("Enter an element for array a: "));
}
	let key=prompt("enter the k:")
	 let mid;
	let p=n-1;
	let j=0;
	 while(j<=p)
	 {
	mid=Math.floor(j+p)/2
	if(key === arr[mid])
	 	{
	 	console.log("key found index " + mid);
	 	break;
		}
	 	else if(key > arr[mid])
	 	{
	 	j=mid+1;
	 	}
	 	else
	 	{
	 	p=mid-1;
	 	}
	 }	
	 	if(j>p)
	 	{
	 		console.log("key not foud array");
	 	}

*/
//10
/*const prompt = require("prompt-sync")();

// Input for array a
let n = parseInt(prompt("Enter the number of elements for array n: "));
let a = new Array(n);
let temps
for (let i = 0; i < n; i++) {
    a[i] = parseInt(prompt("Enter an element for array a: "));
}
for(let i=0;i<n;i++)
		{
			for(let j=0;j<n-i-1;j++)
			{
				if(a[j]>a[j+1])
				{
				temp=a[j];
				a[j]=a[j+1];
				a[j+1]=temp;
				}
			}
		}
		for(let i=0;i<n;i++)
		{
		console.log(a[i]);
		}
*/
//10
/*const prompt = require("prompt-sync")();

// Input for array a
let n = parseInt(prompt("Enter the number of elements for array n: "));
let arr = new Array(n);

for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("Enter element:"));
}

// Bubble Sort
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

// Display sorted array
console.log("Sorted array:");
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}

*/
//10
/*const prompt=require("prompt-sync")()
let n = prompt("enter the n:")
let arr=new Array(n)
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the a:")
}
for(let i=0;i<n-1;i++)
{
let m=i
for(let j=i+1;j<n;j++)
{
if(arr[m]>arr[j])
{
m=j
}
}
let temp=arr[i]
arr[i]=arr[m]
arr[m]=temp
}
for(let i=0;i<n;i++)
{
console.log(arr[i])
}
*/

/*const prompt=require("prompt-sync")()
let n = prompt("enter the n:")
let arr = [8,7,6,5,4,3,2,1]
let = arr.length

    // Selection Sort "8765" in ascending order
    for (let i = 0; i < 4; i++) {
        let I = i;
        for (let j = i + 1; j < 4; j++) {
            if (arr[j] < arr[I]) {
                I = j;
            }
        }
	        if (I != i) {
            let temp = arr[i];
            arr[i] = arr[I];
            arr[I] = temp;
        }
    }
	 // Bubble Sort "4321" in descending order
    for (let i = 4; i < n - 1; i++) {
        for (let j = 4; j < n - i + 3; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
	  // Selection Sort for the entire array "87654321" in ascending order
    for (let i = 0; i < n - 1; i++) {
        let I = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[I]) {
                I = j;
            }
        }
        if (I !== i) {
            let temp = arr[i];
            arr[i] = arr[I];
            arr[I] = temp;
        }
    }
	// Print the sorted array
    console.log("Sorted Array in Ascending Order: ");
    for (let i = 0; i < n; i++) {
         console.log(arr[i])
    }
   console.log()
*/
//search

/*function binarySearch(arr, low, high, target) {
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

function main() {
    let input = [16, 12, 9, 5];
    let target = 17;
    let n = input.length;

    // Sort the input array
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (input[i] > input[j]) {
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }

    let output = [];
    for (let i = 0; i < n; i++) {
        output[i] = binarySearch(input, 0, n - 1, input[i]);
    }

    // Print the results
    console.log(output.join('\t'));
}

main();

*/

//string
//concate
/*let geek1=["rahul","sonam","sumit"]
let geek2=["raj","rohan"]
let geek3=["dell","hp"]
let new_geek=geek1.concat(geek2,geek3)
console.log(new_geek)*/



/*let geek =["rahul","sonam","sumit"]
let new_p=geek.join("/")
console.log(new_p)
*/








//object
//literal
//1
/*let fees = {};
fees.rahul = 100;
fees.rohit = 200;
fees.raju = 300;
console.log(fees.raju);
*/

/*let fees = {};
fees['rahul'] = 100;
fees['rohit'] = 200;
fees['raju'] = 300;
console.log(fees['raju']);
*/


/*let fees = {};
fees['rahul'] = 100;
fees.total = function() {
  return (100 + 200);
};
console.log(fees.total());
*/

/*let fees = new Object ();
fees.rahul = 100;
fees.sumit = 200;
fees.raj = 300;
fees.total = function () {
return(100+200);
};
console.log(fees.total());
*/




/*function Mobile(model_no) {
  this.model = model_no;
  this.memory = 4;
}

let samsung = new Mobile('Galaxy');
let nokia = new Mobile('3310');

if (typeof nokia.memory !== 'undefined') {
  console.log("available");
} else {
  console.log("not available");
}
*/
/*function Mobile(model_no) {
  this.model = model_no;
  this.memory = 4;
}

let samsung = new Mobile('Galaxy');
let nokia = new Mobile('3310');

if ('memory' in nokia) {
  console.log("available");
} else {
  console.log("not available");
}
*/

/*function Mobile(model_no) {
  this.model = model_no;
  this.color = 'white';
}

let samsung = new Mobile('Galaxy');
let nokia = new Mobile('3310');

if (nokia.hasOwnProperty('color')) {
  console.log("available");
} else {
  console.log("not available");
}
*/
/*function Mobile(model_no) {
  this.model = model_no;
  this.color = 'white';
  this.ram='4GB'
  this .price=function()
  {
  console.log(this.model + "price Rs. 3000 ");
  };
  }
  let samsung = new Mobile('Galaxy')
  let nokia =  new Mobile('3310')
  for(let s in nokia)
  {
  if(typeof nokia[s] !== 'function')
  {
  console.log(s + " " + nokia[s])
  }
  }
  */

/*function Mobile(model_no) {
  this.model = model_no;
  this.color = 'white';
  this.ram='4GB'
  this .price=function()
  {
  console.log(this.model + "price Rs. 3000 ");
  };
  }
  let samsung = new Mobile('Galaxy')
  let nokia =  new Mobile('3310')
  console.log (Object.keys(nokia)) 
*/



/*
//Object literal   // only creat one object
let fees ={};
fees['Rahul']=200;

//Object literal Declaration and intial  //1
let fees={Rahul:200};

//Object Constuctor//1
let fees = new Object()

//factory function  //multiple creat object
function mob ()
{
return {
model:'Galaxy';
}
}
let samsung = mobile();
let lg =mobile()


//constructor function
function mobile()
{
this.model = 'Galaxy';
}

let samsung = new mobile()
let lg = new mobile()

*/


/*
let Mobile = function(model_no,sprice)
{
this.model=model_no;
this.color='white';
this.price=30000;
this.sp=sprice;
this.sellingprice=function()
{
return (this.price+this.sp);
};
this.data=function()
{
console.log("Model No:" + this.model + "Price: " + this.sellingprice());
}
};
let samsung = new Mobile('Galaxy',2000);
let nokia = new Mobile('3310',1000);
nokia.data()
*/

//prototype

/*let Mobile = function (model_no)
{
//instance Member
this.model = model_no;
this.price = 3000;
};
let samsung = new Mobile('Galaxy');
let nokia = new Mobile('3310');
//classname.prototype.key ='value';
//prototype member
Mobile.prototype.color = 'white';
console.log(samsung.color)
console.log(samsung);

*/
//prototype ko acess krna he to for in loop use krna pdta he
/*let Mobile = function (model_no)
{
//instance Member
this.model = model_no;
this.price = 3000;
};
let samsung = new Mobile('Galaxy');
let nokia = new Mobile('3310');
//classname.prototype.key ='value';
//prototype member
Mobile.prototype.color = 'white';
for(let key in samsung)
{
console.log(key)
}
*/

/*
//it will return Object.prototype

//console.log(Object.prototype)

let b= {};
//console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(Object.prototype));
*/



//rong
/*function Mobile() {
    console.log(Mobile.prototype);
    let lg = new Mobile();
    console.log(lg.__proto__);

    // Verify
    console.log(Mobile.prototype === lg.__proto__);
    console.log(Mobile === lg.__proto__.constructor);
    console.log(Mobile === Mobile.prototype.constructor);
}

Mobile();
*/

// composition or mixin
/*let eating ={
eat: function ()
{
return " I can eat "
}
};
let walking ={
walk : function ()
{
return "I can walk"
}
};

let talking ={
talk : function ()
{
return "I can talk"
}
};
let rahu = Object.assign({},eating, walking,talking)
console.log(rahu.eat)
console.log(rahu.walk)
console.log(rahu.talk)

*/
//class declaration
/*class Mobile {
constructor()
{
//Instance Mem
this.a=12
this.show=function ()
{
return "Instance Member";
};
}
//prototype member
display()
{
return "prototype member"
}
}
let nokia = new Mobile()
console.log(nokia.a)
console.log(nokia.show())
console.log(nokia.display)
*/

//default constuctor
/*class Mobile {
display()
{
return "prototype member"
}
}

let nokia = new Mobile()
console.log(nokia.display)
*/

/*class Father{
showFMoney()
{
return "fAther money"
}
}
class son extends Father{
showSMoney(){
return "son money"
}
}
let s = new son()
console.log(s.showFMoney())
console.log(s.showSMoney())
*/

/*
//super
class Father {
  constructor(money) {
    this.Fmoney = money;
  }

  showFMoney() {
    return this.Fmoney + " Father money";
  }
}

class Son extends Father {
  constructor(money) {
    super(money); // Call the constructor of the parent class
  }

  showSMoney() {
    return "Son money";
  }
}

let s = new Son(10000);
console.log(s.showFMoney()); // Output: 10000 Father money
console.log(s.showSMoney()); // Output: Son money

*/
// method oweloding
/*class Father {
  show() {
    return "Super class";
  }
}

class Son extends Father {
  show() {
    return "Sub class";
  }
}

let s = new Son();
console.log(s.show());
*/
/*
//static method
class mobile {
static disp(){
return "static method"
}
}
console.log(mobile.disp())
*/

//There are 5 movie tickets each rs 200 and if you buy 5 tickets get discount rs. 50each 
// there are 5 movie tickets each ru. 200 and if you buy less than 5 ticket get discount ru. 0 each
/*let noOfTicket = 5;
let buyTicket = 3;
let eachPrice = 200;
let disPrice = 50;

function ticket(strings, ...values) {
  if (values[2] < 5) {
    values[3] = 0;
  }
  return `${strings[0]} ${values[0]} ${strings[1]} ${values[1]} ${strings[2]} ${values[2]} ${strings[3]} ${values[3]} ${strings[4]}`;
}

console.log(ticket`there are ${noOfTicket} movie tickets each rs. ${eachPrice} and if you buy ${buyTicket} ticket get discount ru ${disPrice} each`);

*/
/* let tarikh = new Date();
console.log(tarikh);

tarikh.setHours(22);
console.log(tarikh);

tarikh.setMinutes(56);
console.log(tarikh);

tarikh.setSeconds(40);
console.log(tarikh);

tarikh.setDate(26);
console.log(tarikh);

tarikh.setMonth(11);
console.log(tarikh);

tarikh.setFullYear(2022);
console.log(tarikh);

tarikh.setFullYear(2022, 3, 15);
console.log(tarikh);
*/

/*let tarikh = new Date();
console.log(tarikh);

tarikh.getHours();
console.log(tarikh);

tarikh.getMinutes();
console.log(tarikh);

tarikh.getSeconds();
console.log(tarikh);

tarikh.getDate();
console.log(tarikh);

tarikh.getMonth();
console.log(tarikh);

tarikh.getFullYear();
console.log(tarikh);

tarikh.getFullYear();
console.log(tarikh);
*/

/*let tarikh = new Date();
let month = tarikh.getMonth();
let day = tarikh.getDay();
console.log(getMonthName(month));
console.log(getDayName(day));

function getMonthName(monthnumber) {
  let monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return monthname[monthnumber];
}

function getDayName(daynumber) {
  let dayname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayname[daynumber];
}
*/
/*let tarikh = new Date();
console.log(formatDate(tarikh))
function formatDate(pd){
let date = pd.getDate()
let month = pd.getMonth()
month++
let year = pd.getFullYear()
return date + " - " + month + " - " +year
}
*/

let tarikh = new Date();
console.log(tarikh.toString())
console.log(tarikh.toUTCString())
console.log(tarikh.toString())





















