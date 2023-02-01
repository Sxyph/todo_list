import React from 'react';
import "../index.css";

const Task = () => {
    return (
        <div className='flex items-center bg-black p-4 space-x-4'>
            <input type='checkbox' className='form-checkbox h-6 w-6'></input>
            <h2 className='bg-white px-4'>This is a test</h2>
            <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded'>
                <i className='fas fa-trash'></i>
            </button>
        </div> 
    );
}

export default Task;