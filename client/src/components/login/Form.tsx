import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2Icon } from 'lucide-react'
import { useState } from 'react'
import { useUserStore } from '../../stores/user'
import { useNavigate } from '@tanstack/react-router'

const formSchema = z.object({
	email: z.string().min(2, {
		message: 'Email is too short',
	}),
	password: z.string(),
})

export function LoginForm() {
	const [loading, setLoading] = useState(false)
	const saveToken = useUserStore((state) => state.saveToken)
	const navigate = useNavigate({ from: '/profile' })
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setLoading(true)
			const response = await fetch('http://localhost:3000/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})
			if (!response.ok) {
				throw new Error('Invalid email or password')
			}
			const data = await response.json()
			saveToken(data.token)
			navigate({ to: '/profile' })
			toast.success('Login successful!')
		} catch (e: unknown) {
			console.error(e)
			if (e instanceof Error) {
				toast.error(e.message)
			}
			//toast.error('Invalid email or password')
		} finally {
			setLoading(false)
		}
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 text-[1.6rem]">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<div className="flex justify-between">
								<FormLabel>Password</FormLabel>
								<span className='text-slate-500 text-sm'>Forgot password?</span>
							</div>
							<FormControl>
								<Input type='password' placeholder="••••••••" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={loading} className='w-full' type="submit">
					{loading ? <Loader2Icon>'Loading...'</Loader2Icon> : 'Login'}
				</Button>
			</form>
		</Form>
	)
}
