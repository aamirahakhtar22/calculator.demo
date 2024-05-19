// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//      if(e.target.innerHTML == '='){
//         string  = eval(string);
//         document.querySelector('input').value =string;
//      }
//       else if(e.target.innerHTML == 'C'){
//         string  = "";
//         document.querySelector('input').value =string;
//      }
//      else{
//      console.log(e.target)
//      string = string +e.target.innerHTML;
//      document.querySelector('input').value =string;
//      }
//     })
// })

var string = "";
function result() {
   string  = eval(string);
   displayBoard()
   
}
function add(){
   string = string.concat('+');
   displayBoard()
}
function seven () {
   string = string.concat('7');
   displayBoard()
}
function eight () {
   string = string.concat(8);
   displayBoard();
}
function nine() {
   string = string.concat(9);
   displayBoard();
}
function one(){
   string = string.concat(1);
   displayBoard();
}
function two(){
   string = string.concat(2);
   displayBoard();
}
function three(){
   string = string.concat(3);
   displayBoard();
}
function four(){
   string = string.concat(4);
   displayBoard();
}
function five(){
   string = string.concat(5);
   displayBoard();
}
function six(){
   string = string.concat(6);
   displayBoard();
}

function displayBoard() {
   document.querySelector('input').value = string;
}
function multiplication(){
   string = string.concat('*');
   displayBoard()
}
function sub(){
   string = string.concat('-');
   displayBoard()
}
function percentage (){
   string = string.concat('%')
   displayBoard()
}
function zero (){
   string = string.concat('0')
   displayBoard()
}
function dot (){
   string = string.concat('.')
   displayBoard()
}

function divide(){
   string = string.concat('/')
   displayBoard()
}
function curly(){
   string = string.concat('(')
   displayBoard()
}
function bracket(){
   string = string.concat(')')
   displayBoard()
}
function result(){
   string = eval (string);
   displayBoard()
}
function clearbutton() {

   string = '';
   displayBoard()
}

   