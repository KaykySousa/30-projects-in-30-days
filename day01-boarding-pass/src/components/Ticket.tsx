import Divider from "./Divider"
import Info from "./Info"

export default function Ticket() {
	return (
		<div className="w-full bg-white rounded-xl flex flex-col shadow text-black transition-transform hover:scale-105">
			<section className="p-6">
				<div className="flex justify-between">
					<Info label="Voo" content="KY0402" />
					<Info label="Data" content="23/05/2023" alignOnRight />
				</div>
				<div className="flex justify-between mt-6 relative">
					<div className="flex flex-col gap-y-1">
						<p className="text-gray-700 text-sm leading-none">
							São Paulo, Brasil
						</p>
						<p className="text-3xl font-semibold leading-none">
							GRU
						</p>
						<p className="leading-none">17:00</p>
					</div>
					<img
						src="/airplane-icon.svg"
						alt="Ícone de avião"
						className="h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
					<div className="flex flex-col gap-y-1 text-right">
						<p className="text-gray-700 text-sm leading-none">
							São Francisco, EUA
						</p>
						<p className="text-3xl font-semibold leading-none">
							SFO
						</p>
						<p className="leading-none">
							04:48
							<sup className="text-red-700 font-bold ml-px">
								+1
							</sup>
						</p>
					</div>
				</div>
			</section>
			<Divider />
			<section className="p-6 flex justify-between">
				<Info label="Passageiro" content="Kayky de Sousa" />
				<Info label="Assento" content="28A" alignOnRight />
			</section>
			<Divider />
			<section className="p-6 flex flex-col">
				<div className="flex justify-between">
					<div className="flex flex-col gap-y-5">
						<div>
							<p className="text-gray-700 text-sm leading-none mb-1">
								Embarque
							</p>
							<p className="font-medium text-base leading-none bg-rose-900 inline py-0.5 px-1.5 rounded text-white">
								16:15
							</p>
						</div>
						<Info label="Terminal" content="2" />
						<Info label="Portão" content="15" />
					</div>
					<div className="text-center">
						<img
							src="/qrcode.png"
							alt="QRCode image"
							className="w-36 h-36"
						/>
						<p className="text-gray-700 text-xs mt-1">
							Grupo de embarque: 3
						</p>
					</div>
				</div>
				<p className="text-center mt-3 text-sm">
					<strong className="text-rose-900">Atenção:</strong> o portão
					fechará às 16:45
				</p>
			</section>
		</div>
	)
}
