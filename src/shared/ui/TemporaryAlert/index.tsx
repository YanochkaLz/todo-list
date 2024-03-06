import { FC, HTMLAttributes, ReactNode, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { useAppDispatch } from '../../../store'
import { setError, setSuccess } from '../../../features/task/taskSlice'

interface TemporaryAlertProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	variant: string
}

const TemporaryAlert: FC<TemporaryAlertProps> = ({ children, variant }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const timer = setTimeout(() => {
			if (variant === 'danger') {
				dispatch(setError(''))
			} else if (variant === 'success') {
				dispatch(setSuccess(false))
			}
		}, 4000)
		return () => clearTimeout(timer)
	}, [dispatch, variant])

	return (
		<Alert className='mt-5' variant={variant}>
			{children}
		</Alert>
	)
}

export default TemporaryAlert
