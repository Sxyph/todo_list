import React from "react";
import "./index.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
    return (
        <div className='bg-zinc-900 w-1/2 mx-auto min-h-screen'>
            <AddTask/>
            <Tasks/>
        </div> 
    );
}

export default App;