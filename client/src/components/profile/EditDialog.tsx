import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Pen } from "lucide-react";
import { EditForm } from "./EditForm";
import { DialogDescription } from "@radix-ui/react-dialog";

export function EditDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='w-[50%]' variant="outline"><Pen />Edit Profile</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit your information</DialogTitle>
					<DialogDescription>Update your profile information</DialogDescription>
					<EditForm />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
