import { collection, DocumentData, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import TaskType from "../types/TaskType";

const useData = () => {

    const [state, setState] = useState<DocumentData[]>([])

    useEffect(() => {
        const db = getFirestore();
        const response = collection(db, "user0");

        onSnapshot(response, (querySnapshot) => {
            const taskList = querySnapshot.docs.map(doc => doc.data())
            setState(taskList);
        });
    }, []);

    return state as TaskType[];

};

export default useData;