import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import { RootState, useAppDispatch, useAppSelector } from '../../store'
import { addTask } from '../../features/task/taskSlice'
import TemporaryAlert from '../../shared/ui/TemporaryAlert'
import { ITaskForm } from '../../models/tasks'

const validationSchema = yup.object().shape({
	title: yup.string().required('Title is required'),
	description: yup.string(),
})


const NewTaskForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<ITaskForm>({
		mode: 'all',
		resolver: yupResolver(validationSchema),
	})

	const { error: errorSubmit, isSuccess } = useAppSelector(
		(state: RootState) => state.tasks
	)
	const dispatch = useAppDispatch()

	const onSubmit: SubmitHandler<ITaskForm> = data => dispatch(addTask({...data, title: data.title.trim()}))

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group className='mb-4' controlId='formGroupTitle'>
				<Form.Label>Title</Form.Label>
				<Form.Control
					{...register('title')}
					required
					type='text'
					placeholder='Enter title...'
					className={styles.input}
					defaultValue={''}
				/>
				<Form.Control.Feedback type='invalid'>
					{errors.title?.message}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className='mb-4' controlId='formGroupDescription'>
				<Form.Label>Description</Form.Label>
				<Form.Control
					{...register('description')}
					as='textarea'
					rows={3}
					placeholder='Enter description...'
					className={styles.input}
					defaultValue={''}
				/>
			</Form.Group>
			<Button className={styles.button} disabled={!isValid} type='submit'>
				Add
			</Button>
			{errorSubmit && 
				<TemporaryAlert variant={'danger'}>{errorSubmit}</TemporaryAlert>
			}
			{isSuccess && 
				<TemporaryAlert variant={'success'}>
					Task added successfully! <Link to={'/incomplete'}>Go to tasks!</Link>
				</TemporaryAlert>
			}
		</Form>
	)
}

export default NewTaskForm
