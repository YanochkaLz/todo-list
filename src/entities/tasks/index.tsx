import { FC } from 'react'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import styles from './styles.module.scss'
import CustomBox from '../../shared/ui/СustomBox'
import { ITask } from '../../models/tasks'

interface ITaskProps {
	task: ITask
	toggleTaskHandler: (task: ITask) => void
}

const Task: FC<ITaskProps> = ({ task, toggleTaskHandler }) => {
	return (
		<Form.Check type={'checkbox'} id={`check-api-checkbox`}>
			<CustomBox className={styles.task}>
				<div
					className={styles.task_container}
					onClick={() => toggleTaskHandler(task)}
				>
					<Form.Check.Input
						checked={task.completed}
						type={'checkbox'}
						className={styles.task_checkbox}
					/>
					<Form.Check.Label className={styles.task_title}>
						{task.title}
					</Form.Check.Label>
				</div>
				{task.description && (
					<Accordion defaultActiveKey='none'>
						<Accordion.Item eventKey='0'>
							<Accordion.Header></Accordion.Header>
							<Accordion.Body>
								<h6 className='text-center'>Description:</h6>
								{task.description}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				)}
			</CustomBox>
		</Form.Check>
	)
}

export default Task
