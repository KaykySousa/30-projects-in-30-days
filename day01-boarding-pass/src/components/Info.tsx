interface InfoProps {
	label: string
	content: string
	alignOnRight?: boolean
}

export default function Info({ label, content, alignOnRight }: InfoProps) {
	return (
		<div className={alignOnRight ? "text-right" : ""}>
			<p className="text-gray-700 text-sm leading-none mb-1">{label}</p>
			<p className="font-medium text-base leading-none">{content}</p>
		</div>
	)
}
