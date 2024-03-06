import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router'
import Layout from './layout'
import { useEffect } from 'react'
import { useAppDispatch } from '../store'
import { setTasks } from '../features/task/taskSlice'

function App(): JSX.Element {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
		if (tasks) {
			dispatch(setTasks(tasks))
		}
	}, [dispatch])

	return (
		<BrowserRouter basename='/todo-list/'>
			<Layout>
				<AppRoutes />
			</Layout>
		</BrowserRouter>
	)
}

export default App
