const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);

const taskSchema = mongoose.Schema({
  judulTugas: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
