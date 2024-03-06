import { FC } from 'react'
import { Spinner } from 'react-bootstrap'
import styles from './styles.module.scss'

const Loading: FC = () => {
	return (
		<div className={styles.loading}>
			<Spinner className={styles.spinner} animation='border' />
		</div>
	)
}

export default Loading
