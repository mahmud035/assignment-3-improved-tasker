import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AddTaskModal from '../components/Task/AddTaskModal';
import TaskBoard from '../components/Task/TaskBoard';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddAndEditTask = (newTask, isAdd) => {
    console.log(newTask);
    console.log(isAdd);
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
