import { FC } from 'react'
import PageLayout from '../../shared/ui/PageLayout'
import NewTaskForm from '../../widgets/form'

const CreateTaskPage: FC = () => {
	return (
		<PageLayout title='Create new task'>
			<NewTaskForm />
		</PageLayout>
	)
}

export default CreateTaskPage
