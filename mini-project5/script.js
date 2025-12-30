document.addEventListener("DOMContentLoaded",function(){

    const todoInput=document.getElementById('todoInput')
    const addtodobutton=document.getElementById('addtodobutton')
    const todolist=document.getElementById('todolist')

    let todos=JSON.parse(localStorage.getItem('todos')) || [];


    function rendorTodos(){
        todolist.innerHTML='';
        todos.forEach((todo,index) => {
            const listitem=document.createElement('li')
            listitem.className='list-group-item d-flex justify-content-between align-item-center';

            if(todo.completed){
                listitem.classList.add('completed')
            }
            listitem.textContent=todo.Text



            const deletebutton=document.createElement('button')
            deletebutton.className='btn btn-danger btn-sm'
            deletebutton.textContent='delete'
            deletebutton.addEventListener('click',()=>{
                deletetodo(index)


            })

            listitem.appendChild(deletebutton)
            listitem.addEventListener('click',()=>{
                toggletodocomplete(index)
            })
            todolist.appendChild(listitem)
        });
    }




    function deletetodo(index){
        todos.splice(index,1)
        savetodo()
        rendorTodos()
    }



    function toggletodocomplete(index){
        todos[index].completed=!todos[index].completed
        savetodo()
        rendorTodos()

    }









    function addtodo(){
        const tasktext=todoInput.value.trim();
        if(tasktext==='')
             return
        todos.push({Text:tasktext,completed:false})
        todoInput.value=''
        savetodo()
        rendorTodos()


    

    }
    function savetodo(){
        localStorage.setItem('todos',JSON.stringify(todos))
    }




    addtodobutton.addEventListener('click',addtodo)
    todoInput.addEventListener('keypress',(eveent)=>{
        if(eveent.key==='enter'){
            addtodo()
        }


    })

    rendorTodos()











    
})