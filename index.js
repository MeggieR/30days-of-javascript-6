//Answer1
// let a = parseInt(prompt("please enter a num; "));

// let i = 1;

// while (i <= a){
 //    i++;
  //   console.log(i);
// }

//Answer2
//let b = parseInt(prompt("Enter a number"));

//let factorial = 1;

//////let i = 1;

//while(i <= b){
 //   factorial *= i;
 //   i++;  
//}
//console.log( factorial);

/*Answer3
let a = 1

while (a <= 100) {
  if (a % 2 === 0) {
    console.log(a);
  }
  a++;
}*/

/*Answer4
let correctPassword = "Meme2020";

let password = prompt("Enter Password");

while (password !== correctPassword) {
  console.log("Incorrect password");
}

console.log("Login succesful"); */

/* Answer5

while(true) {
  let num = parseInt(prompt("please enter a number"));

  if (num % 3 === 0) {
    console.log(num + " is correct");
  }
  break;
  else{
    console.log("Not divisible by 3");
  }
}*/   

/*Answer6
let num = parseInt(prompt("Enter a number: "));

let i = 1;
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}*/


//Answer8
var table = document.getElementById('mytable');
var output="";
for(var i=1;i<=10;i++){
  output+="<tr>";
  for(var j=1;j<=20;j++){
      if(i==1 || j==1)
        output+="<th>"+i*j+"</th>";
      else
        output+="<td>"+i*j+"</td>";
  }
  output+="</tr>"
}
table.innerHTML= output;
