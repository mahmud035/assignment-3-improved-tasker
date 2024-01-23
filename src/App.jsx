import TasksProvider from './contexts/TasksContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <TasksProvider>
        <HomePage />
      </TasksProvider>
    </div>
  );
};

export default App;
