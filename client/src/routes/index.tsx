import { createFileRoute, Navigate } from '@tanstack/react-router'
import { LoginForm } from '../components/login/Form'
import logo from '../../../assets/logo.png'
import { useUserStore } from '../stores/user'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	const token = useUserStore((state) => state.token)
	if (token) return <Navigate to='/profile' />
	return (
		<section className="max-w-md border rounded-xl flex flex-col items-center justify-center gap-6 p-4 m-2">
			<img src={logo} alt="logo" className="w-32 h-32" />
			<header className='flex flex-col item-center justify-center gap-2'>
				<h3 className='text-xl font-semibold text-center'>Welcome back!</h3>
				<p className='text-sm text-slate-500 text-center'>Login with your Smart Pump account</p>
			</header>
			<LoginForm />
			<p className='text-sm text-slate-500'>Don't have an account? <a href="#" className='text-blue-500 hover:underline'>Sign up</a></p>
		</section>
	)
}
