const TaskinputElement = document.querySelector("#inputTask");
const addtaskBtn = document.querySelector("#saveButton");
const ToDolistElement = document.querySelector("#task");


//add elements when you click the button
const taskList = [];
addtaskBtn.onclick = function () {
  const T = TaskinputElement.value;
  if (T === "") {
    alert("Please enter a todo before submiting");
  } else {
    if (taskList.length < 3) {
      const L = document.createElement("li");
      var textnode = document.createTextNode(T);
      L.appendChild(textnode);
      L.innerHTML = T;
      taskList.push(L);
      console.log(taskList);
      TaskinputElement.value = "";


      //When a user clicks: the "✕" btn the list item is deleted & the "✓" btn the list item is displayed with a  ̶S̶t̶r̶i̶k̶e̶-̶t̶h̶r̶o̶u̶g̶h̶ 
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm", "float-right");
      deleteButton.innerHTML = "✕";
      deleteButton.onclick = function (e) {
        e.preventDefault();
        L.remove();
      }

      const completeButton = document.createElement("button");
      completeButton.classList.add("btn", "btn-success", "btn-sm", "float-right","mr-1");
      completeButton.innerHTML = "✓"; 
      completeButton.onclick = function (e) {
        e.preventDefault();
        L.style.textDecoration = "line-through";
      }

      //appending child elements
      L.appendChild(deleteButton);
      L.appendChild(completeButton);
      ToDolistElement.appendChild(L);
    

    } else {
      alert("You can't have more than 3 todos.");
    }
  }
  return false; 
};
