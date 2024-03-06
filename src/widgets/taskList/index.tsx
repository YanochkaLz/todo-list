import { FC } from 'react'
import Alert from 'react-bootstrap/Alert'
import { ITask } from '../../models/tasks'
import { useAppDispatch } from '../../store'
import { playSound } from '../../features/playSound'
import { toggleCompletedTask } from '../../features/task/taskSlice'
import Task from '../../entities/tasks'

interface ITaskListProps {
	tasks: ITask[]
}

const TaskList: FC<ITaskListProps> = ({ tasks }) => {
	const dispatch = useAppDispatch()

	const toggleTaskHandler = (task: ITask): void => {
		if (!task.completed) {
			playSound()
		}
		dispatch(toggleCompletedTask(task.title))
	}

	return (
		<div>
			{tasks.length > 0 ? 
				tasks.map(task => 
					<Task
						key={task.title}
						task={task}
						toggleTaskHandler={toggleTaskHandler}
					/>
				) : 
				<Alert variant='primary'>No tasks found!</Alert>
			}
		</div>
	)
}

export default TaskList
