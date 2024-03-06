import { useSelector } from 'react-redux'
import PageLayout from '../../shared/ui/PageLayout'
import TaskList from '../../widgets/taskList'
import { completedTasksSelector } from '../../features/task/filtration'
import { FC } from 'react'

const CompletedTasksPage: FC = () => {
	const completedTasks = useSelector(completedTasksSelector)

	return (
		<PageLayout title='Completed tasks'>
			<TaskList tasks={completedTasks} />
		</PageLayout>
	)
}

export default CompletedTasksPage
