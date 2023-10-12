let form = document.getElementById("form")
let msg = document.getElementById("msg")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3") 


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button Clicked")
    formvalidation();
})

let formvalidation = (e) => {
    if (input1.value === "") {
        msg.innerHTML = "Task Title cannot be empty"
        console.log("failure");
        
    }
   
    else {
        msg.innerHTML = ""
        console.log("Success")
        acceptdata();
        createtask();

    }
}

let data1 = {}
let data2 = {}
let data3 = {}

let acceptdata = (e) => {
    data1["text"] = input1.value
    data2["date"] = input2.value
    data3["description"] = input3.value
    console.log(data1)
    console.log(data2)
    console.log(data3)
}

let createtask = (e) => {
    taskslist.innerHTML += `<div>
     <span id="heading">${data1.text}</span>
     <span id="date">${data2.date}</span>
     <p>${data3.description} </p>

     <span class="options">
         <i  onClick="taskdone(this)" class="fa-solid fa-check"></i>
         <i onClick="updatetask(this)"class="fa-solid fa-pen-to-square"></i>
         <i onClick="deletetask(this)" class="fa-solid fa-trash"></i>
     </span>
    </div>`
    input1.value = ""
    input2.value = ""
    input3.value = ""
};

let deletetask = (e) => {
    e.parentElement.parentElement.remove()
}

let updatetask = (e) => {
    let selectedtask = e.parentElement.parentElement

    input1.value = selectedtask.children[0].innerHTML
    input2.value = selectedtask.children[1].innerText
    input3.value = selectedtask.children[2].innerHTML
    
    selectedtask.remove()

}

let taskdone = (e) => {
    let selectedtask = e.parentElement.parentElement

    input1.value = selectedtask.children[0].innerHTML
    input2.value = selectedtask.children[1].innerText
    input3.value = selectedtask.children[2].innerHTML
    
    e.parentElement.parentElement.remove()
    taskscomp.innerHTML += `<div>
    <span id="heading">${input1.value = selectedtask.children[0].innerHTML}</span>
    <span id="date">${input2.value = selectedtask.children[1].innerText}</span>
    <p>${input3.value = selectedtask.children[2].innerHTML} </p>

    <span class="options">
        <i onClick="updatetask(this)"class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletetask(this)" class="fa-solid fa-trash"></i>
    </span>
    </div>`
    input1.value = ""
    input2.value = ""
    input3.value = ""

}
    


