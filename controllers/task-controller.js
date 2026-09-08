const Task = require("../config/db");

const getTasks = async (req, res) => {
  try {
    const Tasks = await Task.find({});
    res.status(200).json(Tasks);
  } catch {
    res.status(500).json({
      msg: "gagal mengambil tugas",
    });
  }
};

const addNewTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

const editTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(id, { isDone: req.body.isDone });
    if (!task) {
      return res.status(404).json({ msg: "tugas tidak ditemukan" });
    }

    res.status(200).json(updatedTask);
  } catch {
    res.status(500).json({ msg: "gagal mengupdate tugas" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ msg: "tugas tidak ditemukan" });
    }

    res.status(200).json({ msg: "tugas berhasil dihapus" });
  } catch {
    res.status(500).json({ msg: "gagal menghapus tugas" });
  }
};

module.exports = { getTasks, addNewTask, editTask, deleteTask };
