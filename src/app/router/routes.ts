import { lazy } from 'react'

const CreateTaskPage = lazy(() => import('../../pages/createTask'))
const IncompleteTasksPage = lazy(() => import('../../pages/incompleteTasks'))
const CompletedTasksPage = lazy(() => import('../../pages/completedTasks'))

const routes = [
	{
		path: '/create',
		element: CreateTaskPage,
	},
	{
		path: '/incomplete',
		element: IncompleteTasksPage,
	},
	{
		path: '/completed',
		element: CompletedTasksPage,
	},
]

export default routes
