document.getElementsByClassName("container")
document.getElementById("container").style.color = "red";
document.getElementById("container").style.backgroundColor = "grey";

document.getElementById("text").innerHTML = "I love javascript programming language";

let child=document.getElementById("container").childNodes;
console.log({child})
z
let children = document.getElementById("container").children;
console.log({children})

let p = document.createElement('p')
p.innerHTML = 'I am new'
document.getElementById('container').appendChild(p)
p.setAttribute('class','paragraph');
p.setAttribute('id','paragraph');


let button = document.getElementById('button');
button.addEventListener('click',function(){
    button.innerHTML = 'clicked !!';
    button.style.backgroundColor = '#19ba96';
    button.style.padding ='10px';
    button.style.borderRadius ='5px';
    button.style.border = "none"
})
function changeBackgroundColor() {
    document.body.style.backgroundColor = "silver";
  }