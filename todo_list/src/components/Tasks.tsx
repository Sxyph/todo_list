import React from "react";
import "../index.css";
import Task from "./Task";

const Tasks = () => {
    return (
        <div className='h-96'>
            <div className='rounded-lg min-h-full bg-zinc-500 p-4 flex flex-col space-y-4'>
                <Task />
            </div>
        </div>
    );
}

export default Tasks;