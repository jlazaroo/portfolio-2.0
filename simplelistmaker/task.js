
let list = document.getElementById('list');
let addClick = document.getElementById('addClick');

const log = console.log;

list.addEventListener('input', function(event){
    // log(event.target.parentNode);
    // log(event.target.querySelector('p'));
    // log(event.target.value);
    event.target.parentNode.querySelector('p').innerHTML = event.target.value;
})



function addNewTask(){
    list.innerHTML += `<div class="task">
    <p class="taskText"></p>
    <input type="text">
</div>`;
}

addClick.onclick = addNewTask;