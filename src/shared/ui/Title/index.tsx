import { FC, HTMLAttributes, ReactNode } from 'react'

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}

const Title: FC<TitleProps> = ({ children, className = '', ...props }) => {
	return (
		<h2 className={`fs-3 text-center ${className}`} {...props}>
			{children}
		</h2>
	)
}

export default Title
