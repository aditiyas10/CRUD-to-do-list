const getTasks = async () => {
  const response = await fetch("/api/tasks");

  if (!response.ok) {
    throw new Error(`http error status ${response.status}`);
  }

  return response.json();
};

const addTask = async (data) => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`http error status: ${response.status}`);
  }

  return response.json();
};

const updateTask = async (id, data) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`http error status: ${response.status}`);
  }

  return response.json();
};

const deleteTask = async (id) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`http error status: ${response.status}`);
  }
  return response.json();
};

export { getTasks, addTask, deleteTask, updateTask };
