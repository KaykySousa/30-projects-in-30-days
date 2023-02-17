import Contacts from "@/components/Contacts"
import CryptoCard from "@/components/CryptoCard"

interface Cryptos {
	status: any
	data: {
		id: number
		name: string
		symbol: string
		quote: {
			BRL: {
				price: number
			}
		}
	}[]
}

export default async function Home() {
	const res = await fetch(
		"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&convert=BRL",
		{
			headers: {
				"X-CMC_PRO_API_KEY": process.env.API_KEY!,
			},
			cache: "no-store"
		}
	)

	const cryptos: Cryptos = await res.json()

	return (
		<div className="min-h-screen w-full bg-neutral-50 flex flex-col justify-center items-center px-4 py-4 md:py-6">
			<p className="text-xl font-semibold mb-4">Criptomoedas</p>
			<div className="max-w-lg w-full flex flex-col gap-y-1 h-full overflow-y-auto">
				{cryptos.data.map((crypto, index) => (
					<CryptoCard
						key={index}
						id={crypto.id}
						name={crypto.name}
						price={crypto.quote.BRL.price}
						symbol={crypto.symbol}
					/>
				))}
			</div>
			<Contacts />
		</div>
	)
}
