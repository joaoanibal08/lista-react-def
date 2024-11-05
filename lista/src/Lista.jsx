import React, {useState} from 'react'

function Lista(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks,];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks,];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className='to-do-list'>
            <h1>Lista de Tarefas</h1>
            <div>
                <input type="text" placeholder='Digite a tarefa' value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Adicionar</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() =>  deleteTask(index)}>Delete</button>
                        <button className='move-button' onClick={() =>  moveTaskUp(index)}>Up</button>
                        <button className='move-button' onClick={() =>  moveTaskDown(index)}>Down</button>
                    </li> 
                )}
            </ol>
        </div>
    );
}

export default Lista