interface CryptoCardProps {
	id: number
	name: string
	symbol: string
	price: number
}

export default function CryptoCard({
	id,
	name,
	symbol,
	price,
}: CryptoCardProps) {
	return (
		<div className="flex items-center bg-white border border-gray-100 rounded p-2">
			<img
				src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
				alt={`${name} logo`}
				className="h-10"
			/>
			<p className="flex-1 ml-4 font-semibold">
				{name} ({symbol})
			</p>
			<p className="">
				R$ {parseFloat(price.toFixed(2)).toLocaleString("pt-BR")}
			</p>
		</div>
	)
}
