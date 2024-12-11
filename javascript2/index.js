
let inp = document.querySelector("input[type='text']");
let btn = document.getElementById("addTaskBtn");


let taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = inp.value; 

    if (taskText === "") {
       
        return;
    }

  
    const taskBox = document.createElement("div");
    taskBox.className = "task-box";
    taskBox.style.backgroundColor = "green";
    taskBox.style.borderRadius = "15px";  
    //taskBox.style.height = "100px"; 
   // taskBox.style.display = "flex";
    //document.body.style.justifyContent = "center";
    taskBox.style.justifyContent = "center";
   taskBox.style.alignItems = "center";
    //document.body.style.height = "100vh";
    
    const task = document.createElement("span");
    task.innerHTML = taskText;  

    
    const doneButton = document.createElement("button");
    doneButton.className = "done-btn";
    doneButton.textContent = "Done";
    doneButton.onclick = () => {
        task.classList.toggle("done");
    };


    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
        taskList.removeChild(taskBox);
    };

    
    taskBox.appendChild(task);
    taskBox.appendChild(doneButton);
    taskBox.appendChild(deleteButton);

   
    taskList.appendChild(taskBox);

    
    inp.value = "";
}


btn.addEventListener("click", addTask);


function getDataById() {
    let inp = document.getElementById("databyid").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + inp);
    xhr.send("");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.response);

            // Create a new row
            let tableBody = document.getElementById("tableBody");

            // Create the row and cells for the table
            let newRow = document.createElement("tr");
            
            let idCell = document.createElement("td");
            idCell.innerText = res.id;
            newRow.appendChild(idCell);

            let titleCell = document.createElement("td");
            titleCell.innerText = res.title;
            newRow.appendChild(titleCell);

            let bodyCell = document.createElement("td");
            bodyCell.innerText = res.body;
            newRow.appendChild(bodyCell);

            // Append the row to the table
            tableBody.appendChild(newRow);
        }
    };
}





/*function getDataById() {
    let inp = document.getElementById("databyid").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + inp);
    xhr.send("");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.response);

            // Display the title and body from the response
            document.getElementById("title").innerText = res.title;
            document.getElementById("body").innerText = res.body;
        }
    };
}*/
 

