import { FC, PropsWithChildren } from 'react'
import { Footer, Header } from '../../widgets'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='layout'>
			<Header />
			<main className='main'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
