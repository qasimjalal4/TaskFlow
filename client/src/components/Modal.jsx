
const Modal = () => {

  const PRIORITIES = ["High", "Medium", "Low"];
  const STATUSES = ["Pending", "In Progress", "Completed"];

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
     <div className="absolute bg-white  w-[420px] rounded-xl shadow-md">
      <div className="flex justify-between border-b-[1px] border-b-slate-300 px-[18px] py-3">
        <span className="font-semibold">Add Task</span>
        <button className="font-semibold text-gray-400">X</button>
      </div>
      <div className="px-5 py-3">
       <label className="font-semibold text-slate-500">Title</label>
       <input
        placeholder="Enter your task title here"
        className="border border-gray-300 rounded-md
         w-full px-[10px] py-2 mt-2 mb-3 text-[15px]
        focus:outline-none focus:ring-2 focus:ring-blue-400"
       />
       <label className="font-semibold text-slate-500">Description</label>
       <textarea
        placeholder="Add a short note about this task"
        className="border border-gray-300 rounded-md
         w-full px-[10px] py-[5px] mt-2 text-[15px] h-[100px]
        focus:outline-none focus:ring-2 focus:ring-blue-400"
       />
       <div className="flex flex-col gap-2 mt-4">
        <label className="font-semibold text-slate-500">PRIORITY</label>
        <select 
          className="border border-x-gray-300 rounded-md w-full px-3 py-2 text-[15px] bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-400  ">
          {PRIORITIES.map((priority) => (
            <option key={priority} value={priority}>{priority}</option>
          ))}
        </select>
       </div>
       <div className="flex flex-col gap-2 mt-4">
        <label className="font-semibold text-slate-500">
          Due Date
        </label>

        <input
          type="date"
          className="border border-gray-300 rounded-md
          w-full px-3 py-2 text-[15px]
          focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
       </div>
       <div className="flex justify-end gap-3 border-t border-slate-200 px-5 py-4 mt-5">
        <button
          className="px-4 py-2 rounded-md
          border border-gray-300
          text-slate-600 font-medium
          hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 rounded-md
          bg-blue-600 text-white font-medium
          hover:bg-blue-700"
        >
          Create Task
        </button>
      </div>
      </div>

     </div>

    </div>
  )
}

export default Modal