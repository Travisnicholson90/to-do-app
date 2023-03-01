const list = document.querySelector('.list');
const toDoInput = document.querySelector('.create-todo');
const add = document.querySelector('.add');
const clearAll = document.querySelector('.clear-all');
const checkImage = document.querySelector('.check')
const cross = document.querySelector('.cross')
const itemsNum = document.querySelector('.number-items')
const remove = document.querySelector('.remove')
const complete = document.querySelectorAll('.complete');

let newToDo = ''
//add counter and set === 0 
let count = 0
if(count < 0) {
    count = 0
}



toDoInput.addEventListener('input', (e) => {
    newToDo = toDoInput.value;
    
});


add.addEventListener('click', (e) => {
    if(newToDo.trim() !== '') {
        
        const li = document.createElement('li');
        const remove = document.createElement('button');
        const span = document.createElement('span');
        const complete = document.createElement('button');    
        
        
        list.appendChild(li);
        li.appendChild(span);
        li.appendChild(remove);
        li.appendChild(complete);
        
        li.className = 'list-item';
        remove.className = 'remove';
        span.className = 'span';
        complete.className = 'complete';
        
        span.textContent = newToDo;
        complete.setAttribute("src", "images/tick-svgrepo-com.svg", "width: 50px");
        remove.setAttribute("src", "images/cross-svgrepo-com.svg");
        
        
        //then reset the input to empty string
        toDoInput.value = '';
        newToDo = '';
        
        // increment counter for new todo
        if (add) {
            count++
            console.log(count);
            itemsNum.textContent = `${count} todo items`

        } 
        


        remove.addEventListener('click', (e) => {
            list.removeChild(li);

            //decrement counter if li removed
            if(remove) {
                count--
                console.log(count);
                itemsNum.textContent = `${count} todo items`

            }
           
    });


        complete.addEventListener('click', (e) => {
            console.log(e.target);
                span.style.textDecoration = 'line-through';
                span.style.fontStyle = 'italic'
                span.style.color = '#25b225'   

        })

        clearAll.addEventListener('click', () => {
            list.removeChild(li)

            //set counter to 0 when clear all
            if(clearAll) {
                count = 0
                itemsNum.textContent = `${count} todo items`
            }
        })
};
});



    