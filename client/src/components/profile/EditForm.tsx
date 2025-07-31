import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";
import { useUserStore } from "../../stores/user";
import useSWR, { useSWRConfig } from "swr";

const formSchema = z.object({
	email: z.string().min(2, {
		message: 'Email is too short',
	}).optional(),
	name: z.object({
		first: z.string(),
		last: z.string(),
	}).optional(),
	password: z.string().optional(),
	phone: z.string().optional(),
	address: z.string().optional(),
	company: z.string().optional(),
	age: z.number().optional(),
	eyeColor: z.string().optional(),
	picture: z.string().optional(),
})
export function EditForm() {
	const fetcher = (url: string) => fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${useUserStore.getState().token}`,
		},
	}).then(res => res.json())
	const { data } = useSWR<User>(`http://localhost:3000/api/user/session`, fetcher)
	const { mutate } = useSWRConfig()
	const [loading, setLoading] = useState(false)
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: data?.email,
			password: data?.password,
			phone: data?.phone,
			address: data?.address,
			company: data?.company,
			age: data?.age,
			eyeColor: data?.eyeColor,
			picture: data?.picture,
			name: {
				first: data?.name.first,
				last: data?.name.last,
			},
		},
	})
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setLoading(true)
			const response = await fetch('http://localhost:3000/api/user/edit', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${useUserStore.getState().token}`,
				},
				body: JSON.stringify(values),
			})
			if (!response.ok) {
				throw new Error('Invalid email or password')
			}
			await response.json()
			toast.success('Data updated successfully!')
			mutate('http://localhost:3000/api/user/session')
		} catch (e: unknown) {
			console.error(e)
			if (e instanceof Error) {
				toast.error(e.message)
			}
		} finally {
			setLoading(false)
		}
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-[1.6rem]">
				<div className="flex justify-between gap-2">
					<FormField control={form.control}
						name="name.first"
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input placeholder="John" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField control={form.control}
						name="name.last"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder="Doe" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="shadcn@ui.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Address</FormLabel>
							<FormControl>
								<Input placeholder="Santiago St. 25" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-between gap-2">
					<FormField control={form.control}
						name="age"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Age</FormLabel>
								<FormControl>
									<Input placeholder="25" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField control={form.control}
						name="eyeColor"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Eye Color</FormLabel>
								<FormControl>
									<Input placeholder="Brown" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input placeholder="415 555 0123" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField control={form.control}
					name="picture"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Picture</FormLabel>
							<FormControl>
								<Input placeholder="https://picsum.photos/200" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={loading} className='w-full' type="submit">
					{loading ? <Loader2Icon>'Loading...'</Loader2Icon> : 'Update'}
				</Button>
			</form>

		</Form>
	)
}
