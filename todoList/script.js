document.querySelector('#push').onclick = function
(){
    if (document.querySelector('#newtask input').
    ariaValueMax.length == 0){
        alert("please Enter a task !")
    }
    else{
        Document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                <spam id="taskname">
                    ${document.querySelector('#newTask input').value}
                </span>
                <button class="delete">
                </button
            </div>
        `;
    }

}