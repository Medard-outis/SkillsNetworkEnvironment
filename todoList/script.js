document.querySelector('#push').onclick = function(){
    //
    if (document.querySelector('#newtask input').value.length == 0){
        alert("please Enter a task !")
    }
    else{
        document.querySelector('#tasks').innerHTML += 
        `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            
            <button class="delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        `
    }

}