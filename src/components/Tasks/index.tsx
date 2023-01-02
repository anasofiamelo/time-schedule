import { useState } from "react";
import { Loading } from "../Loading";
import { Task } from "../../models/Task";
import { query, collection } from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { useAuth } from "../../contexts/auth.context";
import { Modal } from "../Modal";
import { Counter } from "../Counter";

const TaskItem: React.FC<{ task: Task }> = (props) => {
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);

  const openTaskModalHandler = () => setShowTaskModal(true);
  const closeTaskModalHandler = () => setShowTaskModal(false);
  return (
    <>
      <div onClick={openTaskModalHandler} className="task-container">
        <Counter seconds={props.task.seconds} />
        {/* <span className="task-time">{props.task.seconds}</span> */}
        <p className="task-name">{props.task.description}</p>
      </div>
      {showTaskModal && (
        <Modal onClose={closeTaskModalHandler}>{props.task.description} </Modal>
      )}
    </>
  );
};

export const Tasks: React.FC = () => {
  const { userId } = useAuth();
  const tasksQuery = query(collection(db, "users", userId, "tasks"));
  const { isLoading, data } = useFirestoreQuery(["tasks"], tasksQuery);

  if (isLoading) {
    return <Loading />;
  }

  const mappedTasks = data?.docs.map((task) => {
    const taskData = { ...(task.data() as Task), taskId: task.id };

    return <TaskItem key={task.id} task={taskData} />;
  });

  return <div>{mappedTasks}</div>;
};
