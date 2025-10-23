import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTasks } from '../../contexts/TasksContext';

const AddTaskModal = ({
  setShowModal,
  taskToUpdate = null,
  handleAddAndEditTask,
}) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      tags: [],
      priority: '',
      isFavorite: false,
    }
  );
  const isAdd = Object.is(taskToUpdate, null);
  const { searchText } = useTasks();

  //* event handlers
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'tags') {
      value = value.split(',');
    }

    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      task.title.trim() === '' ||
      task.description.trim() === '' ||
      task.priority.trim() === '' ||
      task.tags.length === 0 ||
      task.tags[0] === ''
    ) {
      return toast.warn('Please Fill All The Fields!');
    } else {
      handleAddAndEditTask({ ...task }, isAdd, searchText);
    }
  };

  return (
    <div className="items-center justify-center w-full overflow-x-hidden h-screen bg-[#191D26]">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? 'Add New Task' : 'Update Task'}
        </h2>

        <div className="text-white space-y-9 lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              value={task.title}
              onChange={handleChange}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              // required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              value={task.description}
              onChange={handleChange}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              // required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                value={task.tags}
                onChange={handleChange}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                placeholder="python, javascript, java"
                // required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                value={task.priority}
                onChange={handleChange}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                // required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-16 lg:mt-20">
          <button
            onClick={() => setShowModal(false)}
            type="submit"
            className="px-4 py-2 text-white transition-all bg-red-600 rounded hover:opacity-80"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white transition-all bg-blue-600 rounded hover:opacity-80"
          >
            {isAdd ? 'Create New Task' : 'Update Task'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;
