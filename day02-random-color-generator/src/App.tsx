import { MouseEvent, useEffect, useState } from "react"
import Contacts from "./components/Contacts"

export default function App() {
	const [color, setColor] = useState("")
	const [showTutorial, setShowTutorial] = useState(true)

	function generateHex() {
		const chars = "0123456789ABCDEF"

		let color = "#"
		for (let i = 0; i < 6; i++) {
			color += chars[Math.floor(Math.random() * 16)]
		}

		setColor(color)
	}

	function copyToClipboard(e: MouseEvent) {
		e.stopPropagation()
		navigator.clipboard.writeText(color)
	}

	function onSpaceDown(e: KeyboardEvent) {
		setShowTutorial(false)
		if (e.code === "Space") {
			generateHex()
		}
	}

	function onMouseDown() {
		setShowTutorial(false)
		generateHex()
	}

	useEffect(() => {
		generateHex()

		document.addEventListener("keydown", onSpaceDown)
		document.addEventListener("click", onMouseDown)

		return () => {
			document.removeEventListener("keydown", onSpaceDown)
			document.removeEventListener("click", onMouseDown)
		}
	}, [])

	return (
		<div
			style={{
				backgroundColor: color,
			}}
			className="min-h-screen w-full flex justify-center items-center font-mono transition-colors"
		>
			<div className="relative flex justify-center">
				<button
					className="text-4xl font-medium antialiased text-stroke outline-0 peer"
					onClick={copyToClipboard}
				>
					{color}
				</button>
				<span className="hidden peer-hover:after:content-['Click_to_copy'] peer-active:after:content-['Copied'] peer-hover:block bg-black bg-opacity-50 text-white font-semibold text-center rounded-full absolute -bottom-6 px-2"></span>
			</div>

			{showTutorial && (
				<div
					className="bg-black fixed bottom-8 bg-opacity-60 flex justify-center items-center font-mono rounded-md flex-col text-white p-4"
					onClick={(e) => {
						e.stopPropagation()
					}}
				>
					<p className="font-semibold">Random Color Generator</p>
					<div className="flex mt-4 gap-y-4 items-center">
						<div className="w-28 flex flex-col items-center justify-center">
							<img
								src="/keyboard-icon.svg"
								alt=""
								className="h-12"
							/>
							<p>Space</p>
						</div>
						<p>or</p>
						<div className="w-28 flex flex-col items-center justify-center">
							<img
								src="/arrow-icon.svg"
								alt=""
								className="h-12"
							/>
							<p>Click</p>
						</div>
					</div>
				</div>
			)}

			<Contacts />
		</div>
	)
}
