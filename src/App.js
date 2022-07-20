import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { URL_LINK } from "./config";
import { Header } from "./component/Header";
import { Table } from "./component/Table";

function App() {
	const [rates, setRates] = useState([])
	const [loading, setLoading] = useState(false)
	const [symbols, setSymbols] = useState("USD")
	const [amount, setAmount] = useState(1)


	useEffect(() => {
		fetch(URL_LINK(symbols, amount))
			.then((response) => {
				setLoading(false)
				return response.json();
			})
			.then((data) => {
				setLoading(true)
				setRates(data.rates)
			})
			.catch(error => {
				setLoading(false)
				console.error('There was an error!', error);
			});

	}, [amount, symbols])

	return (
		<>
			<Header />
			<Table
				loading={loading}
				amount={amount}
				setAmount={setAmount}
				symbols={symbols}
				setSymbol={setSymbols}
				rates={rates}
			/>
		</>
	);
}

export default App;
