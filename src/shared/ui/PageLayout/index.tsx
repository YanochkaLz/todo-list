import { FC, HTMLAttributes, ReactNode } from 'react'
import { Container } from 'react-bootstrap'
import Title from '../Title'

interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	title: string
}

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
	return (
		<Container style={{ maxWidth: '700px' }}>
			<Title className='mb-5'>{title}</Title>
			{children}
		</Container>
	)
}

export default PageLayout
