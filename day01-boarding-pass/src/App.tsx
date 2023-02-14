import Contacts from "./components/Contacts"
import Ticket from "./components/Ticket"

export default function App() {
	return (
		<div className="min-h-screen w-full flex justify-center items-center bg-rose-900 p-4">
			<div className="flex flex-col items-center w-80 text-white gap-y-5">
				<p className="text-lg font-semibold">Cartão de embarque</p>
				<Ticket />
				<p className="w-72 text-sm text-center opacity-70">
					Em caso de problemas, procure o balcão de atendimento da sua
					companhia aérea
				</p>
			</div>

			<Contacts />
		</div>
	)
}
