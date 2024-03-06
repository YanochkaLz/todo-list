export interface ITaskForm {
	title: string
	description?: string
}

export interface ITask extends ITaskForm {
	completed: boolean
}

export interface ITaskList {
	tasks: ITask[]
}

export interface ITaskState extends ITaskList {
	error: string
	isSuccess: boolean
}
