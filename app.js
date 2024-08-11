// Get the heading element by id 

const idhead = document.getElementById("heading");
console.log(idhead);
idhead.textContent = "Document Object Model";
idhead.style.color = "Black";
idhead.style.margin = "10px";
idhead.style.textAlign = "center";


//const value1 = document.querySelector("text");
let v;
let v1;
function putvalue()
{
   
    const value1 = document.getElementById("fname");
     v = value1.value;
     const value2 = document.getElementById("lname");
     v1 = value2.value;
    console.log(v);
    
   // console.log(value.value);
   // alert("fdsfsdf");
}
document.getElementById("submit").addEventListener("click", todo );


// create a dynamic table ----------------------------------------
function createtable()
{
const rows = 10;
const cols = 3;

const app = document.getElementById("table");
const table = document.createElement("tablebody");

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");
    let x = document.createTextNode(v);
    
    td.appendChild(x);
    tr.appendChild(td)
    tr.appendChild(td);
  }
  table.appendChild(tr);

}

app.appendChild(table);
}
// create a dynamic table ----------------------------------------

//call the two fucntions-------------------------------------------
function todo()
{
    putvalue();
    createtable1();

}
//call the two fucntions-------------------------------------------


function createtable1()
{

const app = document.getElementById("table");
const table = document.createElement("tablebody");
const tr = document.createElement("tr");
const td = document.createElement("td");
let x = document.createTextNode(v);
td.appendChild(x);
tr.appendChild(td);
const td1 = document.createElement("td");
let x1 = document.createTextNode(v1);
td1.appendChild(x1);
tr.appendChild(td1);

 table.appendChild(tr);
app.appendChild(table);
}

function openContactus()
{
    window.open("https://www.w3schools.com");
}



