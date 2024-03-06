import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.scss'

interface CustomBoxProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}

const CustomBox: FC<CustomBoxProps> = ({
	children,
	className = '',
	...props
}) => {
	return (
		<div className={`${styles.box} ${className}`} {...props}>
			{children}
		</div>
	)
}

export default CustomBox
