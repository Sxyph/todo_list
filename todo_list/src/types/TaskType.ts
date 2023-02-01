import { Timestamp } from "firebase/firestore";

interface TaskType {
    task: string;
    isCompleted: boolean;
    time: Date | Timestamp;
}

export default TaskType;