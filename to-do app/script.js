let addToDoButton = document.getElementById('addToDo');
let clearToDoButton = document.getElementById('clearToDo');
let inputText = document.getElementById('inputText');
let toDoContainer = document.getElementById('toDoContainer');


addToDoButton.addEventListener('click' , function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

    paragraph.addEventListener('dblclick' , function(){
        toDoContainer.removeChild(paragraph);
    })

    clearToDoButton.addEventListener('click' , function(){
        paragraph.remove();
    })
}) 
