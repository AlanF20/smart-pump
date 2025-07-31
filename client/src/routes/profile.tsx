import { createFileRoute, Navigate } from '@tanstack/react-router'
import { useUserStore } from '../stores/user'
import useSWR from 'swr'
import { Button } from '../components/ui/button'
import { Building, Eye, Mail, MapPinned, Phone, Sprout, User } from 'lucide-react'
import { UserInfoPill } from '../components/profile/UserInfoPill'
import { Balance } from '../components/profile/Balance'
import { EditDialog } from '../components/profile/EditDialog'

export const Route = createFileRoute('/profile')({
	component: RouteComponent,
})

function RouteComponent() {
	const fetcher = (url: string) => fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${useUserStore.getState().token}`,
		},
	}).then(res => res.json())
	const token = useUserStore((state) => state.token)
	const clearToken = useUserStore((state) => state.clearToken)
	const { data } = useSWR<User>(`http://localhost:3000/api/user/session`, fetcher)
	if (!token) return <Navigate to='/' />
	return (
		<section className="">
			<header className='w-full flex items-center justify-center text-2xl font-semibold'>
				{data?.name.first} {data?.name.last}
			</header>
			<div className='w-full flex flex-col items-center justify-center gap-4 p-4'>
				<img className='w-[128px] h-[128px] rounded-full ' src={data?.picture} alt={data?.name.first} />
				<div className='w-full flex justify-between gap-1'>
					<Balance />
					<EditDialog />
				</div>
				<UserInfoPill title='Email' value={data?.email} icon={<Mail size={16} />} />
				<UserInfoPill title='Phone' value={data?.phone} icon={<Phone size={16} />} />
				<UserInfoPill title='Address' value={data?.address} icon={<MapPinned size={16} />} />
				<UserInfoPill title='Company' value={data?.company} icon={<Building size={16} />} />
				<div className='w-full flex gap-2'>
					<UserInfoPill title='Age' value={String(data?.age)} icon={<Sprout size={16} />} />
					<UserInfoPill title='Eye Color' value={data?.eyeColor} icon={<Eye size={16} />} />
				</div>
			</div>
			<section className='w-full flex h-[100%] p-4 items-end justify-end'>
				<Button className="w-fit" variant="destructive" onClick={() => clearToken()}>
					<User />Logout
				</Button>
			</section>
		</section>
	)
}
