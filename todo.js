let tasks = [
    // {
    //     task: 'study',
    //     date: '12/7/2025',
    // },
    // {
    //     task: 'going to gym',
    //     date: '13/7/2025',
    // }
];
displayItem();
function addToDo(){
    let addTask = document.querySelector('.add-input').value;
    let addDate = document.querySelector('.add-date').value;
    tasks.push({
        task: addTask,
        date: addDate,
    });
    document.querySelector('.add-input').value= '';
    document.querySelector('.add-date').value= '';
    displayItem();

}
function displayItem(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i =0;i<tasks.length;i++){
        let taskName = tasks[i].task;
        let dueDate = tasks[i].date;
        newHtml+= 
        `
        <div class = "each-task">
        <span>${taskName}</span>
        <span>${dueDate}</span>
        <button  class= "btn-delete" onclick="tasks.splice(${i},1); displayItem(); ">Delete</button>
        </div>
        `
    }
    containerElement.innerHTML = newHtml;
}
