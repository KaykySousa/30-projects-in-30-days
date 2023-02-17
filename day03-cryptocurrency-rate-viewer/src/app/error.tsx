"use client"

import { useEffect } from "react"

interface ErrorPageProps {
	error: Error
	reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="min-h-screen w-full flex justify-center items-center flex-col">
			<p className="mb-4 font-semibold text-lg text-center">
				Algo deu errado ao tentar apresentar as cotações
			</p>
			<button
				onClick={reset}
				className="h-12 px-4 bg-slate-900 text-white font-semibold rounded hover:bg-slate-800"
			>
				Tente novamente
			</button>
		</div>
	)
}
