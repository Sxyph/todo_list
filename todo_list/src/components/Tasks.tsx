import React from "react";
import useData from "../hooks/useData";
import "../index.css";
import Task from "./Task";
import {Timestamp, doc, deleteDoc} from "firebase/firestore";

const Tasks = () => {
    const data = useData();
    const tmp = data.slice(0).sort((a,b)=>{
        return (a.time as Timestamp).toDate().getTime() - (b.time as Timestamp).toDate().getTime();
    });
    return (
        <div className='h-96'>
            <div className='rounded-lg min-h-full bg-zinc-500 p-4 flex flex-col space-y-4'>
            {tmp.map((item) => Task(item))}
            </div>
        </div>
    );
}

export default Tasks;