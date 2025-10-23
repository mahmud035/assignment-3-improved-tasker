const TaskTableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
          Title
        </th>
        <th className="w-full p-4 pb-8 text-sm font-semibold capitalize">
          Description
        </th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
          Tags
        </th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
          Priority
        </th>
        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
          Options
        </th>
      </tr>
    </thead>
  );
};

export default TaskTableHeader;
