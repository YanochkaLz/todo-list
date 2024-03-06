import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITask, ITaskForm, ITaskState } from '../../models/tasks'

const initialState: ITaskState = {
	tasks: [],
	error: '',
	isSuccess: false,
}

export const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<ITaskForm>) => {
			const existingTask = state.tasks.find(
				task => task.title === action.payload.title
			)
			if (existingTask) {
				state.isSuccess = false
				state.error = 'Task already exists! Try another one!'
				return
			}
			state.error = ''
			const newTask = { ...action.payload, completed: false }
			state.tasks.push(newTask)
			state.isSuccess = true
			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		toggleCompletedTask: (state, action: PayloadAction<string>) => {
			const toggleTask = state.tasks.find(
				(task: ITask) => task.title === action.payload
			)
			if (toggleTask) {
				toggleTask.completed = !toggleTask.completed
			}
			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		setTasks: (state, action: PayloadAction<ITask[]>) => {
			state.tasks = action.payload
		},
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload
			state.isSuccess = false
		},
		setSuccess(state, action: PayloadAction<boolean>) {
			state.isSuccess = action.payload
			state.error = ''
		},
	},
})

export const { addTask, toggleCompletedTask, setError, setSuccess, setTasks } =
	taskSlice.actions
export default taskSlice.reducer
