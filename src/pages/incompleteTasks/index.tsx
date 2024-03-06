import { useSelector } from 'react-redux'
import PageLayout from '../../shared/ui/PageLayout'
import { incompleteTasksSelector } from '../../features/task/filtration'
import TaskList from '../../widgets/taskList'
import { FC } from 'react'

const IncompleteTasksPage: FC = () => {
	const incompletedTasks = useSelector(incompleteTasksSelector)

	return (
		<PageLayout title='Tasks'>
			<TaskList tasks={incompletedTasks} />
		</PageLayout>
	)
}

export default IncompleteTasksPage
