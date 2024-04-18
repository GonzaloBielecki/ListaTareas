const dateNumber = document.getElementById("dateNumber")
const dateMonth = document.getElementById("dateMonth")
const dateyear= document.getElementById("dateYear")
const dateText= document.getElementById("dateText")

const taskConteiner=document.getElementById("taskConteiner")

const setDate = () =>{
    const date = new Date()
    dateNumber.textContent=date.toLocaleDateString("es", {day:"numeric"})
    dateText.textContent=date.toLocaleDateString("es",{weekday:"long"})
    dateMonth.textContent=date.toLocaleDateString("es",{month:"short"})
    dateyear.textContent=date.toLocaleDateString("es",{year:"numeric"})
}
const addNewTask=event =>{
    event.preventDefault();
    const {value}=event.target.taskText;
    if (!value) return;
    const task =document.createElement("div");
    task.classList.add("task","roundBorder");
    task.addEventListener("click", changeTaskState)
    task.textContent=value;
    taskConteiner.prepend(task);
    event.target.reset();
}
const changeTaskState = event => {
    event.target.classList.toggle("done");

}
const order =() =>{
    const done =[]
    const toDo=[]
    taskConteiner.childNodes.forEach(elemento => {
       elemento.classList.contains("done") ? done.push(elemento) : toDo.push(elemento)
    })
    return [...toDo,...done] 

}
const renderOrdererTasks =() =>{
    order().forEach(elemento => taskConteiner.appendChild(elemento))

}
setDate()