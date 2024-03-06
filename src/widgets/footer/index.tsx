import { FC } from 'react'
import CustomBox from '../../shared/ui/СustomBox'
import styles from './styles.module.scss'

const Footer: FC = () => {
	return (
		<footer>
			<CustomBox>
				<div className={styles.footer}>
					<div>© 2024 by Yana Lazarieva</div>
					<div>Test project</div>
				</div>
			</CustomBox>
		</footer>
	)
}

export default Footer
