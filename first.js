
/*~/Documents
node first.js*/
/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (userInput) => {
   const n= parseInt(userInput);
  console.log('You entered: ' + userInput);
  [
/*let d=n%10;
if(d%3==0)
{
console.log("div")
}a = parseFloat(a);
b = parseFloat(b);
else
{
console.log("not div")
}*/

/*let a=n*100;
if(n>1000)
{
let d=(a*10)/100;
let t=a-d;
console.log("T:",t);
}
else
{
console.log("no bonus");
}*/

//rl.close();
//});




/*let a=57;
let b=76;

console.log("A+B=",a+b)*/

 
/*let a=45;
let b=10;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a%b=",a%b);
console.log("a*b=",a*b);
console.log("a**b=",a**b);
console.log(++a);
console.log(a++);
console.log(a--);*/


/*let a=prompt("valid age");
a=number.parseInt(a);
if(a<0)
{
alert("hiii");
}
else if(a<9)
{
alert("hello");
}
else
{
alert("bye");
}*/

//ternary
/*let age=19
let a=age>18 ? "you can drive" : "you cannot drive"
console.log(a)

//for in loop
let obj={
harry:90,
shubh:45,
shivika:59,
riti:57,
shiv:23,
}
for(let a in obj){
console.log("mark of " + a + "are"+obj[a])
}

//for of loop
for(let b of "Harry")
{
console.log(b)
}

//while loop
let n=prompt("enter the vavlue of n")
n=Number.parseInt(n)

let i=0;
while(i<n)
{
console.log(i)
i++;
}

//do loop
let i=10;
do{
console.log(i)
i++;
}
while(i<n)
*/
/*let a=5;
let b=5;
if(a>=b)
{
console.log("A is greater");
}
else
{
console.log("b is greater");
}*/
/*let a=0;
if(a==0)
{
console.log("MON")
}
else if (a==1)
{
console.log("Tue")
}
else
{
console.log("sun");
}*/

/*let sp=100
let cp=500
if(sp>cp)
{
console.log(" sub:",sp-cp)
}
else
{
console.log("invalide")
}*/
/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}
);

rl.question('Enter something: ', (userInput) => {
   const p= parseInt(userInput);
   const c= parseInt(userInput);
   const m= parseInt(userInput);
   const b= parseInt(userInput);
   const g= parseInt(userInput);
  console.log('You entered: ' + userInput);

	let S=(p+c+m+b+g)/500;
	console.log("TOTAL:",S);
	if(S>=90)
   {
      console.log("Grade A");
   }
   else if (S>=80)
   {
  console.log("Grade b");
   }
   else if (S>=70)
   {
       console.log("Grade c");
   }
   else if (S>=60)
   {
       console.log("Grade d");
   }
   else if (S>=40)
   {
 	console.log("Grade e");
   }
   else if (S<40)
   {
       console.log("Grade f");
   }
   else
   {
      console.log("faile");
   }
rl.close();
});*/
/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (userInput) => {
  const a = parseInt(userInput);
  rl.question('Enter another number: ', (userInput) => {
    const b = parseInt(userInput);
    rl.question('Enter one more number: ', (userInput) => {
      const c = parseInt(userInput);

      console.log('You entered: ' + a, b, c);

      let m, sm;

      if (a > b) {
        m = a;
        sm = b;
      } else {
        m = b;
        sm = a;
      }

      if (m > c) {
        if (sm > c) {
          console.log("Second largest:", sm);
        } else {
          console.log("Third largest:", c);
        }
      } else {
        console.log("Largest:", m);
      }

      rl.close();
    });
  });
});*/

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a, b, c, d, m, sm, m1, sm1;

rl.question('a: ', (userInput) => {
  a = parseInt(userInput);
  rl.question('b: ', (userInput) => {
    b = parseInt(userInput);
    rl.question('c: ', (userInput) => {
      c = parseInt(userInput);
      rl.question('d: ', (userInput) => {
        d = parseInt(userInput);

        if (a > b) {
          m = a;
          sm = b;
        } else {
          m = b;
          sm = a;
        }

        if (c > d) {
          m1 = c;
          sm1 = d;
        } else {
          m1 = d;
          sm1 = c;
        }

        if (m > m1) {
          if (m1 > sm) {
            console.log("m1: " + m1);
          } else {
            console.log("sm: " + sm);
          }
        } else if (m > sm1) {
          console.log("m: " + m);
        } else {
          console.log("sm1: " + sm1);
        }

        rl.close();
      });
    });
  });
});*/
/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a, b, c, d, e, m1, m2, R;

rl.question('a: ', (userInput) => {
  a = parseInt(userInput);
  rl.question('b: ', (userInput) => {
    b = parseInt(userInput);
    rl.question('c: ', (userInput) => {
      c = parseInt(userInput);
      rl.question('d: ', (userInput) => {
        d = parseInt(userInput);
        rl.question('e: ', (userInput) => {
          e = parseInt(userInput);

          if (a > b) {
            m1 = a;
          } else {
            m1 = b;
          }

          if (c > d) {
            m2 = c;
          } else {d
            m2 = d;
          }

          if (m1 > m2) {
            R = m1;
          } else {
            R = m2;
          }

          if (R > e) {
            console.log("R: " + R);
          } else {
            console.log("e: " + e);
          }

          rl.close();
        });
      });
    });
  });
});*/
/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (userInput) => {
   const n= parseInt(userInput);
  console.log('You entered: ' + userInput);
  
  
 /* for(let i=0;i<n;i++)
  {
  console.log("I:",i);
  }*/
/* let c=0,s=0;
  for(let i=0;i<n;i++)
  {
  s=s+i;
  c++;
  }
  console.log("TWO:",s);
   console.log("TWO:",c);
   
  rl.close();
        });*/
/*const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('a: ', (userInput) => {
  const a = parseInt(userInput); // Parse user input to an integer

  rl.question('b: ', (userInput) => {
    const b = parseInt(userInput);

    rl.question('c: ', (userInput) => {
      const c = parseInt(userInput);

      rl.question('d: ', (userInput) => {
        const d = parseInt(userInput);

        
          for (let i = a; i < b; i++) {
            if (i % c === 0 && i % d !== 0) {
              console.log("E:", i);
            }
          }

          rl.close();
        });
      });
    });
  });*/
  
/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (userInput) => {
  let n = parseInt(userInput);                 //   use for let because n is not constant
  console.log('You entered: ' + userInput);
  let r = 0;
  
  while (n > 0) {
    let re = n % 10;
    r = r * 10 + re;
    n = Math.floor(n / 10); // Use Math.floor to perform integer division
  }
  
  console.log("Reversed number:", r);
  
  rl.close();
});*/

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (userInput) => {
  const n = parseInt(userInput);

  if (isNaN(n)) {
    console.log('Invalid input. Please enter a valid number.');
  } else {
    let binary = '';
    let i = n;

    while (i > 0) {
      const r = i % 2;
      binary = r.toString() + binary;
      i = Math.floor(i / 2);
    }

    console.log("Binary: " + binary);
  }

  rl.close();
});*/


/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (userInput) => {
  let a = parseInt(userInput);
  rl.question('Enter a number: ', (userInput) => {
  let b = parseInt(userInput);
  
  let p=a*b;
  let r=a%b;
  while(r>0)
  {
  a=b;
  b=r;
  r=a%b;
  }
  let hcf=b;
  let lcm=p/hcf;
  console.log("HL:",hcf);
  console.log("LM:",lcm);
rl.close();
});
});*/


/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (userInput) => {
   const n= parseInt(userInput);
  console.log('You entered: ' + userInput);
//1  
  /*for(let i=1;i<=n;i++)
  {
  for(let j=1;j<=i;j++)
  {
  process.stdout.write('* ');
  }
  console.log();
  }*/
  
//2  
 /* for(let i=1;i<=n;i++)
  {
  for(let j=1;j<=5;j++)
  {
  console.log(i,j);
  }
  console.log();
  }*/
  
 //3
 /*let m=1;
 for(let i=1;i<=n;i++)
 {
 for(let j=1;j<=i;j++)
 {
 console.log(m);
 m++;
  }
  console.log();
  }*/
  
//4
/*for(let i=1;i<=n;i++)
{
for(let j=1;j<=i;j++)
{
if(j==1)
{
process.stdout.write('1 ')
}
else
{
process.stdout.write('0 ')
}
}
console.log()
}*/

//5
/*for(let i=n;i>0;i--)
{
for(let j=1;j<=i;j++)
{
process.stdout.write('* ')
}
console.log()
}*/

//6

/*for(let i=1;i<=n;i++)d
{
for(let j=1;j<=(n-i);j++)
{
process.stdout.write('  ');
}
for(let k=1;k<=i;k++)
{
process.stdout.write('* ');
}
console.log();
}*/

//7
/*for(let i=1;i<=n;i++)
{
for(let j=1;j<=i;j++)
{
if(j%2==0)
{
process.stdout.write('0 ')
}
else
{
process.stdout.write('1 ')
}
}
console.log()
}*/

//8
/*console.log('1')

for(let i=2;i<=n;i++)
{
for(let j=1;j<=i+1;j++)
{
if(j===1 || j===i+1)
{
process.stdout.write('1 ')
}    at /home/b40/Documents/first.js:713:24
    at Interface._onLine (readline.js:327:5)
    at Interface._line (readline.js:658:8)
    at Interface._ttyWrite (readline.js:1003:14)
    at ReadStream.onkeypress (readline.js:205:10)
    at ReadStream.emit (events.js:314:20)
    at emitKeys (internal/readline/utils.js:335:14)
    at emitKeys.next (<anonymous>)
    at ReadStream.onData (readline.js:1137:36)
    at ReadStream.emit (events.js:314:20)

else
{
process.stdout.write('0 ')
}
}
console.log()
}*/

//9
/*let k=1;
for(let i=n;i>0;i--)
{
for(let j=1;j<=i;j++)
{
process.stdout.write(i.toString());
}
console.log()
k++;
}*/

//10
/*for(let i=1;i<=n;i++)
{
for(let j=1;j<=i;j++)
{
process.stdout.write('* ')
}
console.log()
}
for(let k=n-1;k>0;k--)
{
for(let j=1;j<=k;j++)
{
process.stdout.write('* ')
}
console.log()
}*/

//11
/*for(let i=1;i<=n;i++)
{
for(let j=1;j<=(n-i);j++)
{
process.stdout.write('  ')
}
if(i===1 || i===n)
{
for(let k=1;k<=i;k++)
{
process.stdout.write('* ')
}
}
else
{
let a=(2*i-3)
process.stdout.write('*')
for(let l=1;l<=a;l++)
{
process.stdout.write(' ');
}
process.stdout.write('* ');
}
console.log()
}*/

//12

 /* let A = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      const cube = Math.pow(i, 3);
      process.stdout.write(cube.toString() + ' ');
    }
    console.log();
  }*/

//13

/*for(let i=1;i<=n;i++)
{
for(let j=1;j<=(n-i);j++)
{
process.stdout.write(' ')
}
for(let k=1;k<=i;k++)
{
process.stdout.write('* ')
}
console.log()
}
for(let l=n-1;l>0;l--)
{
for(let m=1;m<=n-l;m++)
{
process.stdout.write(' ')
}
for(let p=1;p<=l;p++)
{
process.stdout.write('* ')
}
console.log()
}
rl.close();
});*/
//14
/*
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
//15
/*for(let i=n;i>0;i--)
{
for(let j=1;j<=i;j++)
{
if(j===i)
{
process.stdout.write(j.toString()+' ')
}
else
{
process.stdout.write(j.toString()+'* ')
}
}
console.log()
}*/

//16
/*for(let i=1;i<=n;i++)
{
for(let j=1;j<=n;j++)
{
if(j<=n-i)
{
process.stdout.write('  ')
}
else
{
if(j%2===0)
{
process.stdout.write('1 ')
}
else
{
process.stdout.write('0 ')
}
}
}
console.log()
}*/

//18
/*let a=1;
for(let i=1;i<=n;i++)
{
for(let j=1;j<=n-i;j++)
{
      process.stdout.write(' ');
}
for(let k=1;k<=a;k++)
{
process.stdout.write(i.toString())
}
console.log()
a=a+2;
}*/

//19
/*let a=1;

console.log('0 ')
console.log()
for(let i=1;i<=n;i++)
{
for(j=0;j<=i;j++)
{
if(j===0)
{
a=Math.pow(2,i)
process.stdout.write(a.toString()+' ')
}
else
{
let b=a*2;
process.stdout.write(b.toString()+' ')
a=b
}
}
console.log()
}*/

//20
/*for(let i=1;i<=n;i++)
{
for(let j=1;j<=n-i;j++)
{
process.stdout.write('  ')
}
for(let m=1;m<=i;m++)
{
process.stdout.write('* ')
}
console.log()
}
for(let k=n-1;k>0;k--)
{
for(let j=1;j<=n-k;j++)
{
process.stdout.write('  ')
}
for(let l=1;l<=k;l++)
{
process.stdout.write('* ')
}
console.log()
} */

//21
/*for(let i=n;i>0;i--)
{
for(let j=1;j<=n-i;j++)
{
process.stdout.write('  ')
}
for(let m=1;m<=i;m++)
{
process.stdout.write('* ')
}
console.log()
}
for(let k=1;k<=n;k++)
{
for(let j=1;j<=n-k;j++)
{
process.stdout.write('  ')
}
for(let l=1;l<=k;l++)
{
process.stdout.write('* ')
}
console.log()
} */

//22
/*for(let i=n;i>0;i--)
{
for(let j=1;j<=n-i;j++)
{
process.stdout.write('  ')
}
for(let m=1;m<=i;m++)
{
process.stdout.write('* ')
}
console.log()
}
for(let k=1;k<=n;k++)
{
  for(let j=1;j<=n-k;j++)
  {
  process.stdout.write('  ')
  }
  for(let l=1;l<=k;l++)
  {
  process.stdout.write('* ')
  }
  console.log()
  }*/
  
  
//23
/*for(let i=n;i>0;i--)
{
for(let m=1;m<=i;m++)
{
process.stdout.write('* ')d
}
console.log()
}
for(let k=1;k<=n;k++)
{
for(let l=1;l<=k;l++)
{
process.stdout.write('* ')
}
console.log()
}*/

//24

/*for(let i=1;i<=n;i++)
{
for(let j=1;j<=n-i;j++)
{
process.stdout.write(' ')
}
for(let k=1;k<=i;k++)
{
process.stdout.write(k+' ')
}
console.log()
}d
let p = n - 1;
for (let K = p; K > 0; K--) { 
    for (let j = 1; j <= n - K; j++) {
        process.stdout.write(' ');
    }
    for (let l = 1; l <= K; l++) {
        process.stdout.write(l + ' ');
    }
    console.log();
}*/

//25
/*let s=1
for(let i=n;i>0;i--)
{
for(let j=1;j<i;j++)
{
process.stdout.write('* ')
}
for(let m=1;m<=s;m++)
{
process.stdout.write('0 ')
}
let p=1
for(let k=1;k<p;k++)
{
process.stdout.write('* ')
}
console.log()
s=s+2
}*/
//26
/*for(let i=n;i>0;i--)
{
for(let j=1;j<=i;j++)
{
process.stdout.write('* ')
}
for(let k=n-i;k>0;k--)
{
process.stdout.write('    ')
}
let p=i;
for(let l=1;l<=p;l++)
{
process.stdout.write('* ')
}
console.log()
}*/

//27
/*let a=1
let m=1
for(let i=n;i>0;i--)
{
for(let j=1;j<=n-i;j++)
{
process.stdout.write(' ')d
}d
for(let k=n;k>=a;k--)
{
process.stdout.write(k+' ')
}
let p=i
for(let l=1;l<=n-i;l++)
{
process.stdout.write('  ')
}
for(let b=m;b<=n;b++)
{
process.stdout.write(b+' ')
}
console.log()
m++
a++
}*/
//28
/*let s=1
for(let i=n;i>0;i--)
{
for(let j=1;j<i;j++)
{
process.stdout.write('0 ')
}
for(let m=1;m<=s;m++)
{
process.stdout.write('1 ')
}
let p=i
for(let k=1;k<p;k++)
{
process.stdout.write('0 ')
}
console.log()
s=s+2
}*/

//29
/*let a=10
let s=0
for(let i=n;i>1;i--)
{
s=s+i
}
s=s+a
a=s
for(let j=1;j<=n;j++)
{
for(let k=1;k<=j;k++)
{
let p=Math.pow(a,2)
let c=p+1
process.stdout.write(c+' ')
a=a-1
}
console.log()
}*/
//30
/*for(let i=n;i>0;i--)
{
for(let j=1;j<=n-i;j++)
{
process.stdout.write(' ')
}
let a=n;
for(let k=i;k>0;k--)
{
if(k===i)
{
process.stdout.write(i+' ')
}
else
{
process.stdout.write(a+' ')
a=a-1
}
}
console.log()
}
 for(let p=1;p<=n;p++)
	   {
	   for(let l=1;l<=n-p;l++)
		  {
		   	process.stdout.write(' ')
		 }
		let c=n;
		   for(let m=1;m<=p;m++)
		   {
		   	if(m==1)
		   	{
		   	process.stdout.write(p+' ')
		   	}else
		   	{
		   		process.stdout.write(c+' ')
		   		c=c-1;
		   	}
		   }
	   	 console.log()
	   
	   }
rl.close();
});*/
//31
/*
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
		
  rl.close();
});	*/		
//32
/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("enter the n:"));

 for (let i = 1; i <= n; i++) {
    
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(' ');
    }

    
    for (let k = 1; k <= i; k++) {
      process.stdout.write('* ');
    }

    
    for (let l = 1; l <= n - i; l++) {
      process.stdout.write('  ');
    }

    
    for (let m = 1; m <= i; m++) {
      process.stdout.write('* ');
    }

    
    console.log();
  }

  
  for (let p = 1; p < n - i; p++) {
    for (let j = 1; j <= n * 2; j++) {
      process.stdout.write('* ');
    }
    console.log();
  }

  let s = n * 2;
  for (let k = s; k > 0; k--) {
    for (let l = 1; l <= s - k; l++) {
      process.stdout.write('  ');
    }

    for (let b = 1; b <= k; b++) {
      process.stdout.write('* ');
    }

    
    console.log();
  }
  

  */
/*

//33
const prompt = require("prompt-sync")();
let m = parseInt(prompt("enter the m:"));
let N = parseInt(prompt("enter the n:"));

        for (let i = 1; i <= m; i++) {
            if (i % 2 === 0) {
                for (let x = 1; x <= N; x++) {
                    for (let j = 1; j <= N - x; j++) {
                        process.stdout.write(" ");
                    }
                    for (let k = 1; k <= 5; k++) {
                        process.stdout.write("*");
                    }
                    console.log();
                }
            } else {
                for (let k = 1; k <= N; k++) {
                    for (let p = 0; p < k; p++) {
                        process.stdout.write(" ");
                    }
                    for (let l = 1; l <= 5; l++) {
                        process.stdout.write("*");
                    }
                    console.log();
                }
            }
        }
 */



//Holo pattern

/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("enter the n:"));
for(let i=1;i<=n;i++)
{
	for(let j=1;j<=n-i;j++)
	{

		console.log("  ")
	}
	if(i==1 || i==n)
	{

		console.log("* "*i)
	}
	else
	{
		console.log("*"+ (2*i-3)*" "+ " ")
	}
}
*/

/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n: "));

for (let i = 1; i <= n; i++) {
    
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  "); 
    }

    
    if (i === 1 || i === n) {
        for (let k = 1; k <= i; k++) {
            process.stdout.write("* ");
        }
    } else {
        process.stdout.write("*"); 

        
        for (let k = 1; k <= (2 * i - 3); k++) {
            process.stdout.write(" ");
        }

        process.stdout.write("*"); 
    }

    console.log(); 
}
*/

/*
const prompt= require("prompt-sync")();
let n = parseInt(prompt("enter the n:"));
for(let i=1;i<=n;i++)
{
if(i===1 || i===n)
{
for(let j=1;j<=n;j++)
{
process.stdout.write("* ")
}
}
else
{
process.stdout.write("*")
for(let k=1;k<=2*(n-2);k++)
{
process.stdout.write("  ")
}
process.stdout.write("*")
}
console.log()
}

for(let i=1;i<=n-2;i++) 
{
process.stdout.write("*");

for(j=1;j<=2*(n-2);j++)
{
process.stdout.write("  ")
}
process.stdout.write("*");
    console.log();

}
for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) {
        for (let j = 1; j <= n; j++) {
            process.stdout.write("* ");
        }
    } else {
        process.stdout.write("*");
        for (let k = 1; k <= 2 * (n - 2); k++) {
            process.stdout.write("  ");
        }
        process.stdout.write("* ");
    }
    console.log();
}*/




/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n: "));

// Print the top section
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

// Print the middle section
for (let i = 1; i <= n - 2; i++) {
    for (let j = 1; j <= n; j++) {
        if (j == 1 || j == n) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}

// Print the bottom section
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ");
    }
    console.log();
}*/






//Function

  
/*function onePlusAvg(x,y) 
{
return 1+(x+y)/2
}
let a=2;
let b=4;
let c=6;

console.log("Avarage:",onePlusAvg(a,b));
console.log("Avarage:",onePlusAvg(b,c));
console.log("Avarage:",onePlusAvg(c,a));
*/
/*function great()
{
console.log("gm");
console.log("HRU");
}
function main()
{
great();
great();
great();

}
main();*/
/*function england()
{
console.log("u r england");
}
function australia()
{
console.log("u r ausralia");
}
function india()
{
console.log("u r india");
}
 function countrys()
{
england();
}
countrys();*/

//.toUpperCase
/*function passMessage()
{
return " I am pranu "
}
const mess = passMessage();
console.log(mess.toUpperCase());
*/

//.toLowerCase
/*function passMessage()
{
return " I am pranu "
}
const mess = passMessage();
console.log(mess.toLowerCase());
*/

//connect
/*function pass()
{
return" I am pranu "
}
const mess = pass()
const newM = mess + " she is very beutiful"
console.log(newM)
*/
//function with one parameter

/*function pass(name,message)
{
return "I am pranu " + name + " i like it" + message
}
console.log(pass('she is beutiful', 'she is good girl'));
console.log(pass('she is awesome ', 'she is good lady'));

*/

//function default value

/*function pass(name,message="pgl")
{
return "I am pranu " + name + " i like it" + message
}
console.log(pass('she is beutiful', 'she is good girl'));
console.log(pass('she is awesome ', '-she is good lady'));
*/

//argument keyword=object    use .leghth


/*function sum()
{
console.log(arguments)
}
sum(1,2,3,4,5,6,7)*/
/*function sum()
{
console.log(arguments.length)
}
sum(1,2,3,4,5,6,7)*/

/*function sum()
{
let s=0
for(let i=0;i<arguments.length-1;i++)
{
s=s+arguments[i]
}
return s
}
const t =sum(1,2,3,4,5,6,7,8,9,10)
console.log(t)*/

//Arrow function  => "fat arrow"
//1
/*const s =function(x)
{
return x*x
}
console.log(s(2))

//2
const s1 =(x) => x*x
console.log(s1(3))
//3
const s2 = (x) =>//{ - use kiya to return lagana padata he
{
console.log("input>",x)
return x*x
};
console.log(s2(4))
*/

//Anonymous function-khudaki idity nhi hoti


/*function sumArray(arr, size) {
  let s = 0;
  for (let i = 0; i < size; i++) {
    s = s + arr[i];
  }
  return s;
}

function main() {
  let arr = [8, 2, 3, 5, 7];
  let size = arr.length;
  let result = sumArray(arr, size);
  console.log("Sum of array elements:", result);
}

main();

*/

/*function InRange(u,l,n)
{
if(n>=l && n<=u)
{
return 1
}
else
{
return 0 
}
}
const prompt = require("prompt-sync")();
let upper = parseInt(prompt("enter the upper"))

let lower = parseInt(prompt("enter the lower"))

let num = parseInt(prompt("enter the num"))
if(InRange(upper,lower,num))
{
console.log(num)
}
else
{
console.log(num)
}*/

/*function printEvenNumbers( arr, size)
{
console.log("even number in the array:")
for(let i=0;i<size;i++)
{
if(arr[i]%2===0)
{
console.log(arr[i])
}
}
console.log()
}

let arr=[1,2,3,4,5,6,7,8,9]
let size=arr.length
printEvenNumbers(arr,size)
*/

/*function factorial(n)
{
if(n===0 || n===1)
{
return 1
}
else
{
return n*factorial(n-1)
}
}
const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter the num:"))
if(num<0)
{
console.log("factorial is not defined negative number.")
}
else
{
const result= factorial(num)
    console.log(result,num);


}*/

/*function Prime(n)
{
if(n<=1)
{
return 0
}
for(let i=2;i*i<=n;i++)
{
if(n%i===0)
{
return 0
}
}
return 1
}
const prompt=require("prompt-sync")()
let num= parseInt(prompt("enter the num"))
if(Prime(num))
{
console.log("prime")
}
else
{
console.log("not prime")
}*/

/*function perfect(n)
{
if(n<=0)
{
return 0
}
let s=0
for(let i=0;i<n/2;i++)
{
if(n%i===0)
{
s=s+i
}
}
return s===n
}

const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the num"))
if(perfect(n))
{
console.log("perfect:")
}
else
{
console.log("not perfect:")
}*/



//Array
/*var stu =["rahu,pranu"]
console.log(stu)
console.log(typeof(stu))*/



//declaration
/*var grr=[]
grr[0]="rahul";
grr[1]="pranu";
grr[2]=22;
console.log(grr)*/


//declaration and inilazation

/*var grr=["rahul",22,"ram"]
console.log(grr[1])*/

/*var a=10,b=20,c=30;
var grr=[a,b,c]
console.log(grr)*/



//modifying array ele
/*var geek =["rahul","raju",23]
var geeky=geek
console.log(geeky+ " ")
 console.log(geek+ " ")
geeky[0]="rohit"
console.log(geek+ "  ")
console.log(geeky+ " ")
*/


// removing array ele
/*var geek = ["rahul","ram",23]
delete geek[0]
console.log(geek)
console.log(geek[0])//undifine*/

//length property
/*let geek = ["rahul","ram",56]
console.log(geek.length)*/


//for loop
/*let geek =["rahul","ram",43,"raj"]
for(let i=0;i<4;i++)
{
console.log(geek[i])
}*/


//forEach loop
/*let geek = ["rahul","ram",43,"raj"]
geek.forEach (function(name,i)
{
console.log(name + " " + i)
})*/


//for of loop
/*let geek =["rahul" ,"ram",43,"raj"]
for(let i of geek)
{
console.log(i)
}*/

//input from user in array

//define
/*const prompt = require("prompt-sync")()
let m =prompt("entet the num")
let geek = []
//input
for(let i=0;i<=m;i++)
{
 geek[i]=prompt("enter the name:")
 }
//display
for(let j=0;j<=m;j++)
{
console.log(geek[j])
}*/



//1
/*let arr=[2,4,6,8,1]
console.log(arr[1])*/

//2
/*let arr = [2, 4, 5, 7, 1];
arr[4] = 100;
arr[1] = 3;
console.log(arr[1]);
*/

//3
/*let arr= [1.2,2.3,3.4,4.5]
console.log(arr[2])*/

//4
/*let arr =['p','r','a','n','u']
console.log(arr[2])*/

//5
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr =[]
for(let i=0;i<=n;i++)
{
arr[i]=prompt("enter the num:")
}
for(let j=0;j<=n;j++)
{
console.log(arr[j])
}*/

//6
/*let marks=[95,90,31,25,100,50,15,89,97,35]
for(let i=0;i<10;i++)
{
if(marks[i]<35)
{
console.log("fail: " + marks[i])
}
else
{
console.log("pass:" + marks[i])
}
}*/

//7
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr = []
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the n:")
}
for(let i=n-1;i>=0;i--)
{
console.log(arr[i])
}
*/

//8
/*const size =15
 let b=new Array(size)
 console.log(size)
*/

//9
/*let arr = [1, 1, 2, 1, 1];

console.log(arr.indexOf(1));
console.log(arr.indexOf(2));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

//10
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr = []
let s=0
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the num:")
}
for(let i=0;i<n;i++)
{
s=s+arr[i]
}
console.log(s)
*/

/*const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of n:"));
let arr = [];

// Input array elements
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("Enter number " + (i + 1) + ": "));
}

// Print array elements on the same line
console.log(arr.join(""));
*/

//11
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr =[]
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the num:")
}
for(let i=0;i<n;i++)
{
console.log(arr[i])
}*/

//12
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr =[]
let p=1
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the n:")
}
for(let i=0;i<n;i++)
{
p=p*arr[i]
}
console.log(p)*/

//13
/*let arr = [1, 4, 2, 8, 19, 5, 12];
let max = -1, p = 1;

for (let i = 0; i < arr.length; i++) {
    p *= arr[i];
}

console.log(p);*/

//14
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr =[]
let max = Number.INT_MIN
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the n:")
}
for(let i=0;i<n;i++)
{
if(max<arr[i])
{
max=arr[i]
}
}
console.log(max)
*/
//15
/*function fun(x) {
    let temp = x[0];
    x[0] = x[1];
    x[1] = temp;
    return;
}

function main() {
    let arr = [2, 9];
    console.log(arr[0], arr[1]);
    fun(arr);
    console.log(arr[0], arr[1]);
}

main();*/

//16
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr =[]
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the n:")
}
for(let i=0;i<n;i++)
{
if(i%2!=0)
{
arr[i]=arr[i]*2

}
else
{
arr[i]=arr[i]+2
}
}
for(let i=0;i<n;i++)
{
console.log(arr[i])
}
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        console.log("even:" + arr[i]);
    } else {
        console.log("odd:" + arr[i]);
    }
}*/


//17
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr =[]
let c=0
let x=3
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the n:")
}
for(let i=0;i<n;i++)
{
if(arr[i]>=x)
{
c++
}
console.log(c)
}
*/

//18
/*const prompt = require("prompt-sync")()
let n = parseInt(prompt("enter the n:"))
let arr =[]
let e=0
let o=0
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the n:")
}
for(let i=0;i<n;i++)
{
if(i%2===0)
{
e=e+arr[i]
}
else
{
o=o-arr[i]
}

}
console.log(e)
console.log(o)
console.log(e-o)*/

//19
/*let arr =[1,2,3,4,5,6,7,8]
let t=0
let o=12
for(let i=0;i<=7;i++)
{
for(let j=i+1;j<=7;j++)
{
if(arr[i]+arr[j]===o)
{
t++
console.log(arr[i],arr[j])
}
}
}
console.log(t)

*/
//20
/*let arr=[1,2,3,4,5,6,7,8]
let t=0
let o=12
for(let i=0;i<=7;i++)
{
for(let j=i+1;j<=7;j++)
		{
			for(let k=j+1;k<=7;k++)
			{
				if(arr[i]+arr[j]+arr[k]==o)
		{
			t++;
console.log(arr[i],arr[j],arr[k])
}
}
}
}
console.log(t)*/

//21
/*let arr=[1,2,11,-19,5,12]
let max=Number.MIN_VALUE
let smax=Number.MIN_VALUE
for(let i=0;i<=arr.length;i++)
{
if(max<arr[i])
{
smax=max
max=arr[i]
}
else if(smax<arr[i] && max!=arr[i])
{
smax=arr[i]
}
}
console.log(smax)*/

//22
/*
let arr=[1,2,3,4,5,6,7]
let brr=[]
for(let i=0;i<=6;i++)
{
brr[i]=arr[6-i]
}
for(let i=0;i<=6;i++)
{
console.log(brr[i])
}
*/

//23
/*function reverse(arr){
let i=0
let j=arr.length-1
while(i<j)
{
let temp=arr[i]
arr[i]=arr[j]
arr[j]=temp
i++
j--
}
}
let arr= [1,2,3,4,5,6,7]
reverse(arr)
for(let i=0;i<=6;i++)
{
console.log(arr[i])
}*/

//24
/*function rev(arr,a,b)
{
for(let i=a,j=b;i<j;i++,j--)
{
let temp=arr[i]
arr[i]=arr[j]
arr[j]=temp
}
}
let arr =[1,2,34,5,6,7]
rev(arr,2,5)
for(let i=0;i<6;i++)
{
console.log(arr[i])
}*/

//25

/*function rev(arr,a,b)
{
for(let i=a,j=b;i<j;i++,j--)
{
let temp=arr[i]
arr[i]=arr[j]
arr[j]=temp
}
}
let arr=[1,2,3,4,5,6,7]
let n=7
let k=5
k=k%n
rev(arr,0,n-1)
rev(arr,0,k-1)
rev(arr,k,n-1)
for(let i=0;i<=6;i++)
{
console.log(arr[i])
}
*/

//26
/*let arr=[1,2,3,4,5,6,7]
let x=4
let idx=-1
let flag=false;

for(let i=0;i<=6;i++)
{
if(arr[i]===x)
flag=true
idx=i
break
}


if(flag===false)
{
console.log("not present in array:" + x)
}
else
{
console.log("present in array:" + x + "  " +idx)
}
*/

//27
/*let arr =[2,2,3,7,2,6,7]
for(let i=0;i<=6;i++)
{
for(let j=i+1;j<=6;j++)
{
if(arr[i]===arr[j])
{
console.log("duplicate:" + arr[i])
break
}
}

}*/

/*let arr=[1,3,6,1,1,2,3]
for(let i=0;i<=6;i++)
{
let flag =false
for(let j=i+1;j<=6;j++)
{
if(arr[i]===arr[j])
{
flag =true
}
}
if(flag===false)
{
console.log(arr[i])
break
}
}*/

//Assi-2
//1
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
let k=1
for(let i=0;i<n;i++)
{
arr[i]=k
k++
}
for(let j=0;j<n;j++)
{
console.log(arr[j])
}*/

//2
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
let c=0
let k=0
for(let i=0;i<=n*2;i++)
{
if(c%2===0)
{
arr[k]=c
k++
c++
}
else
{
c++
}
}
for(let i=0;i<=n;i++)
{
console.log(arr[i])
}
*/
//3
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
let c=1
let k=0
for(let i=0;i<=n*2;i++)
{
if(c%2!==0)
{
arr[k]=c
k++
c++
}
else
{
c++
}
}
for(let i=0;i<=n;i++)
{
console.log(arr[i])
}
*/

//4
/*let arr=[10]
let p=1
for(let i=0;i<10;i++)
{
let c=3
c=c*p
arr[i]=c
p++
}
for(let j=0;j<10;j++)
{
console.log(arr[j])
}
*/

//5
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
let k=1
for(let i=0;i<n;i++)
{
arr[i]=k
k++
}
for(let a=n-1;a>=0;a--)
{
console.log(arr[a])
}*/

//6
/*const prompt = require("prompt-sync")()
let c= parseInt(prompt("enter the n:"))
let arr=[1000]
for(let i=1;i<=10;i++)
{
l=c*i
arr[i]=l
}
for(let j=1;j<=10;j++)
{
console.log(arr[j])
}*/

//7
/*//positive-neg
const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
for(let i=0;i<n;i++)
{

let e= parseInt(prompt("enter the n:"))
arr[i]=e
}
let c=0,c1=0
for(let j=0;j<n;j++)
{
if(arr[j]>=0)
{
c++
}
else
{
c1++
}
}
console.log(c + " " +c1)
*/

//8
/*const prompt = require("prompt-sync")()
let arr =[1,2,3,4,5,6,7,8]
const size = arr.length
let c =0
console.log("size:" + size)
let num= parseInt(prompt("enter the n:"))
for(let i=0;i<size;i++)
{
if(arr[i]===num)
{
c++
}
}
if(c>0)
{
console.log("exist:" )
}
else
{
console.log("invalid")
}
*/
//9
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
for(let i=0;i<n;i++)
{
let e= parseInt(prompt("enter the n:"))
arr[i]=e
}
let c=0
for(let j=0;j<n;j++)
{
if(arr[j+1]-arr[j]===1)
{
c++
}
}
if(c===n-1)
{
console.log(n)
}
else
{
console.log("invalid")
}*/

//10
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
for(let i=0;i<n;i++)
{
let e= parseInt(prompt("enter the e:"))
arr[i]=e
}
let c=0,c1=0
for(let j=0;j<n;j++)
{
if(arr[j]>=0)
{
c++
}
else
{
c1++
}
}
console.log(c + "  " + c1)
*/

//11
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
for(let i=0;i<n;i++)
{
let e= parseInt(prompt("enter the e:"))
arr[i]=e
}
let s=0,a
for(let j=0;j<n;j++)
{
s=s+arr[j]
}
a=s/n
console.log(s + " " + a)
*/

//12

/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[n]
for(let i=0;i<n;i++)
{
let e= parseInt(prompt("enter the e:"))
arr[i]=e
}
let b= parseInt(prompt("enter the b:"))
let c=0
for(let j=0;j<n;j++)
{
if(arr[j]===b)
{
c++
}
}
console.log(c)
*/

//13
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[]

for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the num:")
}
for(let j=0;j<n;j++)
{
console.log(arr[j])
}
*/

//14

/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[]
for(let i=0;i<n;i++)
{
arr[i]=prompt("enter the n:")
}

for(let i=0;i<n;i++)
{
let c=0
for(let j=i+1;j<n;j++)
{
if(arr[i]===arr[j])
{
c++
}
}
if(c===1)
{
console.log(arr[i])
}
}
*/

//15

/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[]
let c=0
let k=0
for(let i=0;i<=n;i++)
{
c=0
for(let j=1;j<i;j++)
{
if(i%j==0)
{
c++
}
}
if(c===1)
{
arr[k]=i
k++
}
}
for(let i=0;i<k;i++)
{
console.log(arr[i])
}*/

//16
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[]
let c=0
for(let i=1;i<=n;i++)
{
if(n%i===0)
{
arr[c]=i
c++
}
}
for(let j=0;j<c;j++)
{
console.log(arr[j])
}*/

//17
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[]
let s=0
let m=n/2
for(let i=1;i<=m;i++)
{
if(n%i===0)
{
arr[s]=i
s++
}
}
for(let j=0;j<s;j++)
{
console.log(arr[j])
}
*/

//18
/*const prompt = require("prompt-sync")()
let n= parseInt(prompt("enter the n:"))
let arr=[]
let p=0

for(let i=1;i<=n;i++)
{
let f=1
for(let j=1;j<=i;j++)
{
f=f*j
}
arr[p]=f
p++
}
for(let j=0;j<n;j++)
{
console.log(arr[j])
}
*/



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





`	
















