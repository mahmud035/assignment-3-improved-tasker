import { useTasks } from '../../contexts/TasksContext';
import NoTaskFound from './NoTaskFound';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

const TaskBoard = ({ setShowModal, setTaskToUpdate, handleEditTask }) => {
  const { tasks, searchText } = useTasks();

  //* How to show searchedTask and allTask based on searchText
  // IMPORTANT: যখন page initially load হচ্ছে, তখন searchBar এর মধ্যে কিছু নাই, মানে (blank) দিয়ে ফিল্টার/সার্চ হচ্ছে। তখন সবগুলো task return করবে। আবার যখন search করার পরে, searchBar Empty করে দেওয়া হবে, তখনও (blank) দিয়ে ফিল্টার/সার্চ হবে। অর্থাৎ, সবগুলো task return করবে। এতে করে search করার পরে, newTask Add করলে বা Task Edit করলে যে issue টা হচ্ছিলো (search empty করার পরে সবগুলো Task দেখাচ্ছিল না) সেটা Solve হয়ে যাবে।

  const searchResult = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.trim().toLowerCase())
  );
  // console.log(searchResult);

  const hasSearchResult = searchResult.length > 0;

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              setShowModal={setShowModal}
              setTaskToUpdate={setTaskToUpdate}
            />

            {tasks.length > 0 ? (
              hasSearchResult ? (
                <TaskList
                  tasks={searchResult}
                  handleEditTask={handleEditTask}
                />
              ) : (
                <>
                  {/* Show "No task found" message when search text is present */}
                  <NoTaskFound
                    message={`No task found for "${searchText}"`}
                    className="text-[#F5BF42]"
                  />
                </>
              )
            ) : (
              <>
                {/* Show "Task List is empty" message when no tasks exist */}
                <NoTaskFound
                  message="Task List is empty!"
                  className="text-red-500"
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
