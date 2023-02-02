import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import "../index.css";
import TaskType from "../types/TaskType";

const AddTask = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [term, setTerm] = useState<string>('');

    const onSubmit = () => {

        if (term === "") {
            return;
        }
        setShowPopup(!showPopup);
        console.log(term);
        addToDatabase(term);
        setTerm("");
    };

    const addToDatabase = async (term: string) => {
        const db = getFirestore();

        const newRecord: TaskType = {
            task: term,
            isCompleted: false, 
            time: new Date()
        }

        await addDoc(collection(db, "user0"), newRecord);

    };

    return (
        <div className='flex justify-start py-2'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setShowPopup(true)}>Add</button>
            {showPopup && (
                <div className="fixed top-0 left-0 bottom-0 right-0 h-full w-full flex items-center justify-center bg-zinc-900 p-4">
                    <div className="bg-zinc-200 p-4 rounded-lg shadow-lg space-y-4 ">
                        <p className="text-xl">Input Your Task:</p>
                        <input
                            type="text"
                            value={term}
                            onChange={(event) => setTerm(event.target.value)}
                            placeholder="Enter Your Task"
                            className="w-full p-4 rounded-lg shadow-lg focus:outline-none focus:shadow-outline"
                        />
                        <button
                            className="bg-red-500 text-white p-2 rounded-lg"
                            onClick={() => setShowPopup(!showPopup)}
                        >
                            Close
                        </button>
                        <button
                            className="ml-2.5 bg-blue-500 text-white p-2 rounded-lg"
                            onClick={onSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default AddTask;