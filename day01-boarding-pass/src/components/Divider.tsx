export default function Divider() {
	return (
		<div className="flex items-center relative">
			<div className="h-6 w-6 rounded-full bg-rose-900 absolute left-0 -translate-x-1/2"></div>
			<div className="border-b border-gray-500 border-dashed flex-1 h-px"></div>
			<div className="h-6 w-6 rounded-full bg-rose-900 absolute right-0 translate-x-1/2"></div>
		</div>
	)
}
