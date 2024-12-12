const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
  



const addTodo = ()=>{
     const inputText = inputBox.value.trim();
     //trim= it'll remove only first and last spaces
     
     if(inputText.length <= 0){
        alert("You must write somethoing in your to do")
     }

     const li = document.createElement("li");
     const p = document.createElement("p");
     p.innerHTML = inputText;
     li.appendChild(p);

     todoList.appendChild(li);
     inputBox.value = "";
}

addBtn.addEventListener('click', addTodo);

inputBox.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});