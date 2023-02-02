import React from 'react';
import "../index.css";
import TaskType from '../types/TaskType';

const Task: React.FC<TaskType> = (props: TaskType) => {
    return (
        <div className='flex items-center bg-zinc-700 p-4 space-x-4 rounded-lg'>
            <input type='checkbox' className='form-checkbox h-6 w-6'></input>
            <h2 className='px-4 grow text-white text-lg'>{props.task}</h2>
            <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded'>
                <i className='fas fa-trash'></i>
            </button>
        </div> 
    );
}

export default Task;