import { Link, useLocation } from 'react-router-dom'
import { FC } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LuListTodo } from 'react-icons/lu'
import Badge from 'react-bootstrap/Badge'
import CustomBox from '../../shared/ui/СustomBox'

import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { completedTasksSelector, incompleteTasksSelector } from '../../features/task/filtration'

const Header: FC = () => {
	const { pathname } = useLocation()
	const incompleteTasks = useSelector(incompleteTasksSelector)
	const completedTasks = useSelector(completedTasksSelector)

	return (
		<header>
			<CustomBox style={{ borderRadius: '0 0 60px 60px' }}>
				<Navbar expand='lg' className={styles.header}>
					<Container>
						<Navbar.Brand href='/'>
							<LuListTodo size={50} color='#333' />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse className='gap-5 ms-5'>
							<Nav.Link
								className={`${styles.header_link} ${
									pathname === '/create' ? styles.active : ''
								}`}
								as={Link}
								to='/create'
							>
								Create Task
							</Nav.Link>
							<Nav.Link
								className={`${styles.header_link} ${
									pathname === '/incomplete' ? styles.active : ''
								}`}
								as={Link}
								to='/incomplete'
							>
								Tasks
								<Badge pill>{incompleteTasks.length}</Badge>
							</Nav.Link>
							<Nav.Link
								className={`${styles.header_link} ${
									pathname === '/completed' ? styles.active : ''
								}`}
								as={Link}
								to='/completed'
							>
								Completed Tasks
								<Badge pill bg='secondary'>
									{completedTasks.length}
								</Badge>
							</Nav.Link>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</CustomBox>
		</header>
	)
}

export default Header
