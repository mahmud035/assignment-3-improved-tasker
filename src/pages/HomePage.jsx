import { useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AddTaskModal from '../components/Task/AddTaskModal';
import TaskBoard from '../components/Task/TaskBoard';
import { useTasksDispatch } from '../contexts/TasksContext';

const HomePage = () => {
  const dispatch = useTasksDispatch();
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddAndEditTask = (newTask, isAdd) => {
    console.log(newTask);
    // console.log(isAdd);

    if (isAdd) {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          ...newTask,
        },
      });

      toast.success('Task Added Successfully!');
    }

    setShowModal(false);
  };

  return (
    <div>
      {showModal ? (
        <>
          <AddTaskModal
            setShowModal={setShowModal}
            handleAddAndEditTask={handleAddAndEditTask}
            taskToUpdate={taskToUpdate}
          />
        </>
      ) : (
        <>
          <Header />
          <TaskBoard setShowModal={setShowModal} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
