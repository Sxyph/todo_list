import React from "react";
import "./index.css";
import Task from "./components/Task";

const App = () => {
    return (
        <div className='w-1/2 mx-auto min-h-screen'>
            <div className='flex justify-start py-2'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add</button>
            </div>
            <div className='h-96'>
                <div className='min-h-full bg-red-500 p-4 flex flex-col space-y-4'>
                    <Task/>
                </div>
            </div>
        </div> 
    );
}

export default App;