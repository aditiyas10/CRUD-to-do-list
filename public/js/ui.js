const taskList = document.querySelector(".daftarTugas");
const emptyState = document.querySelector(".empty-state");

const showEmptyState = () => {
  emptyState.classList.replace("hidden", "flex");
};
const hideEmptyState = () => {
  emptyState.classList.replace("flex", "hidden");
};

const showTask = (task) => {
  taskList.insertAdjacentHTML(
    "beforeend",
    `<div
            data-id="${task._id}" class="group tugas-wrapper flex justify-between border-b border-gray-300 px-1 py-1"
          >
            <label class="cursor-pointer   group-has-checked:text-zinc-400 group-has-checked:line-through">
              <input
                type="checkbox"
                name="tugas"
                class=" mr-2 scale-130 accent-zinc-500 cursor-pointer"
                
                ${task.isDone ? "checked" : ""}
              />
              ${task.judulTugas}
            </label>
              <button
                class="close cursor-pointer justify-end text-red-500 transition group-has-checked:hidden hover:scale-150"
              >
                x
              </button>
          </div>`,
  );
};

export { showEmptyState, hideEmptyState, showTask };
