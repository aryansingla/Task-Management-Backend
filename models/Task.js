import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' }, // Add status field
    dueDate: { type: Date },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
