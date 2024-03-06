import { ITask } from '../../models/tasks'
import { RootState } from '../../store'

export const completedTasksSelector = (state: RootState): ITask[] => {
	return state.tasks.tasks.filter((task: ITask) => task.completed === true)
}

export const incompleteTasksSelector = (state: RootState): ITask[] => {
	return state.tasks.tasks.filter((task: ITask) => task.completed === false)
}
