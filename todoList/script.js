document.querySelector('#push').onclick = function(){
    // check if input field is empty
    if (document.querySelector('#newtask input').value.length == 0){
        alert("please Enter a task !")
    }
    else{
        // add a new task
        document.querySelector('#tasks').innerHTML += 
        `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <!-- font awesome icon for trash -->
             <button class="delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        `
    }

    // delete task on click of trash icon
    var current_tasks = document.querySelectorAll(".delete");
    for (var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    // toggle 'completed' class on task click
    var tasks = document.querySelectorAll(".task");
    for (var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        } 
    }

    // clear the input field after adding a task
    document.querySelector('#newtask input').value = "";

}