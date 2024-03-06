import { Navigate, Route, Routes } from 'react-router-dom'
import routes from './routes'
import { FC, Suspense } from 'react'
import Loading from '../../shared/ui/Loading'

const AppRoutes: FC = () => {
	return (
		<Routes>
			{routes.map(({ path, element: Component }) => 
				<Route
					path={path}
					element={
						<Suspense fallback={<Loading/>}>
							<Component />
						</Suspense>
					}
					key={path}
				/>
			)}
			<Route path='*' element={<Navigate to='/create' />} />
		</Routes>
	)
}

export default AppRoutes
