import { Banknote, Check, DollarSign, DollarSignIcon, Wallet } from "lucide-react";
import { useUserStore } from "../../stores/user";
import { Button } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import useSWR from "swr";

export function Balance() {
	const fetcher = (url: string) => fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${useUserStore.getState().token}`,
		},
	}).then(res => res.json())
	const { data, error } = useSWR<{ balance: string }>(`http://localhost:3000/api/user/balance`, fetcher)
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className="w-[50%]"><Wallet />Balance</Button>
			</DrawerTrigger>
			<DrawerContent className="flex flex-col items-center  gap-4 p-4">
				<DrawerHeader>
					<DrawerTitle className="text-xl font-semibold flex gap-2 items-center justify-center">Balance<Banknote /></DrawerTitle>
					<DrawerDescription className="text-sm text-slate-500">This is your Balance</DrawerDescription>
				</DrawerHeader>
				<div className="text-5xl font-bold tracking-tighter">
					{data?.balance}
				</div>
				<DrawerFooter className="w-full">
					<DrawerClose className="w-full" asChild>
						<Button className="w-full" variant="default">Confirm<Check /></Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer >
	)
}
