import { Link } from "@tanstack/react-router"

export const NotFound = () => {
	return (
		<div className="w-full flex flex-col gap-4 items-center justify-center">
			<h1 className="text-xl">404</h1>
			<p className="text-3xl font-semibold">Page not found</p>
			<p className="text-slate-500 text-sm">The page you are looking for does not exist</p>
			<Link className="text-blue-500 hover:underline" to="/">Go back home</Link>
		</div>
	)
}
