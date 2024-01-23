import { toast } from 'react-toastify';
import { useTasks, useTasksDispatch } from '../../contexts/TasksContext';
import { generateHexColor } from '../../utils/task-utility';

const Task = ({ task }) => {
  const { searchText } = useTasks();
  const dispatch = useTasksDispatch();
  const { title, description, tags, priority, isFavorite } = task;

  //* event handlers
  const handleToggleFavorite = () => {
    dispatch({
      type: 'CHANGED',
      payload: {
        ...task,
        isFavorite: !isFavorite,
      },
    });
  };

  const handleDeleteTask = (task) => {
    const confirm = window.confirm('Are you sure you want to DELETE the task?');

    if (confirm) {
      dispatch({
        type: 'DELETE_TASK',
        payload: {
          ...task,
        },
      });

      toast.success('Delete Task Successfully!');
    }
  };

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td onClick={handleToggleFavorite} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-star"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke={isFavorite ? 'yellow' : 'currentColor'}
          fill={isFavorite ? 'yellow' : 'none'}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
      </td>
      <td>
        {/* Apply color to matched searchText */}
        {searchText
          ? title.split(new RegExp(`(${searchText})`, 'i')).map((char, i) =>
              char.toLowerCase() === searchText.toLowerCase() ? (
                <span key={i} className="text-[#F5BF42]">
                  {char}
                </span>
              ) : (
                <span key={i}>{char}</span>
              )
            )
          : title}
      </td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {tags?.map((tag, index) => (
            <li key={index}>
              <span
                className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]"
                style={{ backgroundColor: generateHexColor() }}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => handleDeleteTask(task)}
            className="text-red-500"
          >
            Delete
          </button>
          <button className="text-blue-500">Edit</button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
