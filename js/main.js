// write a function called add_nums

// get #num1, and #num2
// add them and write to #result

/* Find #num1 and #num2 and update #result
 */
function add_nums() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  console.log( num1, num2 );
  document.getElementById("result").innerText = num1 + num2; 
}

// alert("Hello World");

function updateName(){
  var name = prompt("Enter your name");
  // alert(name);
  if( !name ) { name = "Stinky McCheese"; }
  document.getElementById("person").innerText = name;
}

