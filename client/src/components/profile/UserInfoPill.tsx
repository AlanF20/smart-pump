export function UserInfoPill({ title, value, icon }: { title: string; value?: string, icon?: React.ReactNode }) {
	return (
		<div className='w-full flex flex-col gap-1'>
			<span className='text-sm text-slate-500 flex gap-1 items-center'>{icon}{title}</span>
			<p>{value || '-'}</p>
		</div>
	)
}
